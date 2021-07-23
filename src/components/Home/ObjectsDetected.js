import React,{useEffect,useState} from 'react';
import { Container,Row,Col } from 'reactstrap';
import updateObjects from './objects';

export default function ObjectsDetected(props){
    const [objects,setObjects] = useState(null);
    useEffect(()=>{
        let arr = [];
        updateObjects(props.objects).forEach(obj=>{
            arr.push(<Col xs={6}>
                <div className="ObjectIcon" style={{color:obj.color}}>
                    {obj.icon}
                  </div>
              </Col>)
       })
       setObjects(arr);
    },[]);
    return(
        <div className="HomeCard">
            <Container fluid="xxl">
                <Row style={{textAlign:"center"}}>
                {
                     objects
                 }
                </Row>
            </Container>
        </div>
    )
}