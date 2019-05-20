const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const mailer = require('../../modules/mailer');

const authConfig = require('../../config/auth');

const UserAdmin = require('../models/UserAdmin');

const router = express.Router();


function generateToken(params = {}){
return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
});

};

router.post('/abebe-register', async (req, res) => {

    const { email } = req.body;

    try {

        if(await UserAdmin.findOne({ email }))
        return res.status(400).send({
            error: 'User Admin already exist'
        });

        const userAdmin = await UserAdmin.create(req.body);

        userAdmin.password = undefined;

        return res.send({ userAdmin,
            token: generateToken({ id: userAdmin.id }),
        });
    }
    catch (err) {
        return res.status(400).send({
            error: 'Regristration failed'
        });
    }
});

router.post('/abebe-authenticate', async(req, res) =>{
const { email, password } = req.body;

const userAdmin = await UserAdmin.findOne( { email }).select('+password');

if(!userAdmin){
    return res.status(400).send({
        error: 'User Admin not found'
    })
}

if(!await bcrypt.compare(password, userAdmin.password)){
    return res.status(400).send({
        error: 'Invalid password'
    });
}

userAdmin.password = undefined;

res.send({ 
    userAdmin, 
    token: generateToken({ id: userAdmin.id }),
});

});

router.post('/abebe-forgot_password', async(req,res) =>{
    const { email } = req.body;

    try{
        const userAdmin = await UserAdmin.findOne({ email });

        if (!userAdmin)
            return res.status(400).send({
                error: 'User Admin not found'
            });
        
        const token = crypto.randomBytes(20).toString('hex');
        const now =  new Date();
        now.setHours(now.getHours() + 1);
        
        await UserAdmin.findByIdAndUpdate(userAdmin.id, {
            '$set': {
                passwordResetToken: token, 
                passwordResetExpires: now,
            }
        })
        mailer.sendMail({
            to: email, 
            from: 'oskojess@gmail.com',
            template: 'auth/forgot_password',
            context: { token },

        }, (err) => {
            if(err)
            return res.status(400).send({
                error: 'Cannot send forgot password email'
            });

            res.send();
        })
    }
    catch (err){
        console.log(err)
        res.status(400).send({
            error: 'Erro on forgot password, try again'
        })
    }

});

router.post('/abebe-reset_password', async(req, res) => {
    const { email, token, password } = req.body;

    try{
        const userAdmin = await UserAdmin.findOne({ email })
            .select('+passwordResetToken passwordResetExpires');
        
            if (!userAdmin)
            return res.status(400).send({
                error: 'User Admin not found'
            });

        if(token !== userAdmin.passwordResetToken)
        
        return res.status(400).send({
            error: 'Token invalid'
        });

    const now = new Date();

    if(now > userAdmin.passwordResetExpires)
        
    return res.status(400).send({
        error: 'Token expired, generate a new one'
    });

    userAdmin.password = password;

    await userAdmin.save();
    
    res.send();

    } 
    catch{
            return res.status(400).send({
                error: "Cannot reset password, try again"
            })
    }
})
module.exports = app => app.use('/auth',router);