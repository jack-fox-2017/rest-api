# rest-api
REST API 


## Installation :
    npm install --save sequelize
    npm install --save sequelize-cli
    sequelize init


## Setting Database : 
    psql postgres
    postgres# CREATE DATABASE "rest_api-1";


**Setting Database on Sequelize**

Create Model User
            
        sequelize model:create --name User --attributes username:string,password:string,role:string

Database Migration (to create table on database)

        sequelize db:migrate


### Setting route

    routes | HTTP | Description
    -------|------|------------
    /auth/signup | POST | Sign up with new user info
    /auth/signin | POST | Sign in while get an access token based on credentials
    /users | GET | Get all the users info (admin only)
    /users/:id | GET | Get a single user info (admin and authenticated user)
    /users/:id | DELETE | Delete a user (admin only)
    /users/:id | PUT | Update a user with new info (admin and authenticated user)



### For Running the application Step by Step:


**1st Step**

    npm start
    using postman go to url : (POST) http://localhost:3000/auth/signup 
    fill on x-www-form-urlencoded
    key & value
    username : your username (e.g : pdvega)
    password : your password (e.g : pdvega)
    role : default 'user'
    Congratulation, you've got new user account!

**2nd Step**

    You can sign in now.
    Using postman go to url : (POST) http://localhost:3000/auth/signin 
    fill on x-www-form-urlencoded
    key & value
    username : your username (e.g : pdvega)
    password : your password (e.g : pdvega)
    Got the token.

**3rd Step**

    Using postman go to url : (GET) http://localhost:3000/users fill on Headers
    key and value
    token : your token when signin.
    If your role as administrator, you can get all the data users.
    If you are not, you will get notification that "You are not Administrator."


**4th Step**

    Using postman go to url : (GET)
    http://localhost:3000/users/:id fill on Headers
    key and value
    token : your token when signin.
    As long as your role is not 'admin', you still can see your detail data user, with access http://localhost:3000/users/:your_id.
    If you are not an Administrator, you will get notification that "You are not authorized to see other account."
    If your role as administrator, you can see all the data users detail by their id.


**5th Step**

    Using postman go to url : (PUT)
    http://localhost:3000/users/id fill on Headers
    key and value
    token : your token when signin.
    For Administrator Only.
    Create User on x-www-form-urlencoded with key and value:
    username : 
    password : 
    role : 


**6th Step**

    Using postman go to url : (DELETE)
    http://localhost:3000/users/id fill on Headers
    key and value
    token : your token when signin.
    For Administrator Only.
    Deleted user with /:id.



    ## File and Folder 
    ```bash
    .
    ├── README.md
    │   └── config
    │   │   └── config.json
    │   └── controllers
    │   │   └── authController.js
    │   │   └── userController.js
    │   └── helpers
    │   │   └── auth.js
    │   └── migrations
    │   │   └── 20170821043926-create-user.js
    │   └── models
    │   │   └── index.js
    │   │   └── user.js
    │   └── routes
    │   │   └── auth.js
    │   │   └── users.js
    ├── package.json
    ├── app.js
    ├── .env.template
