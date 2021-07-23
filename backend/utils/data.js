const path = require('path');
const fs = require('fs');
const dataPath = path.join(__dirname, '../../build/data.json')
module.exports ={
    writeData : (data)=> {
        let rawdata = JSON.parse(fs.readFileSync(dataPath));
        rawdata = {
            ...rawdata,
            ...data
        }
        fs.writeFileSync(dataPath, JSON.stringify(rawdata,null,2));   
    },isValidPassword:(password)=>{
        let rawdata = JSON.parse(fs.readFileSync(dataPath));
        if (rawdata.password == password) return true;
        return false;
    },readData:()=>{
        return JSON.parse(fs.readFileSync(dataPath))
    }
}