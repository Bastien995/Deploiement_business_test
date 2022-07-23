const express = require('express');
const {status} = require('express/lib/response');
const app = express();
let ejs = require('ejs');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const { urlencoded } = require('express');
const connection = require('express-myconnection');

const configDb = {
    host : "localhost",
    user : "root",
    password : "",
    port : 3306,
    database : "utilisateurs",
}

//extraction des donnees
app.use(urlencoded({extended: false}));

//connection a la base de donnée
app.use(myconnection(mysql,configDb,'pool'));

app.use("/assets",express.static("assets"))

app.set("views","./html");
app.set("view engine","ejs");


app.post('/users',(req,res)=>{
    let User_id = req.body.User_id;
    let Nom = req.body.Nom;
    let Prenom = req.body.Prenom;
    let Email = req.body.Email;
    let Numéro = req.body.Numéro;

    req.getConnection((erreur,connection)=>{
        if(erreur){
            console.log(erreur);
        }else{
            connection.query("INSERT INTO users (User_id,Nom,Prenom,Email,Numéro) VALUES (?,?,?,?,?)",[null,Nom,Prenom,Email,Numéro],(erreur,resultat)=>{
                if(erreur){
                    console.log(erreur);
                }else{
                        res.status(300).redirect("/");
                    }
                })
            }
        })
})


app.get("/",(req,res)=>{
    res.status(200).render("index");
})
app.get("/A_propos",(req,res)=>{
    res.status(200).render("A_propos");
})
app.get("/Ingenieur_logiciel",(req,res)=>{
    res.status(200).render("Ingenieur_logiciel");
})
app.get("/Paiement",(req,res)=>{
    res.status(200).render("Paiement");
})
app.get("/connexion",(req,res)=>{
    res.status(200).render("connexion")
})
app.use((req,res)=>{
    res.status(404).render("erreur");
})
app.listen(5501,()=>{
    console.log('attente de requette')
})
