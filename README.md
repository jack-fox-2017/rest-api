# My App
Demo app with basic REST API.

## REST API
List of user routes:

Route | Houte | Description
------------ | ------------- | -------------
`/api/signup` | POST | Sign up with new user info
`/api/singin` | POST | Sign up while get an access token based on credentials
`/api/users` | GET | Get all the users
`/api/users/:id` | GET | Get a single user
`/api/users` | POST | Create a user
`/api/users/:id` | DELETE | Delete a user
`/api/users/:id` | PUT | Update a user with new info

## Usage

With only npm:
```
 npm install
 npm start
 npm run dev
```

Access the website via `http://localhost:3000` or API via `http://localhost:3000/api`.
