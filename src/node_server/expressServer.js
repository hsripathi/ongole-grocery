var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/ongolefresh');

app.listen(3000, function () {
	console.log('listening on 3000');
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema;

var groceryCategory = new Schema({
	"key": String,
	"description": String,
	"itemLogo": String
})
var groceryCatModel = mongoose.model('grocerycategories', groceryCategory);

app.get('/grocery_categroy', function (req, res) {

	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	groceryCatModel.find(function (err, data) {
		res.send(data)
	});

	//res.send("Hellow Sripathi")
});
