const express = require('express')
 const app = express()


 app.get('/', (req, res) => {
   res.sendFile( __dirname + '/views/Home.html')
 })

 
 app.get('/About', (req, res) => {
    res.sendFile( __dirname + '/views/About.html')
  
 })

 
 app.get('/Works', (req, res) => {
    res.sendFile( __dirname + '/views/Works.html') 
     
 })

 app.get('/PhotoGallery', (req, res) => {
    res.sendFile( __dirname + '/views/PhotoGallery.html')
     
})

app.listen(3000)