const express = require('express');

const errorhandler=(err, req, res, next)=>{
 console.log('Middleware error handling!');
 const status= err.statusCode || 500;
 const message= err.message || 'something went wrong!';
 res.status(status).json({
    success: false,
    status,
    message,
    stack:(process.env.NODE_ENV!=='production')?err.stack:{}
 });
};

module.exports = errorhandler;