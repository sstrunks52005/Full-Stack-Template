const express = require('express')
const app = express()
const cors = require('cors')
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

//5 add connection port - put in env to hide port
app.listen(process.env.PORT || PORT, () => {        //if PORT work heroku will assign a port
    console.log(`Server is running on port`)
})

