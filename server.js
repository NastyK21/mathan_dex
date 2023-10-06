const express = require("express");
const studentroutes = require("./src/student/routes");

const app =express();
const port =3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("paras");
});

app.use("/market",studentroutes);
app.listen(port,()=> console.log(`the app is listening on port ${port}`));
