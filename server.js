const http=require("http");
const st=require("st");

const serverConfig={
    path:__dirname + '/starter-code',
    index:'SpecRunner.html',
    cache:false
};

http.createServer(st(serverConfig)).listen(3000,()=>{
   console.log('servidor en 3000');
});