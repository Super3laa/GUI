import React,{useEffect,useState} from 'react';
import { Container,Row,Col } from 'reactstrap';
import CarStatus from './CarStatus';
import DriverHealth from './DriverHealth';
import ObjectsDetected from './ObjectsDetected';
import SigneStatus from './SignesStatus';
import '../../assets/styles/home.css'
export default function Home(){
    const [data , setData]=useState(null)
    useEffect(()=>{
        async function get(){
            await fetch("http://localhost:3000/data.json", {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          
              }).then(res=>{
                return res.json()
            }).then(data=>{
                setData(data);
            })
        }
        get();
    },[])
    return(
       <React.Fragment>
            {data ? <Container fluid="xxl">
                <Row>
                    <Col xs={4}>
                        <CarStatus data={data}/>
                    </Col>
                    <Col xs={8}>
                        <Container fluid="xxl">
                            <Row>
                                <Col xs={6}>
                                    <DriverHealth heartRate={data.heartRate} emotion={data.emotion}/>
                                </Col>
                                <Col xs={6}>
                                    <ObjectsDetected objects={data.objects}/>
                                </Col>
                            </Row>
                             <Row>
                                <Col style={{textAlign: "end"}}><SigneStatus signs={data.signs}/></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            :null
       }  
        </React.Fragment>
    )
}