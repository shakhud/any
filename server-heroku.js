const express = require('express');
const hbs = require('hbs');
var app = express();

const hport = process.env.PORT || 3000;
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.get('/',(req,res) => {
res.render('landing.hbs',{
	pageTitle:'landung page',
	welcomeMessage:'welcome to my website',
	currentYear: new Date().getFullYear(),
	studentDetails:'BCA'
});
});

app.listen(hport,() =>{
	console.log(`App listening on port ${hport}`);
})

