var waittime = 3000
var currenttime = 0
var waitinterval = 100
var waitedpercentage = 0


function waitpercentage(p) {
    
    process.stdout.cursorTo(0);
    process.stdout.write(`Waited ${p} %`)
}

var interval = setInterval(function () {
    currenttime += waitinterval;
    var p = Math.floor((currenttime / waittime) * 100);
    waitpercentage(p)
}, waitinterval)

setTimeout(function () {
    clearInterval(interval)
    waitpercentage(100)
    process.stdout.write(`\n\n`)
    console.log('Done..')
}, waittime)

waitpercentage(waitedpercentage)