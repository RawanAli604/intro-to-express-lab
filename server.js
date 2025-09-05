const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1> Hello! </h1>');
});

//exercise 1
app.get('/greetings', (req, res) => {
    const name = req.query.name;
    res.send(`<h1> Hello there, ${name} !</h1>`);
});

//exercise 2
app.get('/roll/:number', (req, res) => {
    //convert the string into an integer
const number = parseInt(req.params.number,10);
// check if it's a positive number and not a text
if(number >= 0 && !isNaN(number)){
    const random = Math.floor(Math.random()* (number+1));
    res.send(`<h1> You rolled a ${random}!`);
} else {
    res.send('<h1> You must specify a number </h1>')
}
});

//exercise 3
  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:num', (req, res) => {
const num = req.params.num;
if(num <= collectibles.length-1 && num>=0){
     let name = collectibles[num].name;
     let price = collectibles[num].price;
     res.send(`<h1>So, you want the ${name}? For ${price}, it can be yours!</h1>`);
} else {
   res.send('<h1>This item is not yet in stock. Check back soon!</h1>');
}
});

// exersice 4
  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

    app.get('/shoes', (req, res) =>{
    
    let filtered = shoes;
    let {minPrice, maxPrice, type } = req.query;

    if(minPrice){
        filtered = filtered.filter(shoe => shoe.price >= Number(minPrice));
    } 
    if (maxPrice) {
        filtered = filtered.filter(shoe => shoe.price <= Number(maxPrice));
    }
    if (type){
        filtered = filtered.filter(shoe => shoe.type === type.toLowerCase());
    } 
        res.send(filtered);

});

app.get
app.listen(PORT, () => {
console.log(`Listening on PORT: ${PORT}`)
});