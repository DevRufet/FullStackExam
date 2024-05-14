import express from 'express'
import mongoose from 'mongoose'
import cors from "cors"
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://rufet:rufet@developermongo.nxg6jik.mongodb.net/')
const productSchema = new mongoose.Schema({
    name: String,
    price:Number,
    desc:String
  });

  const productModel = mongoose.model('mydetail', productSchema);
app.get('/products',async (req, res) => {
    const product=await productModel.find()
  res.send(product)
})

app.get('/products/:id',async (req, res) => {
    const {id}=req.params
    const product=await productModel.findById(id)
    res.send(product)

  })
  
  
  app.post('/products',async (req, res) => {
      const body=req.body
      const product= new productModel(body)
     await product.save()
    res.send('Got a POST request')
  })
  
  
  app.put('/products/:id',async (req, res) => {
    const {id}=req.params
    const body=req.body
    const product=await productModel.findByIdAndUpdate(id,body)
    res.send('Got a PUT request at /user')
  })

  
  app.delete('/products/:id',async (req, res) => {
      const {id}=req.params
      const product=await productModel.findByIdAndDelete(id)
    res.send('Got a DELETE request at /user')
  })
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})