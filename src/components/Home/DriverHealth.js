import React from 'react';
import { Container,Row } from 'reactstrap';
import emotion from './emotions';
export default function DriverHealth(props){
    return(
        <div className="HomeCard">
            <Container fluid="xxl">
                <Row>
                <div className="HeartRateLabel">
                <p style={{fontSize:"0.8rem",color:"grey"}}>
                    <span  style={{fontSize:"1.5rem",color:"#484848"}}>
                    {emotion.get(props.emotion)}
                    </span> {props.emotion}</p>  
                    <h2 style={{fontSize:"3.4rem",color:"#484848"}}>
                    {props.heartRate} <span  style={{fontSize:"0.8rem",color:"#484848"}}>BPM
                    </span>   
                    </h2>
                                 
                </div>
                <div className="heart-rate">
                    <svg version="1.0" x="0px" y="0px" width="auto" height="73px" viewBox="0 0 150 73" enable-background="new 0 0 150 73" >
                        <polyline fill="none" stroke="#b43757" stroke-width="3" stroke-miterlimit="10" points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,50.419 110.473,45.486 150,45.486"
                        />
                    </svg>
                    <div class="fade-in"></div>
                  <div class="fade-out"></div>
                </div>

                </Row>
            </Container>
        </div>
    )
}