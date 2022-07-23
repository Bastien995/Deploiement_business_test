const express = require('express');
const app = express();
let ejs = require('ejs')

//Definition du moteur de rendu
app.set('view engine','ejs');
app.set('views','./html');

//Pour se servir des fichiers statiques(css/img/js etc...)
app.use("/assets",express.static("assets"));


app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/Ingenieur_logiciel',(req,res)=>{
    res.render('Ingenieur_logiciel')
})
app.get('/A_propos',(req,res)=>{
    res.render('A_propos')
})
app.get('/Paiement',(req,res)=>{
    res.render('Paiement')
})
app.get('/Connexion',(req,res)=>{
    res.render('Connexion')
})
app.listen(5501,()=>{
    console.log("htpps//localhost:5501/")
})