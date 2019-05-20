    const mongoose = require('../../database');
    
    const ProjectSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        category: {
            type: String, 
            required: false,
        }, 

        objective:{
            type: String, 
            required: false,
        },

        project_format:{
            type: String, 
            required: false,
        },

        list_needs: {
            type: String, 
            required: false,
        },

        local: {
            type: String, 
            required: false,
        }, 

        tags:{
            type: String, 
            required: false,
        },

        value:{
            type: Number, 
            required: false,
        },

        status: 
        {
            pendent: {
                type: Boolean,
                default: 'true',
            },
            approved: {
                type: Boolean, 
                    default: 'false',
            },
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', 
            require: true,
        }, 


        createAt: {
            type: Date, 
            default: Date.now,
        },

    })

    const Project = mongoose.model('Project', ProjectSchema);

    module.exports = Project;