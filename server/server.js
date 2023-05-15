import  express  from "express";

import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import publicRouter from "./publicRouter.js";
import privateRouter from "./privateRouter.js"

dotenv.config()

const app = express();


app.listen(4000);

app.use(express.json());
app.use('/public', publicRouter)
app.use('/private', privateRouter)

// app.get('/health', function(req, res){
//     res.status(200).send('OK');
// }



