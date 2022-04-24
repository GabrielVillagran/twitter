const UserService = require("../services/UserService")

class UserView {
    // creacion del metodo para verificar el payload existente
    static createUser(payload) {
        // Si payload cuenta con valor null, nos debe arrojar un objeto error que diga no existe
        if (payload == null) {
            // retorna el valor indicando que el payload no existe
            return { error: 'payload no existe' }
        }
        // se obtienen los valores del objeto payload y se verifica que se incluya en ellos un valor null
        if (Object.values(payload).includes(null)) {
            // se retoran el valor indicando que hay valores invalidos
            return { error: 'necesitan tener un valor válido' }
        }
        // Se verifica que los valores del objeto payload cuente con todas las propiedades
        // The hasOwnProperty() method returns a boolean indicating whether the object has 
        // the specified property as its own property (as opposed to inheriting it).==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
        if (payload.hasOwnProperty('id' || 'name' || 'username') == false) {
            // se retoran el valor indicando que hay valores invalidos
            return { error: 'necesitan tener un valor válido' }
        }
        // verificacion de la creacion de un payload con cada uno de los atributos que se solicitan
        if (payload.hasOwnProperty('id' || 'name' || 'username') == true) {
            // se retoran el valor indicando que hay valores invalidos
            return payload
        }
    }
}
module.exports = UserView