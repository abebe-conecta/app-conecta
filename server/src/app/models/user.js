const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
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
    birthday: {
        type: Date,
        required: false,
    },
    gender:{
        type: String,
        required: false,
    }, 
    ethnicity:{
        type: String, 
        required: false,
    }, 
    occupation_area:{
        type: String, 
        required: false,
    },
    mei_cnpj:{
        type: Boolean,
        require: false,
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
    }
})


UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;

    next();
})

const User = mongoose.model('User', UserSchema);

module.exports = User;