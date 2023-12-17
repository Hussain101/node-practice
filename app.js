const os = require ("os");
const http = require("http");
const fs = require("fs");
const url = require("url");
//for checking the cpus;
os.cpus().length
// create the server

const myServer= http.createServer((req,res) =>{
    const myUrl = url.parse(req.url);
    const log = `new request ${Date.UTC.toString()}`
   fs.appendFile("log.txt",log, (error,data) =>{
    switch (myUrl.pathname) {
        case "/":
            res.end("hello");
            break;
        case "/about":
            const username = myUrl.query.myname
                console.log("🚀 ~ file: app.js:19 ~ fs.appendFile ~ username:", username)
                res.end(`my name is ${username}`)    
    } 
   })   
});

myServer.listen(3000, () => {console.log("server started at 3000")})
