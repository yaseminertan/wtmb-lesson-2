const express=require('express')
const app=express()

app.set('view engine','pug')

app.get('/',(req,res)=>{
   // res.send('hello')
   // res.sendFile(__dirname+'/index.html')
    res.render('index')
})

app.listen(3000,()=>{
    console.log('server listening')
})