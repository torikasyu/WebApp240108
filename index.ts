import express from "express";

const port: number = process.env.PORT ? Number(process.env.PORT) : 3000
const app = express()

app.get("/api",(req,res)=>{
    res.json({"hello":"world"})
})

app.listen(port,()=>console.log(`Server Start on ${port}`))
