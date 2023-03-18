const express = require('express');

const logic = require('./services/logic')

const server = express();

const cors = require('cors')

server.use(express.json())

server.use(cors({ origin: "http://localhost:4200" }))

server.listen(3000, console.log("server is listening at port 3000"));

server.post('/register', (req, res) => {
    logic.register(req.body.firstName, req.body.lastName, req.body.address, req.body.email, req.body.mobile, req.body.dob, req.body.gender, req.body.course)
        .then((result) => {
            
            res.status(result.statusCode).json(result)
        })
})

server.get('/table' , (req , res)=>{
    logic.data().then((details)=>{
        res.json(details)
    })
})