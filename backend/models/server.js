const mongoose = require("mongoose")

const SensorSchema = new mongoose.Schema ({
    pressure:{
        type: String,
    },
    humidity:{
        type:String,
    },
    vibration:{
        type:String,
    },
    voltage:{
        type:String,
    },
    current:{
        type:String,
    },
},{timestamps:true})

module.exports = mongoose.model("Sensor", SensorSchema)