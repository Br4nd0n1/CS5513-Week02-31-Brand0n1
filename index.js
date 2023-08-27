
const http = require("http");


const fs = require("fs").promises;


const reqListener = function(req, res) {

  console.log(req.url);

  if (req.url === "/Dashboard") 
  {

    fs.readFile( __dirname + "/Dashboard.html" )
      .then(
        function(send) {
      
          res.setHeader("Content-Type", "text/html; charset=UTF-8");
          res.writeHead(200);
          res.end(send);
        }
      )
  } 
else
{

    fs.readFile(__dirname + "/btnInfo.json")
      .then(function(send) {
        res.setHeader("Content-Type", "application/json; charset=UTF-8");
        res.writeHead(200);
        res.end(send);
      });
    
  }
};

const server = http.createServer(reqListener);
const host = "0.0.0.0"; 
const port = "8080";


server.listen(port, host, function() 
{
  console.log(`Server is running`);
});