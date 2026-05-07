import express from 'express'

const app = express()

app.get('/', (req ,res )=>{
    console.log("hiii there")
})

app.listen(3000, ()=>{
    console.log("server running on port 3000")
})