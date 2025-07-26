

const mongoose = require('mongoose');

const {Schema} = mongoose;

const slug = require('slug');
const slugify = require('slugify');

const portfolioSchema = new Schema({

    title:{
        type:String,
        required:true,
        unique:true
    },
    slug:{
        type:String,
        required:true,
        default:function(){return slugify(this.title)}
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    createAt:{
        type:Date,
        default:Date.now()
    }

});

module.exports = mongoose.model('portfolio',portfolioSchema);