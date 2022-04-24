const user = require("../models/user")

class UserService {
    // requerimiento 1
    static create(id, username, name) {
        return new user(id, username, name, "user 26757213")
    }

    // requerimiento 2
    static getInfo(user) {
        // El método Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables
        // de un objeto. Las propiedades son devueltas en el mismo orden a como lo haría un bucle for...in 

        // Se esta pasando por parametro el objeto user para despues con ayuda de Object.values obtener los valores
        return Object.values(user)
    }

    // requerimiento 3
    static updateUsername(user, newUsername) {
        user.username = newUsername
    }

    // requerimiento 4
    static getAllUsernames(usernames) {
        return usernames.map(users => users.username)
    }
}
module.exports = UserService