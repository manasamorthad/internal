const express=require("express")
const app=express();
const PORT=3000;
const cors = require("cors");
app.use(cors());
app.get("/greet/:name",(req,res) =>{
    const name=req.params.name;
    const title=req.query.title || " ";
    if (!name){
        return res.status(400).json({error:"missing parameters name required"})
    }
    const greeting=title
    ? `hello ${title} ${name} ! welcome `
    : `hello ${name}!welcome`;

    res.json({greeting})
});

app.get("/greet",(req,res)=>{
    res.status(400).json({error:"missing paramaters"})
});

app.use((req,res)=>{
    res.status(404).json("route not found")
})

app.listen(PORT,()=>{
    console.log(`server running succesfully on http://localhost:${PORT}`)
})