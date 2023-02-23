const mongoose = require("mongoose");
const {MONGO_URI} = process.env;

mongoose.set('strictQuery', true);
const mdbConnect= async function(){
    const dbsettings={
        useNewUrlParser: true,
        autoIndex: true
    }
    try {
       await new mongoose.connect(MONGO_URI, dbsettings);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

mongoose.connection.on('disconnected', ()=>{
    console.log("Mongodb disconnected!");
});

mongoose.connection.once('open', ()=>{
    console.log("Mongodb connected!");
});


module.exports = {mdbConnect};