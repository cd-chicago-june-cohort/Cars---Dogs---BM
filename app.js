var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request, response) {
    console.log("Dude asked for this URL: ", request.url);
    if(request.url === '/') {
        fs.readFile("views/index.html", "utf8", function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cars") {
        fs.readFile("views/cars.html", "utf8", function(errors, contents){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/dogs") {
        fs.readFile("views/dogs.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cats") {
        fs.readFile("views/cats.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/images/chop.jpg") {
        fs.readFile("./images/chop.jpg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/images/dog2.jpg") {
        fs.readFile("./images/dog2.jpg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/images/dog3.jpg") {
        fs.readFile("./images/dog3.jpg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/images/dog4.jpg") {
        fs.readFile("./images/dog4.jpg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/images/car1.jpg") {
        fs.readFile("./images/car1.jpg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/images/car2.jpg") {
        fs.readFile("./images/car2.jpg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/images/car3.jpg") {
        fs.readFile("./images/car3.jpg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/images/car4.jpg") {
        fs.readFile("./images/car4.jpg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/stylesheets/styles.css'){
        fs.readFile('./stylesheets/styles.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === "/newcar") {
        fs.readFile("views/newcar.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/adopt") {
        fs.readFile("views/adopt.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.end('File Not Found');
    }

});

server.listen(7077);
console.log("Running with the Devil on 7077")