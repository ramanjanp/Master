var path = require("path")
var util = require("util")
var v8 = require("v8")
var readline = require("readline")

process.stdout.write("\n\n Console Log..\n")
console.log(path.basename(__filename))
console.log(path.basename(__dirname))
console.log(path.join(__dirname,'www','samples'))

process.stdout.write("\n\n Util Log..\n")
util.log(path.join(__dirname, 'www', 'samples'))

process.stdout.write("\n\n V8 --Heap Statistics Log..\n")
console.log(v8.getHeapSpaceStatistics())

process.stdout.write("\n\n V8 --Read Line..\n")

var realperson = {
    name: '',
    sayings: []
}
rl = readline.createInterface(process.stdin, process.stdout)
rl.question("What is your Name ? : ", function (answer) {

    realperson.name = answer.toString()

    rl.setPrompt(`what would ${realperson.name} say ?`)
    rl.prompt();//It waits for the answer

    //once you type the anser n click enter 
    rl.on('line', function (saying) {
        if (saying.toString() === 'exit') {
            rl.close();
        }
        else {
            realperson.sayings.push(saying.toString())
            rl.setPrompt(`what else would ${realperson.name} say ? (exit to leave)`)
            rl.prompt();//It waits for the answer
        }
    })
})

rl.on('close', function () {
    console.log("%s sayings : %j", realperson.name, realperson.sayings)
})