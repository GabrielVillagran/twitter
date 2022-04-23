class user {
    constructor(id, username, name, bio) {
            this.id = id
            this.username = username
            this.name = name
            this.bio = bio
            this.dateCreated = new Date() // date nos da la hora del SO
            this.lastUpdated = new Date()
        }
        // obtener el id
    get getID() {
            return this.id
        }
        // obtener el username
    get getUsername() {
            return this.username
        }
        // obtener el name
    get getName() {
            return this.Name
        }
        // obtener la bio
    get getBio() {
            return this.bio
        }
        // obtener la fecha creada
    get getDateCreated() {
            return this.dateCreated
        }
        // obtener la fecha actualizada
    get getLastUpdated() {
        return this.lastUpdated
    }
}
module.exports = user