const EventEmitter = require("events");

//create eventemitter object
const user = new EventEmitter();

//event handler for login
user .on("login", (username)=> {
    console.log(username + " has logged in.");
});

//another handler for login
user.on("login", (username)=> {
    console.log("welcome" + username + "!");
});

//event handler for logout
user.on("logout",  (username) =>{
    console.log(username + " has logged out.");
});

//trigger login event
user.emit("login", "Rahul");

//trigger logout event
user.emit("logout", "Rahul")
