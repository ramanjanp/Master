var https = require('https')
var fs = require('fs')

var options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/George_Washington",
    method: "GET"
};

var req = https.request(options, function (res) {
    var responseBody = "";
    console.log("Response from server started..")
    console.log(`Server Status ${res.statusCode}`)
    console.log("Response headers: %j", res.headers)

    res.setEncoding("UTF-8");

    res.once("data", function (chunk) {
        console.log(chunk);
    })

    res.on("data", function (chunk) {
        responseBody += chunk;
        console.log(`chunk length: ${chunk.length}`)
    })

    res.on("end", function () {
        fs.writeFile("D:\\George_Washington.html", responseBody, function (err) {
            if (err) {
                throw err;
            }
            console.log("File downloaded..")
        });
    }); //End Request

});//Main Request

req.on("error", function (err) {
    console.log("Problem with server..")
});

req.end();