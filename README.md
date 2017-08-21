# CRUD-API
CRUD-API adalah API sederhana untuk melakukan Create, Read, Update dan Delete data pada database postgresql

## REST API

List of user routes:

Route | HTTP | Description
----- | ---- | -----------
/api/signup | POST | Sign up with new user info
/api/signin | POST | Sign in while get an access token based on credentials
/api/users | GET | Get all the users info (admin only)
/api/users/:id | GET | Get a single users (admin and authenticated user)
/api/users | POST | Create a users (admin only)
/api/users/:id | DELETE | Delete a user (admin only)
/api/users/:id | PUT | Update a user with new info (admin only)

## Usage
With only npm:

```
npm install
npm start
npm run dev
```

Access the website via https://rest-api-junior.herokuapp.com or API via https://rest-api-junior.herokuapp.com/api
