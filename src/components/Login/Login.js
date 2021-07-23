import React from "react";
import { useHistory } from "react-router-dom";
import "../../assets/styles/Login.css";
import { Row, Col ,Form,FormGroup,Label,Input} from "reactstrap";
import axios from 'axios'
import {RiShieldKeyholeFill} from 'react-icons/ri'
export default function Login() {
    const history = useHistory()
    async function login(e) {
        e.preventDefault();
        await axios.post("http://localhost:5000/user/login",{
            password:document.getElementById("passwordLogin").value
        }).then(()=>{
            history.push('/');
        }).catch(()=>{
      alert("wrong password")
    })
    }
  return (
    <React.Fragment>
      <div style={{ display: "flex", height: "100vh",    backgroundImage: "linear-gradient(45deg, #4d7881, #8bd1df)" }}>
        <Form className="FormStyleAuth">
            <FormGroup as={Row}>
                <Col style={{textAlign:"center",fontSize:"6.5rem"}}>
                    <RiShieldKeyholeFill fill={"#1f94ab"}/>
                </Col>  
            <Col style={{width:"260px",color:"#676767"}}>
                Face Recogonation System will auto login or use your passwrod
            </Col>
            </FormGroup>
            <FormGroup as={Row} style={{padding:"10px 0"}}>
                <Col>
                <Label className="InputHeader">Password</Label>
              <Input type="password" id="passwordLogin" />
                </Col>
            </FormGroup>
            <FormGroup as={Row} style={{padding:"10px 0"}}>
                <Col> <button className="buttonGeneric" onClick={login}>Login</button>          </Col>
            </FormGroup>
        </Form>
      </div>
    </React.Fragment>
  );
}
