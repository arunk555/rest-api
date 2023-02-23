const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name is required.'],
        minlength: [3, 'Name must be at least 3 characters long, got {VALUE}'],
        maxlength: [150, 'Name must be max 150 characters long.']
    },
    email:{
        type: String,
        unique: true,
        required: [true, 'Email is required.'],
        lowercase: true,
        minlength: [3, 'Email must be at least 3 characters long, got {VALUE}'],
        maxlength: [200, 'Email must be max 200 characters long, got {VALUE}']
    },
    token:{
        type: String,
        default: null
    },
    status:{
        type: Number,
        default: 0,
        maxlength:1,
        enum: [0,1]
    },
    createdAt:{
        type: Date,
        default: ()=>Date.now()
    },
    updatedAt:{
        type: Date,
        default: ()=>Date.now()
    }
}, {timestamps: true});


module.exports = model('lgusers', userSchema);