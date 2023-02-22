require('dotenv').config();
const express = require('express');
const errorhandler = require('./middlewares/error');
const userRouter = require('./routes/user.routes');
const app = express();

app.use((req, res, next)=>{
  console.log('Time', new Date());
  next();
});

app.use(express.json({
     limit:'500mb'
}));

app.use(express.urlencoded({
    extended: false
}));

app.use("/welcome", (req, res)=>{
    console.log('Request URL:', req.originalUrl);
    res.status(200).json({
        success: true,
        message: "Welcome!"
    });
});

app.use('/user', userRouter);


app.use("*", (req, res)=>{
    console.log(req.params);
    res.status(404).json({
        success: false,
        status: 404,
        message: "Requested route is not found!"
    });
})

app.use(errorhandler);

module.exports = app;