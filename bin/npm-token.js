const libs = require("./modules");
const {execSync} = require("child_process");
const path = require("path");

libs.forEach(l => {
    console.log(`linking .npmtoken to ${l}`)
    try {
        execSync(`rimraf .npmtoken && ln -s ../.npmtoken .npmtoken`, {
            cwd: path.join(process.cwd(), l),
            env: process.env
        })
    } catch (e){
        process.exit(1)
    }

})
