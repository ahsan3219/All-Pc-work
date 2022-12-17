import express from 'express';
import cors from 'cors';

const app = express()
const port = 3000;

let todos = [];

app.use(express.json());
app.use(cors())

app.post('/todo', (req, res) => {
    
    todos.push(req.body.text);

    res.send({
        message: "your todo is saved",
        data: todos
    })
})
app.get('/todos', (req, res) => {
    
    res.send({
        message: "here is you todo list",
        data: todos
    })
})
app.post('/water', (req, res) => {
    console.log('someone is offering water');
    res.send('ok I have received water')
})
app.get('/pizza', (req, res) => {
    console.log('some one is asking for pizza');
    res.send('here is your pizza')
})
app.get('/coffee', (req, res) => {
    console.log('some one is asking for coffee');
    res.send('here is your coffee')
})

// POST 172.16.18.202:3000/water

// 172.16.18.202:5500

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/delete', (req, res) => {
   todos.slice(todos.length,req.body.text)
    res.send("DELETE Request Called")
   
  })


// app.delete('/delete',(req,res)=>{
 

//     todos.length=0;

//     res.send({
//         message: "your todo is empty",
//         data: todos
//     })
// })