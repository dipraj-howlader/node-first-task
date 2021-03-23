const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())

//get

const users = ["Asad", "Dipraj", "Saad", "Susmita", "Sabana"]

app.get('/users/:id', (req, res) => {
    const Id = req.params.id;
    const name = users[Id];
    res.send({Id , name});
    
})
//post

app.post('/addUser', (req , res) => {
    //save to database
    // console.log("data received", req.body);
    const user = req.body;
    user.id = 55;
    res.send(user);
})



app.listen(3000, () => console.log('listening to port 3000'));



// function rootCall (req,res){
//     const fruit = {
//         product: 'ada',
//         price: '220tk'
//     }
//     res.send(fruit)
// }
// app.get('/', (req,res) => {
//     res.send("hello world")
// })

// app.get("/fruit/banana",(req, res) => {
//     res.send({fruit:'banana',price : '3320'});
// })
