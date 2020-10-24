const BaseService = require('./base-service')
const MeetupModel = require('../models/meetup')

class MeetupService extends BaseService {
    constructor() {
        super(MeetupModel, `${__dirname}/meetup.json`)
    }
}

module.exports = new MeetupService()