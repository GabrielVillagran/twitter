const user = require("./user")

class UserService {
    constructor(id, username, name) {
        this.id = id
        this.username = username
        this.name = name
            // this.bio = "user 26757213"
        this.dateCreated = new Date() // date nos da la hora del SO
        this.lastUpdated = new Date()
    }
}
module.exports = UserService