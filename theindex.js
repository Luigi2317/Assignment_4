const express = require("express");
const path = require("path");

const knex = require('knex')({
  client: 'pg',
  connection:'postgres://postgres:uci@localhost:5432/postgres'
})

// Création du serveur Express
const app = express();

// Configuration du serveur
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));



// POST /edit/5(Create)
knex('films_chuck_norris') 
    .insert([
        { films_name: 'Forrest Warrior', films_director: 'Aaron Norris', films_date:1996, films_country_production:'USA'},
        ])
    .then()


//Select All(Read)
knex('films_chuck_norris')
    .then((res) => console.log(res))


// POST /update/5(Update)
knex('films_chuck_norris')
    .where({ films_name: 'Walker, Texas Ranger' })
    .update({ films_director: 'Christopher Cannan & Leslie Greif' })
    .then()


// POST /delete/5(Delete)
knex('films_chuck_norris')
    .where({ films_name: 'Forrest Warrior' })
    .del()
    .then()