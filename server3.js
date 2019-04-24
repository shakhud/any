const express = require('express');
const fs = require('fs');
const hbs = require('hbs');

var app = express();
const port = 3000;

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));

app.use((req,res,next) =>{
	var currentTime = new Date().toString();
	console.log(`time stamp is - ${currentTime}`);
	console.log(`Request method is - ${req.method}`);
	console.log(`URL Visited is - ${req.url}`);
	
	var storedata = `${currentTime} ${req.method} ${req.url}`;
	fs.appendFile('savedata.log',storedata + '\n', (err) =>{
		if(err){
			console.log("error");
		}
});
next();	
})

app.use((req,res,next) =>{
	res.render('mant.hbs');
	//res.send('mant.hbs');
	//res.send('site under maintnance');
})

app.get('/', (req, res) => {   //req - request   res- response
   res.send({
     name: 'Anik',
     blog: 'https://webguruanik.blogspot.com',
     likes: ['Eat', 'Code', 'Sleep']
   });
});

app.get('/about', (req, res) => {
   res.send('About Page');
});

app.get('/error', (req, res) => {
   res.send({
     errorMsg: 'Unable to find the page'
   });
});

//listening the app in port no - 3000
app.listen(port, () => {
    console.log(`App listening on port number :- ${port}...!!!`);
});
 
