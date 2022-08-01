# react-fbviwo

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-fbviwo)

routing [react-router-dom]

...
<Route path="/" element={<Home/>}/>
<Route path="/Login" element={<Login/>}/>
<Route path="/Signup" element={<Signup/>}/>
<Route path="/Admin" element={<Admin/>}/>
<Route path="/User" element={<User/>}/>
...

Home.js
Login.js
Signup.js
Admin.js
User.js

intialState={
users:[],
bookings:[],
flights:[],
role:"",
loggedin:false,
user:null,
}

Home.js -all flights
Login form -react hook form [email,password]
Signup form -react hook form [name,phone,email,password]

[email="admin@admin.com","admin"]
Admin - all users - all bookings - all flights

User - search ? - book flight ? [dont show a flight which is booked] - my flights ?

reducer- action type
all-users
all-bookings
my-booking
search
my-flights
book-flight
login-user
login-admin
signup-user

redux react-redux react-router-dom react-hook-form react-toastify

todos?>??????????
index.js add redux code
reducer.js ?

App.js -seetup routing
Home.js
Login.js
Signup.js
Admin.js
User.js
