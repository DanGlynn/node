var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var counterSchema = new Schema({
    id: {type:String, required: true},
    count: {type: Number, default: 0}
});

var Counter = mongoose.model('Counter', counterSchema);

var urlSchema = new Schema({
    id: {type:Number},
    url: '',
    created_at: ''
});

var URL = mongoose.model('URL', urlSchema);

