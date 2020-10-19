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

const afterDataLoad=(err,data)=>{        
    if(err){
        console.log(err);                    
        return;
    }
    const loadedMeetup= Meetup.create(data);
    const ulas=new Person('Ulaş',11);
    ulas.attend(loadedMeetup);
    wtmb.printAttendeesNames();
    console.log(loadedMeetup.attendees);
}

Database.load('meetup.json',afterDataLoad);



/*      lesson3-part1   //////////////
Database.load('meetup.js',(err,data)=>{         // in sync operations, operation will start but data will return after all main lines
    console.log(data.name);                     // load function will start. then lines after load, then again lines in load function
    const loadedMeetup= Meetup.create(data);
    const ulas=new Person('Ulaş',11);
    ulas.attend(loadedMeetup);
    wtmb.printAttendeesNames();
    console.log(loadedMeetup.attendees);
})
console.log('I will appear before data!');
*/