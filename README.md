# Server NodeJS with JWT Auth

<p align="center">
  <a href="https://nodejs.org/">
    <img
      alt="Node.js"
      src="https://nodejs.org/static/images/logo-light.svg"
      width="400"
    />
  </a>
  <a href="https://jwt.io">
    <img
      alt="JWT"
      src="https://jwt.io/img/pic_logo.svg"
      width="100"
    />
  </a>
</p>

### First of all, what is JWT?
JSON Web Token (JWT) is an open standard [RFC 7519](https://tools.ietf.org/html/rfc7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

More documentation: [jwt.io](https://jwt.io/introduction/)

### Install Commands
- npm install
- npm start

### In this example repo you have a some of endpoints
___
1- POST
-  /login

With this method you obtain the jwt to authenticate and use the private endpont. 
Remember, you need send the "user" and "pass" values in the body of the request. 

Example: 
```
{
	"user": "pepe",
	"pass": "1234"
}
```
and then... you obtain a valid JWT for the next endpoint

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGVwZSIsInBhc3MiOiIxMjM0IiwiaWF0IjoxNTg1Njk3NzY1fQ.FC0X07G8Ve1qw2RoOydUJVDbP5CtZVQwUUI6C9nPB00"
}
```
<br>

With the valid JWT you can use it for the endpoint:
<br>
___
2- GET
- /private

You only need send the Authorization params in the Header of your Request with the JWT obtain in the previous point.

and then... you obtain the private message: 

```
{
    "msj": "Welcome pepe"
}
```

___ 
3- GET 
- /public 
For the endpoint  you not need the jwt for show the message

