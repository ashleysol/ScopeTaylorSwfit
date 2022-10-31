const express = require("express")
const path = require("path")

const publicDirectoryPath = path.join(__dirname, './public')
const app = express()

app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
   
})

app.get('about', (req, res) => {
    
})

app.get('output', (req, res) => {
   
})


app.listen(3000, () =>{
    console.log("server is up at port 3000!")
})