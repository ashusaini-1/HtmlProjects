const http=require('http');
const fs=require('fs');
var requests=require('requests');

const homeFile=fs.readFileSync("home.html", "utf-8");
//for buffer data we dont required;

const server=http.createServer((req,res)=>{
if(req.url=="/"){
requests("http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=b691cec18a726bb425b2ad7a17aa14e8")

.on('data',function(chunk){
console.log(chunk);
})

.on("end",function(err){
if(err) return console.log("connection closed due to error",err)

console.log("end");
})



}

})

server.listen(2000,"127.0.0.1");