# rest-api

## My REST-API First App

Aplikasi ini merupakan aplikasi user login sederhana menggunakan metede MVC dan RestFul API.

##### List of index routes:

| Route    | HTTP  | Description   |    
|--------- |:-----:|:-------------:|
| /        | GET   | Home page     |  

##### List of user routes:

| Route        |  HTTP  |                 Description                    |
|--------------|:------:|:----------------------------------------------:|
| /users/      | GET    | Get all the users                              |
| /users/:id   | GET    | Get user based on id user                      |
| /users/      | POST   | Create a user                                  |
| /users/:id   | DELETE | Delete a user                                  |
| /users/:id   | PUT    | Update a user with new info                    |


##### Usage

npm init
npm install
node app.js

access website via http://localhost:3000
