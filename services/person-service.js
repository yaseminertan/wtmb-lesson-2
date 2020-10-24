const BaseService = require('./base-service')
const PersonModel = require('../person')

class PersonService extends BaseService {
    constructor() {
        super(PersonModel, `${__dirname}/person.json`)
    }
}

module.exports = new PersonService()