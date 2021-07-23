var express = require('express');
var router = express.Router();
const {createBluetooth} = require('node-ble')
const {bluetooth} = createBluetooth()
let XB05A = require('../utils/XB05A');
const SmartWatch = new XB05A();

router.get('/scan',async function(req,res,next){
    const adapter = await bluetooth.defaultAdapter();
    while (await adapter.isDiscovering());
    let devices = await adapter.devices();
    res.send(devices)
});

router.post('/connect',async function(req,res,next){
    const macAddress = req.body.macAddress;
    SmartWatch.connect(macAddress);
});

module.exports =router;