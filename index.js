const express = require ('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

const chefPortfolio = require('./data/chef_portfolio.json')

const chefRecipe = require('./data/chef_recipe.json')

app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.send('Chef is running')

})

app.get('/chef_recipes', (req,res)=>{
    res.send(chefRecipe)
})

app.get('/chef_recipes/:id', (req, res)=>{
    const id = req.params.id;
    const selectedRecipe = chefRecipe.find(n=> n.Chef_ID == id);
    res.send(selectedRecipe)
    console.log(id)
})

app.get('/chef_portfolio', (req, res)=>{
    res.send(chefPortfolio)
})

app.listen(port, ()=>{
    console.log(`Chef port is running ${port}`)
})


