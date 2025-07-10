import { client } from "./db";
import express from "express"
const port :number= 3000;
const app = express()
app.use(express.json())

app.post("/signup",async(req,res)=>{
    try {
        const id = req.body.id
        const username = req.body.username 
        const email = req.body.email
        const age = req.body.age

        const result = await client.query(
            "INSERT INTO USERS(id,username,email,age)VALUES($1 ,$2, $3, $4 )",
             [id, username, email, age]

        )
        console.log("row inserted")
        res.status(201).json({
            message:"user added succesfuly",result
        })


        
    } catch (error) {
        console.log("the errpr it is showing is :",error)
        
    }
})

app.listen  (port,()=>{
    console.log(`this listen to port www.localhost:${port}`)
});
