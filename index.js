const express=require('express');

const app= express();

const cors=require('cors');

const courses=require('./Data/myApiData.json');

app.use(cors());

const Port= process.env.Port || 5000;

app.get('/', (req, res)=>{res.send('Api Running')});

app.get('/courses', (req, res)=>{res.send(courses)});

app.get('/coursedetails/:id', (req, res)=>{
    const id=req.params.id
    const course=courses.find(e=>e.id==id)
    res.send(course)
})

app.listen(Port,()=>{
    console.log('Server is running On Port', Port)
})