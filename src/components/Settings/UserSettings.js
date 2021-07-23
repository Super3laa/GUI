import React, { useEffect } from "react";
import { Container, Row, Col ,Label,Input} from "reactstrap";
import axios from 'axios';

export default function UserSettings() {
  useEffect(()=>{
    async function fetch(){
      let res = await axios.get("http://localhost:5000/user/");
      document.getElementById('username').value = res.data.user_name;
      document.getElementById('mobilenumber').value = res.data.emergencyContact;
    }
    fetch();
  },[])
  async function handleSave(e){
    e.preventDefault();
    if(document.getElementById('password').value==""){
      alert("Enter Password");
      return
    }
    let Obj={};
    Obj.user_name = document.getElementById('username').value,
    Obj.emergencyContact= document.getElementById('mobilenumber').value;
    Obj.password= document.getElementById('password').value;
    await axios.post("http://localhost:5000/user/",Obj).then(()=>{
      alert("Saved Successfully")
    }).catch(()=>{
      alert("wrong password")
    })
  }
  return (
    <React.Fragment>
    <div className="HomeCard">
      <Container fluid="xxl">
        <Row>
          <Col xs={12} style={{color:"#2b2b2b",paddingBottom:"0.5rem"}}>Settings</Col>
        </Row>
        <Row style={{paddingTop:"0.5rem"}} >
            <Col>
                <Label style={{color:"grey"}}>Username</Label>
                <Input type="text"  id="username" placeholder="Ex.Jon Doe" />
            </Col>
        </Row>
        <Row style={{paddingTop:"0.5rem"}} >
            <Col>
                <Label style={{color:"grey"}}>Password</Label>
                <Input type="password"  id="password" placeholder="" />
            </Col>
        </Row>
        <Row style={{paddingTop:"0.5rem"}}>
            <Col>
                <Label style={{color:"grey"}}>Emergency Contact</Label>
                <Input type="number"  id="mobilenumber" placeholder="Ex.01019308495" />
            </Col>  
        </Row>
        <Row style={{paddingTop:"0.5rem",paddingBottom:"1rem"}}>
            <Col>
                <button onClick={handleSave}className="buttonGeneric">Save</button>
            </Col>
        </Row>
      </Container>
    </div>
    <div style={{display:"flex"}}>
      <div style={{margin:"auto",fontSize:"1.8rem",color:"#898989",paddingTop:"7px"}}>
        SECURE AI
      </div>
    </div>
    </React.Fragment>
  );
}
