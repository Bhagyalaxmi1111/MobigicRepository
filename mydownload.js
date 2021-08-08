const https=require("https");
const fs=require("fs");

const url="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80";
https.get(url,function(res){
    const fileStream=fs.createWriteStream("photo.jpeg");
    res.pipe(fileStream);
    fileStream.on("finish",function(){
        fileStream.close();
        console.log("done");
    })
});