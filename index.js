const express = require ('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

const chefPortfolio = require('./data/chef_portfolio.json')

app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.send('Chef is running')

})

app.get('/chef_portfolio', (req, res)=>{
    res.send(chefPortfolio)
})

app.listen(port, ()=>{
    console.log(`Chef port is running ${port}`)
})


