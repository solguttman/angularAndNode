var express = require('express');
//var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.get('/contactlist',function(req,res){
	console.log('recved get reques');
	
	person1 = {
		name : 'tim',
		email : 'tim@gmail.com',
		number : '111-111-1111' 
	};
	person2 = {
		name : 'sol',
		email : 'sol@gmail.com',
		number : '222-222-2222' 
	};
	person3 = {
		name : 'john',
		email : 'john@gmail.com',
		number : '333-333-3333' 
	};
	
	var contactlist = [person1,person2,person3];
	res.json(contactlist);
});

app.listen(3000);

console.log('server running on port 3000');