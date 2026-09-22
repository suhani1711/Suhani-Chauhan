const fs= require("fs");
//create a blank file

fs.writeFile("student.txt" , "Hello! This is a student file" , (err)=>
{
    if (err){
        console.log(err);
    }
    else{
        console.log("File successfully created");
    }
});