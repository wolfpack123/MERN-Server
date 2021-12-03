const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const serverRoute = require("./routes/server")
const cors = require("cors")

dotenv.config();
const app = express();
const PORT = 5000;

mongoose.connect(process.env.DATABASE_URL,{
    useUnifiedTopology:true,
})
    .then(console.log("database connected"))
    .catch((error)=>console.log(error))

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());
app.use(cors());

app.use("/backend/server", serverRoute)//Route for inserting server data

app.get('/', (req,res)=>{
    console.log("Server is Active");
    res.send("Connected to the server");
})

app.listen(PORT, ()=>
    console.log(`server is running on port ${PORT}`)
)