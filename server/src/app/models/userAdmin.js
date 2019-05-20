const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const UserAdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String, 
        required: true, 
        select: false,
    },
    passwordResetToken:{
        type: String, 
        select: false, 
    },
    passwordResetExpires: {
        type: Date, 
        select: false,
    },
    createAt: {
        type: Date, 
        default: Date.now,
    }, 

    projects: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project', 
        require: true,
    }, 

})


UserAdminSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;

    next();
})

const UserAdmin = mongoose.model('UserAdmin', UserAdminSchema);

module.exports = UserAdmin;