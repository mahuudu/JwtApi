const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/jwt',{ 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }).then(console.log('Mongoose running')
        ).catch((err)=>console.log(err));
    } catch (error) {
        console.log(error);
    }
}


module.exports = { connect };