const express=require('express')
const app=express()
const PORT=5000
app.use(express.json())

const data=[{
    customarname:"raja",
    date:"1-1-24",
    starttime:"10am",
    endtime:"9pm",
    roomid:"1",
}]
 app.get('/:id',(req,res)=>{
    try{
        let id=Number (req.params.id)
        if(id<data.length)
    {
        res.status(200).send({
        data:data[id]
        })
    }else{
        req.status(400).send({
            message:"invalid id"
        })
    }
}catch (error){
    res.status(500).send({
        message:"internal server error",
        error:error.message
    })
}
})
 app.listen(PORT,()=>console.log(`App Listening ${PORT}`))