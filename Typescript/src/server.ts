import express, { type Response , type Express , type Request, type NextFunction } from "express"

const app: Express = express();
const PORT = 3000;

app.use(express.json());

// Customizing middleware
interface addStartTime extends Request {
    startTime?: number
};
const middleware1 = (req : addStartTime, res : Response, next : NextFunction)=>{
    req.startTime = Date.now();
    next();
}

app.get("/", middleware1, (req : addStartTime ,res : Response)=>{
    console.log(`${req.startTime} is here....`);
    res.send("Welcome to Node from TS...");
})

interface User {
    name : string,
    email : string,
}

app.post("/user",middleware1, (req : Request<{}, {}, User> ,res : Response)=>{
    const {name , email} = req.body;
    res.json(`Welcome to Node from TS...${name} whose email is ${email}`);
})

app.listen(PORT , ()=>{
    console.log(`Server listening at port ${PORT}`)
})

