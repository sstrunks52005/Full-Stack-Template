const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

//3 declare variables before func for global scope - can be used in any function
let db,
    dbConnectionString = process.env.DB_STRING,     //connection string to connect MongoDB. Pull out of environment file
    dbName = 'startrek-aliens-guide',
    connection

//4 connect to mongo db
    MongoClient.connect(dbConnectionString)         //tells mongo to grab connection string and have credentials to access
        .then(client => {
            console.log(`Connected to database`)     //go to mongo to check your dbName and collection 
            db = Client.db(dbName)
            collection = db.collection('startrek-aliens')
        })