const Person =require('./person');
const Meetup=require('./meetup');
const Database=require('./database');

const yasemin=new Person('Yasemin',37);
const mert=new Person('Mert',8);

yasemin.greet(mert);

const wtmb=new Meetup('WTM Berlin');
yasemin.attend(wtmb);
wtmb.printAttendeesNames();

Database.save('person.json', JSON.stringify(yasemin));
const ulas=new Person('Ulaş',11);
//Database.save('person.json', JSON.stringify(ulas));
//const data=Database.load('meetup.json');
Database.load('meetup.js',(err,data)=>{
console.log(err,data.name);
})


const loadedMeetup= Meetup.create({name:'aa'});            //new Meetup (data.name,data.attendees); 
// data would not be loaded, it will crash

ulas.attend(loadedMeetup);
wtmb.printAttendeesNames();
console.log(loadedMeetup.attendees);
