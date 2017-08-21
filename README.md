# rest-api
aplikasi ini adalah aplikasi untuk belajar API dan hanya menggunakan routing saja. dan untuk meninput haru melalui aplikasi postman


## REST API
list basic route

Route | HTTP | Description
----- | ---- | -----------
/api/signup | POST | Sign up with new user info
/api/signin | POST | Sign in while get ac access token basen in credential
/api/users | GET | Get all the users info (admin only)
/api/users/:id | GET | Get a single users info (admin and authencticated user)
/api/users/ | POST | Create user (admin only)
/api/users/:id | DELETE | delete a user (admin only)
/api/user/:id | PUT | Update a user with a new info(admin and athecticated user)

## Usage
With only npm

`- add your secret key on .env`
`- npm install`
`- npm start`
`- nodemon app.js`
- Akses dari browser http://localhost:3000 or
