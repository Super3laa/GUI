const {createBluetooth} = require('node-ble');
const {bluetooth, destroy} = createBluetooth();
const {UUIDs,HeartCharacteristics} = require('./XB05AConstants');
const data = require ('./data');
class XB05A {
  constructor() {
    this.init();
  }

  init() {
    this.mac = null;
    this.device = null;
    this.HeartService = null;
    this.HeartCtrl = null;
    this.HeartData = null;
  }
  async connect (mac){
    try {
        if (!mac) throw 'MAC not defined';
        const adapter = await bluetooth.defaultAdapter();
        this.device = await adapter.waitDevice(mac);
        console.log('connecting device');
        await this.device.connect();
        this.mac = mac;
        console.log('connected', mac);
        data.writeData({
          ble:1
        })  
        const gatt = await this.device.gatt();
        this.HeartService = await gatt.getPrimaryService(UUIDs.HeartRate);
        const HeartCtrl = await this.HeartService.getCharacteristic(HeartCharacteristics.Control);
        const HeartData = await this.HeartService.getCharacteristic(HeartCharacteristics.Data);
        await HeartData.startNotifications();
        HeartData.on('valuechanged', buffer => {
            buffer = buffer.toString('hex')
            let dataHex = buffer.slice(-2);
            let dataId = buffer.slice(0,2);
            let dataDec = parseInt(dataHex,16)
            if (dataId == 'e5' && dataDec > 17){
              data.writeData({
                heartRate:dataDec
              })
              console.log("Heart Rate : " + dataDec)
            }
        })
    } catch (error) {
        
    }
  }
}
module.exports = XB05A;
