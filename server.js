const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const server = express()
server.use(express.json())
server.use(cors())

const myPassJWT = 'my_secret_password'

const users = [
    {user: 'pepe', pass: '1234'},
    {user: 'carlos', pass: '12345'}
]

const validateUser = (request, response, next) => {
    let token = request.headers.authorization;
    try {
        decode = jwt.verify(token, myPassJWT);
        if(decode){
            request.user = decode;
            next();
        }else{
            throw "Without permission";
        }
    } catch (error) {
        response.status(401).json({msj: 'Invalid Login'})
    }
}

server.post('/login', (request, response) => {
    let {user, pass} = (request.body);
    users.forEach((data) => {
        if(data.user == user && data.pass == pass){
            let token = jwt.sign(data, myPassJWT);
            response.status(200).json({token: token})
        }
    });
    response.status(401).json({msj: 'Invalid Login'})
 });

server.get('/public', (request, response) => {
    response.json({msj: 'Public response example...'})
});

server.get('/private', validateUser, (request, response) => {
    response.json({msj: `Welcome ${request.user.user}`})
});

let listener = server.listen(3000, () => {
console.log('startListen', `NodeJS Application, appPort= ${listener.address().port}`);
});
