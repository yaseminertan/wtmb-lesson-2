
module.exports = class Meetup {
    constructor(name, location, attendees = [], id) {
        this.name = name
        this.location = location
        this.attendees = attendees
        this.id = id
    }

    report() {
        console.log( 'meetup is held at')
    }

    static create({ name, location, attendees, id }) {
        return new Meetup(name, location, attendees, id)
    }
}