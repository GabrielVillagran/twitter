class user {
    constructor(id, username, name, bio) {
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date() // date nos da la hora del SO
        this.lastUpdated = new Date()
    }
}
module.exports = user