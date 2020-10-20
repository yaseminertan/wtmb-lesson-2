const PersonService = require('./person')
const person=require('./models/person')
const personService = require('./services/personService')

async function main(){
    const people=await personService.findAll();
    console.log(people);
}
main()