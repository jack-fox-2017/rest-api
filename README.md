# rest-api
----------

#### Simple demo app with basic REST

### Usage
1. Install required npm(s)
  * `npm install`
2. Run the app by entering following into command line
  * `npm start`
3. This app use **postgre** for database. You may change it with your preferred database.


### Routes
|   ***Route***  | ***HTTP*** | ***Description***              |
|----------------|:----------:|--------------------------------|
|`/api/signup`   | POST       | Sign up with new user info |
|`/api/signin`   | POST       | Sign in while get an access token based on credentials |
|`/api/users`    | GET        | Get all the users info (admin only) |
|`/api/users/:id`| GET        | Get a single user info (admin and authenticated user)
|`/api/users`    | POST       | Create a user (admin only) |
|`/api/users/:id`| DELETE     | Delete a user (admin only) |
|`/api/users/:id`| PUT        | Update a user with new info (admin and authenticated user) |