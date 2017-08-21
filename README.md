# CRUD-API
CRUD-API adalah API sederhana untuk melakukan Create, Read, Update dan Delete data pada database postgresql

## REST API
List of basic routes:

Route | HTTP | Description
----- | ---- | -----------
/api/hello?name={name} | GET | Print hello, {name} !

List of user routes:

Route | HTTP | Description
----- | ---- | -----------
/api/users | GET | Get all the users
/api/users/:id | GET | Get a single users
/api/users | POST | Create a users
/api/users/:id | DELETE | Delete a user
/api/users/:id | PUT | Update a user with new info
/api/users/:id | PATCH | Update a user with spesific new info

## Usage
With only npm:

* npm install
* npm start
* npm run dev

Access the website via http://localhost:3000 or API via http://localhost:3000/api
