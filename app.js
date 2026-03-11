const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

app.get("/", (req,res)=>{
  res.send("Hola mundo desde Azure soy Arman 🚀")
})

app.listen(PORT, ()=>{
  console.log("Server running")
})