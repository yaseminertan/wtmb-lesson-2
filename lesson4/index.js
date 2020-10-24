const express=require('express')
const app=express()
const PersonService=require('../services/person-service')
const bodyParser=require('body-parser')

app.set('view engine','pug')
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    // res.send('hello')
    // res.sendFile(__dirname+'/index.html')
     res.render('index')
 })
app.get('/person/all',async (req,res)=>{
    const people=await PersonService.findAll()
   // res.send(people)
   res.render('person',{person:people})
})
app.get('/person/:id',async (req,res)=>{
    const id=req.params.id
    const person=await PersonService.find(id)
    res.send(person)
   //res.render('person',{person:people})
})

app.post('/person',async (req,res)=>{
    console.log(req.body)
    const p=await PersonService.add(req.body)
    res.send(p)
})

app.delete('/person/:id',async (req,res)=>{
    await PersonService.del(req.params.id)
    res.send('ok')
})

app.listen(3000,()=>{
    console.log('server listening')
})