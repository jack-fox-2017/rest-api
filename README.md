## API Junior

This is the junior API task for user. Please check the role for use it.

Route | HTTP | Description
------------ | ------------- | -------------
/api/signup | POST | Sign up with new user info
/api/signin | POST | Sign in while get an access token based on credentials
/api/users | GET | Get all the users info(admin only)
/api/users/:id | GET | Get all single user info (admin and authenticated user)
/api/users | POST | Create a user (admin only)
/api/users/:id | DELETE | Delete a user (admin only)
/api/users/:id | PUT | Update a user with new info (admin and authenticated user)

Clone the repository and u should install the package who's declare on this file. You just doing :
> npm install

Running the application in your browser with :
> localhost:3000
