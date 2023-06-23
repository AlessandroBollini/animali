const express=require("express");
const app=express();
const port=process.env.PORT || 3000;

const animals=["Leoncina","Zebra","Polpetta","Gamberetta","Crocchetta","Panda","Pinguina","Otaria","Pangolina","Petaura","Bananina","Puzzola","Gelosona","Sofficina","Cinghialotta","Volpetta","McNuggets","Giraffina","Birretta","Sgrengkts","Triglia"];
const attributes=["generosa","pucciosa","urlante","tenerona","croccola","delmiocuore","brianzola","bellissima","brontolona","pucciosa","delmcdonald","super","profumata","chiacchierona","spaziale","calda","alcioccolato","simpatica","divertente","abbracciosa","perfetta","tra le nuvole"];

function rand(){
    return Math.floor(Math.random() * 21);
}

app.get('/',(_req,res)=>{
    res.send(animals[rand()]+" "+attributes[rand()]);
})

app.listen(port,()=>{
    console.log("App running on port");
})