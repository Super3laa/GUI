import React from 'react';
import { Container,Row,Col } from 'reactstrap';

export default function SignesStatus(props){
    return(
        <div className="HomeCard">
            <Container>
                <Row>
                    <Col>
                        <div>
                        80 <span >km/h</span>
                        </div>
                    </Col>
                    <Col>
                        Warning and stuff
                    </Col>
                </Row>
            </Container>
        </div>
    )
}