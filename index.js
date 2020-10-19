const Person =require('./person');
const Meetup=require('./meetup');
const Database=require('./database');

const yasemin=new Person('Yasemin',37);
const mert=new Person('Mert',8);

yasemin.greet(mert);

const wtmb=new Meetup('WTM Berlin');
yasemin.attend(wtmb);
wtmb.printAttendeesNames();

//Database.save('meetup.json',wtmb);

//const data=Database.load('meetup.json');
Database.load('meetup.js',(err,data)=>{

})
console.log(data.name);

const loadedMeetup= Meetup.create({name=''});            //new Meetup (data.name,data.attendees); 
// data would not be loaded, it will crash
const ulas=new Person('Ulaş',11);
ulas.attend(loadedMeetup);
wtmb.printAttendeesNames();
console.log(loadedMeetup.attendees);
//Database.save('person.json',yasemin);