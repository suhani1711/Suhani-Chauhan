//updaing file
const fs = require("fs");
fs.appendFile("student,txt" , "for CSE student" , (err)=>{
    if(err) throw err;
    else{
        console.log("file successfully updated")
    }
});
