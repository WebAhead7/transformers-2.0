const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost:';

const server = http.createServer((request,response)=>{
    const url = request.url;
    if (url === '/'){
        fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
            if(err){
                console.log(err);
            }
            response.writeHead(200,{'content-type':'text/html'});
            response.end(data);
        })
        
    }
});

server.listen(port,()=>{
    console.log(`listening on ${host}${port}`);
})