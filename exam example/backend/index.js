const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())




const productSchema = new mongoose.Schema({
    image:String,
    name:String,
    price:Number
})

const productModel = mongoose.model("woman", productSchema)

// getData

app.get("/women", async (req,res)=>{
    const getData = await productModel.find()
    res.send(getData)
})

// getById

app.get("/women/:id", async (req,res)=>{
    const id = req.params.id
    const getById = await productModel.findById(id)
    res.send(getById)
})

// deleteData

app.delete("/women/:id", async (req,res)=>{
    const id = req.params.id
    await productModel.findByIdAndDelete(id)
    res.send("Success deleted...")
})


// createData


app.post("/women", async (req,res)=>{
    const createData = productModel(req.body)
    await createData.save()
    res.send("Success created...")
})


// updateData


app.put("women/:id", async (req,res)=>{
    const id = req.params.id
    const update = req.body
    await productModel.findByIdAndUpdate({_id:id}, update)
    res.send("Success updated...")
})

app.listen(port, ()=>{
    console.log("3000 portunda dinlenilir...");
})


mongoose.connect("mongodb+srv://vusalavabp109:vusala2067@cluster1.hnuw6.mongodb.net/")
.then(()=> {
    console.log("Connected...");
})
.catch((err)=>{
    console.log("Not Connected...", err);
})