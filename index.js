// 
const http=require('http')
const PORT=5000
let server=new http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end("welcome meha")
})

server.listen(PORT,()=>console.log("serverwait"+PORT))
