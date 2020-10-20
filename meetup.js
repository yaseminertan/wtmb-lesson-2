module.exports=class Meetup
{
    constructor(name,attendees =[])
    {
        this.name=name;
        this.attendees=attendees;
    }
    printAttendeesNames(){
        this.attendees.forEach(printName);
    }
    static create({name,attendees=[]}){
        return new Meetup(name,attendees);
    }
}
function printName (person){
    console.log(person.name);
}