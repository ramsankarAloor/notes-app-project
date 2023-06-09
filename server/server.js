import  express  from "express";

import dotenv from 'dotenv'
import publicRouter from "./publicRouter.js";
import privateRouter from "./privateRouter.js"
import cors from 'cors'

dotenv.config()

const app = express();


app.listen(4000);

app.use(cors())
app.use(express.json());
app.use('/public', publicRouter)
app.use('/private', privateRouter)

app.get('/health', function(req, res){
    res.status(200).send('OK');
})



