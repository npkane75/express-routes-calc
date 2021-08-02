
const express = require('express')
const rowdy = require('rowdy-logger')
// configure express app
const app = express()
const PORT = 4000
const rowdyResults = rowdy.begin(app)

// // define routes
// app.get('/', (req, res) => {
//   res.send('Hello, World!')
// });


// app.get('/',(req,res)=>res.send('url tetsing paramters'))

// query.x)
//     let y = parseInt(req.query.y)
//     let sum =(x+y);app.get('add/:x:y', (req, res) => {
//     let x = parseInt(req.
//     res.send(`Your added total is ${sum}.`);
  
// });

// app.get('/add/:x:y'(req,res)=>{
// const num1= (req.query.x);

// })

// // listen on a port
// app.listen(PORT, () => {
//   console.log()
// })

app.get('/add/:x/:y', (req, res) => {
    let num1 = parseInt (req.params.x)
    let num2= parseInt (req.params.y)
    let sum = (num1 + num2)
    res.send("calculations =" + sum);
})

app.get('/subtract/:x/:y', (req, res) => {
    let num1 = parseInt (req.params.x)
    let num2= parseInt (req.params.y)
    let sub = (num1-num2)
    res.send("calculations =" + sub);
})

app.get('/product/:x/:y', (req, res) => {
    let num1 = parseInt (req.params.x)
    let num2= parseInt (req.params.y)
    let product = (num1 * num2)
    res.send("calculations =" + product);
})

app.get('/quotient/:x/:y', (req, res) => {
    let num1 = parseInt (req.params.x)
    let num2= parseInt (req.params.y)
    let quotient = (num1 % num2)
    res.send("calculations = " + quotient);
})


app.listen(PORT, function() {
    console.log('your port is running on' + PORT)
    rowdyResults.print()
});
