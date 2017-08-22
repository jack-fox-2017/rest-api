# rest-api Basic
Yups... aplikasi API sederhana ini bisa anda akses menggunakan aplikasi POSTMAN atau INSOMNIA. Dengan bantuan tool ini kita bisa melakukan akses ke server backend dengan mudah.

#### Default User
Username | Password | Role/Otoritas
--- | --- | ---
achim| achim| admin

## Struktur Routing

#### Basic Routing
Route | HTTP Method | Deskripsi
--- | --- | ---
/api/signup|POST| Pada routing ini anda dapat melakukan registrasi pada server dengan default role 'member'
/api/signin | POST | Pada routing ini anda dapat melakukan sign in ke dalam server backend


#### Users Routing
Route | HTTP Method | Deskripsi | Otoritas
--- | --- | --- | ---
/api/users | GET | Menampilkan semua users | admin
/api/users/:id|GET|Menampilkan user by Id | admin & member
/api/users/:id|PUT|Update user by id| admin & member
/api/users/:id|DELETE| Delete user by Id | admin


#### Heroku Sample
https://api-achim.herokuapp.com
