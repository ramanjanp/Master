// URL for Golbal stuff: https://nodejs.org/api/globals.html
var path = require("path")
//Global Classes
console.log("Hello Raman..")

//Variable
var hello = "Hello Raman from node js files.."
console.log(hello);
console.log(`This " ${hello.slice(6, 12)}" is from curly braces`);

console.log(__dirname)
console.log(__filename)

//Using PATH modules
console.log(path.basename(__dirname))
console.log(path.basename(__filename))


//Process
console.log(process.argv)

function grab(flag) {
    var index = process.argv.indexOf(flag)

    return index == -1 ? null : process.argv[index+1]
}

var greeting = grab('--greeting')
var user = grab('--user')

if (!user || !greeting) {
    console.log("No parameters set..")
}
else {
    console.log(`${greeting} ${user}! `)
}