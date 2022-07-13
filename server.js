const express = require('express')
const app = express()
const cors = require('cors')
const { response } = require('express')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
//can add const PORT = 8000 but dont need to since its in .env file

//3 declare variables before func for global scope - can be used in any function
let db,
    dbConnectionString = process.env.DB_STRING,     //connection string to connect MongoDB. Pull out of environment file
    dbName = 'startrek-aliens-guide',
    connection

//4 connect to mongo db
    MongoClient.connect(dbConnectionString)         //tells mongo to grab connection string and have credentials to access
        .then(client => {
            console.log(`Connected to database`)     //go to mongo to check your dbName and collection 
            db = client.db(dbName)
            collection = db.collection('startrek-aliens')
        })

//6 middleware - need these prior to any crud operations (get, put etc)
app.set('view engine', 'ejs')               //templating let us run JS in html. shorthand tool
app.use(express.static('public'))           //setup public folder - lets app automatically serve files in public as they are called upon
app.use(express.urlencoded({extended:true}))  //returns middleware that only parses urlencoded bodies 
app.use(express.json())                     //JSON - how obj is formatted when sent back and forth. parse our data returned from a db in json
app.use(cors())                             //cross origin request, stops cor errors. 

//10 test heroku - listen for url to pass into server and return to different location. express method:
app.get('/', async(request, respond) => {
    try {
        response.render('index.ejs')  //when visit to home page, render index.ejs to display, if not work send error
    } catch(error) {
        response.status(500).send({message: error.message})
    }
})


//5 add connection port - put in env to hide port
app.listen(process.env.PORT || PORT, () => {        //if PORT work heroku will assign a port
    console.log(`Server is running on port`)
})