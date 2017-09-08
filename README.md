# Apps-ku
aplikasi demo dengan basti REST aplikasi

## REST API
 list of basic routes:

| Route | HTTP | Desription|
|-------|------|-----------|
| `/api/signup/` | POST | Create member username and passowrd |
| `/api/signin/` | POST | Signin member or admin to system |

List of member routes:

| Route | HTTP | Desription|
|-------|------|-----------|
|`/api/users/:id`| GET | Get a single user|
|`/api/users/:id`| PUT | update a user with new info|

List of admin routes:

| Route | HTTP | Desription|
|-------|------|-----------|
| `/api/users` | GET | Get all users|
|`/api/users` | POST | Create a member and admin|
|`/api/users/id` |DELETE| Delete a user|

### Usage

You can use only with npm:
><p>npm install</p>
><p>npm run dev</p>

After run you can access directly via `http://localhost:3005/api`

or you can test from this link `https://rest-api-alfan.herokuapp.com`
