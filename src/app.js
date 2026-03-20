import express from 'express' ;
import cookieParser from 'cookie-parser';
import cors from 'cors'
const app = express();

app.use(
  cors({
    origin: "https://jwt-auth-frontend-16.onrender.com",
    credentials: true,
  })
);

app.use(express.json({limit:"10mb"}))
app.use(express.urlencoded({extended : true , limit:"10mb" }))
app.use(express.static("public"))  // exposes files from public 

app.use(cookieParser())
// When you export default router;, whatever name you use when importing is up to you.
import User from './routes/user.routes.js';

app.use('/api/v1/user', User);


export default app; 



// Default export → import something from '...' (no {})

// Named export → import { something } from '...' (with {})

