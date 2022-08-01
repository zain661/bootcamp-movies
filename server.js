const express = require("express")
const axios = require("axios")
const app = express()
const port = 8080
const path = require("path")


app.use(express.static((path.join(__dirname, "dist"))))
app.use(express.static((path.join(__dirname, "node_modules"))))

app.get('/movies/:title' , function(req,res){
    const title = req.params.title
    axios.get(`http://www.omdbapi.com/?apikey=b0d39b78&s=${title}`)
         .then(result => {
            const movies = result.data.Search.map((movie)=>{
                return {
                id: movie.imdbID ,
                title: movie.Title ,
                poster: movie.Poster ,
                year: movie.Year
                
                }
            })
            
            res.send(movies);
            
  
})

})
app.listen(port,function(){
    console.log(`server running on port ${port}`);
})


