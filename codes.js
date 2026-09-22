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

//Reading a file content
fs.readFile("student.txt" , "utf-8" , (err,data)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log("File content");
        console.log(data);
    }
});

//updaing file
fs.appendFile("student,txt" , "for CSE student" , (err)=>{
    if(err) throw err;
    else{
        console.log("file successfully updated")
    }
});

//delete file
fs.unlink("student.txt" , (err)=>{
    if(err) throw err;
    else{
        console.log("file successfully created");
    }

});