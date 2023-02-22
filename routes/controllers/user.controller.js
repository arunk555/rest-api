const getusers=(req, res, next)=>{
    console.log("adsa");
    try {
        res.status(200).json({
            success: true,
            status: 200,
            message: 'users'
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {getusers}