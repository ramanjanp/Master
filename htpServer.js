var https = require('http')

var server = https.createServer(function (req, res) {
    res.writeHead(200, { "content-tye": "text/html" });
    res.end(`
    <!DOCTYPE html>
    <html>
        <head>
         <title> Web Server</title>
        </head>
    <body>
        <h1> Server HTML Request</h1>
        <p>${req.method}
        <p>${req.url}
        </body>
    </html>
`);
});

server.listen(3000)

console.log("Server listening..")