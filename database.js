const fs = require('fs')
module.exports = {
    save(target,data) {
        fs.writeFileSync(target,(data))
        console.log(data)
    },
    load(source) {
        return JSON.parse(fs.readFileSync(source))
    }
}
