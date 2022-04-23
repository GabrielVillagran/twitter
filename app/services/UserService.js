const user = require("../models/user")

class UserService {
    // requerimiento 1
    static create(id, username, name) {
        return new user(id, username, name, "user 26757213")
    }

    static getInfo(user) {
        // El método Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables
        // de un objeto. Las propiedades son devueltas en el mismo orden a como lo haría un bucle for...in 

        // Se esta pasando por parametro el objeto user para despues con ayuda de Object.values obtener los valores
        return Object.values(user)
    }

    // requerimiento 2

    // requerimiento 3
    // set setUsername(newUsername) {
    //     this.username = newUsername
    // }
    // static create(id, name, username) {
    //     this.id = id
    //     this.name = name
    //     this.username = username
    // }
    // requerimiento 4
    // static getAllUsernames() {
    //     // creacion de la lista
    //     const listUsers = []

    //     // se agregan los datos a la lista
    //     listUsers.push(user.)
    //     listUsers.push(this.username)
    //     listUsers.push(this.name)
    //     listUsers.push(this.bio)

    //     // Se retornan los valores que se agregaron a la lista
    //     return listUsers
    // }
}
module.exports = UserService