var express = require('express');
var mysql = require('mysql');
var db = mysql.createClient({ user:"root",password:"toor" });
	db.query("USE library");
var RedisStore = require('connect-redis')(express);
var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.session({ secret: "secret", store: new RedisStore }));
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
	app.use(express.errorHandler()); 
});



app.post('/user-login.json', function(req, res){
	var post = req.body;
	//console.log(post);
	db.query(
		"SELECT * FROM users WHERE username='"+req.body.user+"';",
		function(e,r,f){
			//console.log(r)
			var row = r[0];
			if(row!=null && row.password==post.pass){
				req.session.id = row.id
				console.log("\n #info : User("+req.session.id+") Logged In")
				res.send('{ "id":"'+row.id+'","user":"'+row.username+'" }')
			}
			else {
				console.log("\n #info : User Login Error")
				res.send('{ "id":"0","user":"nobody" }')
			}
		}
	)
});

app.post('/user-login-status.json', function(req, res){
	if(req.session.id){
		console.log("\n #info : User("+req.session.id+") Already Logged In")
		res.send('{ "status":"true" }')
	}
	else{
		console.log("\n #info : User Not Logged In")
		res.send('{ "status":"false" }')
	}
});

app.post('/user-logout.json', function(req, res){
	req.session.destroy();
	console.log("\n #info : User Logged Out")
	res.send('{ "status":"true" }')
});

app.listen(10080);
console.log("Library Server Started on port %d in %s mode", app.address().port, app.settings.env);
