let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let Product = new Schema({
    id:          { type:Schema.Types.ObjectId},
    Name:        { type:String, required:true},
    Description: { type:String, required:true},
    Price:       { type:String, required:true},
    Category:    { type:String, required:true},
    Image:       { type:String, required:true},
    Color:       { type:String, required:true}
})

module.exports = mongoose.model("Product",Product)