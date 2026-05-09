import express, { urlencoded } from 'express'
import cors from 'cors'
import { json } from 'zod';
import AuthRouter from './modules/auth/auth.routes';


const app = express()

// global middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/', (req ,res )=>{
    console.log("hiii there, API service running")
    res.status(200).json({'message': 
        "API service working"
    })
})

app.use("/api/auth", AuthRouter);

export default app;

