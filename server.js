const http = require("http") // to use a library in nodejs we need to use "require" method and created a variable named http
                           // using "http" library in nodejs using require method
const fs = require('fs') // using the fs module to read file directory in my server
const port = 1000;  // using this port variable to declare a port for our server;                            
//using the "http" library to create a server
const server = http.createServer((req,res) => { //used arrow function in the createServer method in http library   
    res.writeHead(200, {'Content-type': 'text/html'})
    fs.readFile('index.html',function(error,data){
        if(error){
            res.writeHead(404)
            res.write(`Error: there is no file available. ${error}`)
        }else{
           res.write(data) 
        }
        res.end()
    })
})
// setup of server
server.listen(port, function(error){   //server starts listening at the declared port number and if there's error it will use that error function.
     if(error){
        console.log(`Error happened in this Server. Error : ${error}`)
     } else{
        console.log(`Server is listening to the port. port : ${port}`)
     }

})