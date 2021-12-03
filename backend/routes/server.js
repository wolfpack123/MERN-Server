const router = require("express").Router();
const Sensor = require("../models/server")

router.post('/upload', async(req,res)=>{
    try{
        const newSensor = new Sensor({
            pressure: req.body.pressure,
            humidity: req.body.humidity,
            vibration: req.body.vibration,
            voltage: req.body.voltage,
            current: req.body.current,
        })
        const sensor = await newSensor.save();
        res.status(200).json(sensor)
    }catch(error){
        res.status(400).json(error);
    }
})

router.get('/:id', async (req,res)=>{
    try{
        const sensor = await Sensor.findById(req.params.id);
        const {...others} = user._doc;
        res.status(200).json(others);
    }catch(error){
        res.status(400).json(error)
    }
})

module.exports = router