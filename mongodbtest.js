var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemaName = new Schema({
    username: String,
    password: {
        type: String,
        required: true
    }
}, {
    collection: 'NewUsers'
});

var Model = mongoose.model('UserModel', schemaName);
mongoose.connect('mongodb+srv://rpgulabsingh:cluster0@cluster0.tedx0.mongodb.net/facebook');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("db connected")
});


module.exports = Model;

// Model.create({username: "gulab", password: "gulabpassword"}).then(
//     function(err, data){

//         if(err){ console.log(err)} 
//         if(!err) {
//             console.log(data)
//         }
//     }
    
//     );

// Model.updateOne({username: "gulab"}, {password: "newpassword"}).then(
//         function(err, data){
    
//             if(err){ console.log(err)} 
//             if(!err) {
//                 console.log(data)
//             }
//         }
        
//         );