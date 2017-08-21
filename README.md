# My First API
Demo app with basic REST API.
## REST API

List of user routes:

Route|HTTP|Description
-----|----|-----------
/api/signup|POST|Sign up with new user info
/api/login|POST|Sign in while get an access token based on credential
/api/users|GET|Get all the users info (admin only)
/api/users/:id|GET|Get a single user info (admin and authenticated user)
/api/users|POST|Create a user(admin only)
/api/users/:id|DELETE|Delete user (admin only)
/api/users/:id|PUT|Update a user with new info (admin and authenticated user)

## Usage
with only npm:

```

npm install
npm start
npm run dev
```

Access the website via ``https://localhost:3000`` or API via ``https://localhost:3000/api``.
