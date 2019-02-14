let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let Product = new Schema({
    id:          { type:Schema.Types.ObjectId, required:true},
    Name:        { type:String, required:true},
    Description: { type:String, required:true},
    Price:       { type:String, required:true},
    Category:    { type:String, required:true},
    image:       { type:String, required:true},
    color:       { type:String, required:true}
})

module.exports = mongoose.model("Product",Product)