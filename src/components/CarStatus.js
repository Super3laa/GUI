import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import car from '../assets/images/car.png'
import {FaBaby,FaBluetoothB,FaFan,FaUser,FaLock,FaUnlock} from 'react-icons/fa'
import {colors} from '../assets/colors';
export default function CarStatus(props){
    const doorLocks = props.data.doorLocks
    return(
        <div className="HomeCard">
            <Container>
                <Row>
                    <Col><FaUser fill={props.data.people_count > 0 ? colors.active:colors.inActive}/></Col>
                    <Col><FaLock fill={doorLocks == "1111" ? colors.active : colors.inActive}/></Col>
                    <Col><FaBaby fill={props.data.is_child_present ? colors.active : colors.inActive}/></Col>
                    <Col><FaBluetoothB fill={colors.active}/></Col>
                    <Col><FaFan fill={props.data.fanStatus ? colors.active : colors.inActive} /></Col>
                </Row>
                <Row>
                    <Col style={{fontSize:"0.9rem",paddingTop:"12px",color:"grey"}}>
                        Welcome back ,{props.data.user_name}
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                    <div style={{
              height:"375px",
              width:"auto",
              display:"block",
              backgroundImage:`url(${car})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
          }}>          </div>
                        <div className={`CarLock FL ${doorLocks[0] == 0 ? "green": "red"}`}>
                            <div className="CarLockIcon"> {doorLocks[0] == 0 ? <FaUnlock />: <FaLock />} </div>                        
                        </div>
                        <div className={`CarLock FR ${doorLocks[1] == 0 ? "green": "red"}`}>
                            <div className="CarLockIcon"> {doorLocks[1] == 0 ? <FaUnlock />: <FaLock />} </div>                        
                        </div>
                        <div className={`CarLock BL ${doorLocks[2] == 0 ? "green": "red"}`}>
                            <div className="CarLockIcon"> {doorLocks[2] == 0 ? <FaUnlock />: <FaLock />} </div>                        
                        </div>
                        <div className={`CarLock BR ${doorLocks[3] == 0 ? "green": "red"}`}>
                            <div className="CarLockIcon"> {doorLocks[3] == 0 ? <FaUnlock />: <FaLock />} </div>                        
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}