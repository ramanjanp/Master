var exec = require('child_process').exec;

exec("explorer http://google.com")
exec("dir /A /D", function (err, data) {
    if (err) {
        console.error("**********COMMAND NOT FOUND*******")
        return
    }
    console.log(data)
})
