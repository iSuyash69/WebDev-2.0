const express=require("express");
const cors=require("cors");

const app=express();
app.use(cors());
app.use(express.json());

const port=8080;

app.post("/request",(req,res)=>{

    const {query}=req.body;
    console.log("request received");

    if(query=="Hello"){
        res.status(200).json({message:"Hello Suyash, how can I help you today?"});
    }
    else if(query=="2+2"){
        res.status(200).json({message:"2 + 2 = 4"});
    }
    else{
        res.status(200).json({message:"Sorry I could'nt understand that"});
    }
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

