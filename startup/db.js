
const mongoose = require('mongoose');


module.exports = () => {
    mongoose.connect('enter connection string', {
        
    }).then(() => console.log('Mongo Db Connected.....'));
}