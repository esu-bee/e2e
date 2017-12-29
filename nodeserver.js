var http = require("http");
var fs = require("fs");

var val =`<!doctype html>
<html ng-app>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js"></script>
  </head>
  <body>
    <div>
      <label>Name:</label>
      <input type="text" ng-model="yourName" placeholder="Enter a name here">
      <hr>
      <h1>Hello {{yourName}}!</h1>
    </div>
  </body>
</html>
<script>
  /*throw new Error("one");
  var xx= function(){
  console.log("log");
  console.error("error")
  console.warn("two");
  console.info("three")
  };
  xx();*/
</script>
`;

// var server = http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/html"});
//   response.write(val);
//   response.end();
// });

http.createServer(function(req, res){
fs.readFile('testAngular.html',function (err, data){
  res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
  res.write(data);
  res.end();
});
}).listen(8000);
console.log("Server is listening 8000 ...");