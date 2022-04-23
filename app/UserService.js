const user = require("./user")

class UserService {
    constructor(id, username, name) {
        this.id = id
        this.username = username
        this.name = name
        this.bio = "user 26757213"
            // this.dateCreated = new Date() // date nos da la hora del SO
            // this.lastUpdated = new Date()
    }
    get getInfo() {
        // creacion de la lista
        const listInfo = []

        // se agregan los datos a la lista
        listInfo.push(this.id)
        listInfo.push(this.username)
        listInfo.push(this.name)
        listInfo.push(this.bio)

        // Se retornan los valores que se agregaron a la lista
        return listInfo
    }
    set setUsername(newUsername) {
        this.username = newUsername
    }
}
module.exports = UserService