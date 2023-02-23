const User = require('../models/user.model');

const getusers=async (req, res, next)=>{
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {getusers}