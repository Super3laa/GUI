import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from 'axios'
import {BiSearchAlt2} from 'react-icons/bi'
import {FaBluetoothB} from 'react-icons/fa'
export default function BluetoothScan() {
  const[devices, setDevices] = useState([]);
  async function Scan(e){
    e.preventDefault();
      await axios.get("http://localhost:5000/smartwatch/scan").then(res=>{
          setDevices(res.data)
      })
  }
  async function connect(e){
    await axios.post("http://localhost:5000/smartwatch/connect",{macAddress:`${e.target.innerText}`}).then(res=>{
          alert("connected");
      })
  }

  return (
    <div className="HomeCard">
      <Container fluid="xxl">
        <Row>
          <Col style={{color:"#898989"}} xs={12}>
            Scan for SmartWatches
          </Col>
          <Col xs={12}>
          <button className="buttonGeneric" onClick={Scan}>Start Scanning <BiSearchAlt2/></button>          
          </Col>
        </Row>
        <Row style={{textAlign:"center",height:"18rem"}}>
            {
            devices.length == 0 ? 
            <Col style={{fontSize:"10rem"}}>
              <FaBluetoothB fill={"#efefef"}/>
            </Col>
            :devices.map(device=>{
              return <Col xs={12}><div className ="MacAddressItem" onClick={connect}>{device}</div></Col>
            })}
        </Row>
      </Container>
    </div>
  );
}
