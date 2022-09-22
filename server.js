const http = require("http") // to use a library in nodejs we need to use "require" method and created a variable named http
                            // using "http" library in nodejs using require method

const port = 1000;  // using this port variable to declare a port for our server;                            


//using the "http" library to create a server

const server = http.createServer((req,res) => { //used arrow function in the createServer method in http library

})


// setup of server

server.listen(port, function(error){   //server starts listening at the declared port number and if there's error it will use that error function.
     if(error){
        console.log(`Error happened in this Server. Error : ${error}`)
     } else{
        console.log(`Server is listening to the port. port : ${port}`)
     }

})