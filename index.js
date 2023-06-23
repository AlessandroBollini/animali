const express=require("express");
const app=express();
const port=process.env.PORT || 3000;

const animals=["Leoncina","Zebra","Polpetta","Gamberetta","Crocchetta","Panda","Pinguina","Otaria","Pangolina","Petaura","Bananina","Puzzola"];
const attributes=["generosa","pucciosa","urlante","tenerona","croccola","delmiocuore","brianzola","bellissima","brontolona","pucciosa","delmcdonald","super","profumata"];

function rand(){
    return Math.floor(Math.random() * 13);
}

app.get('/',(_req,res)=>{
    res.send(animals[rand()]+" "+attributes[rand()]);
})

app.listen(port,()=>{
    console.log("App running on port");
})