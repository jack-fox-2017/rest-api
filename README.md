# aidil-api
Demo aidil-api app with basic REST API

## REST API

List of user routes:

Route | HTTP | Description
------|------|------------
`/api/signup` | POST | Sign up with new user info
`/api/users` | GET | Get all the users
`/api/users/:id` | GET | Get a single user
`/api/users` | POST | Create a user
`/api/users/:id` | DELETE | Delete a user
`/api/users/:id` | PUT | Update a user with new info
`/api/users/:id` | PATCH | Update a user with specific new info


## Usage
With only npm:
```
npm install
npm start
npm run dev
```

Access from localhost via http://localhost:3000 or API via http://localhost:3000/api

Access from website/herokuapp via https://aidil-api.herokuapp.com or API via https://aidil-api.herokuapp.com/api
