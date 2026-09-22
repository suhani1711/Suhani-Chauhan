//delete file
const fs = require("fs");
fs.unlink("student.txt" , (err)=>{
    if(err) throw err;
    else{
        console.log("file successfully created");
    }

});