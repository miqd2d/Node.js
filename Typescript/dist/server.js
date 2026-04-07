import express, {} from "express";
const app = express();
const PORT = 3000;
app.use(express.json());
;
const middleware1 = (req, res, next) => {
    req.startTime = Date.now();
    next();
};
app.get("/", middleware1, (req, res) => {
    console.log(`${req.startTime} is here....`);
    res.send("Welcome to Node from TS...");
});
app.post("/user", middleware1, (req, res) => {
    const { name, email } = req.body;
    res.json(`Welcome to Node from TS...${name} whose email is ${email}`);
});
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
//# sourceMappingURL=server.js.map