const express = require("express");
const app = express(); 

let users = { 
    kal : {
        "id": 1,
        "name": "john"
    },
    list : [
        {
        "id": 2,
        "name": "john"
    },
    {
        "id": 3,
        "name": "john"
    },
    {
        "id": 4,
        "name": "john"
    }]
}


app.get("", (req, res)=>{


    res.end("hello");
})

    
app.listen(3000, ()=>{
    console.log("running on port 300")

});