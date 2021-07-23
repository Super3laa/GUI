import React from "react";
import { Container, Nav, Navbar ,NavbarBrand, Row,Col} from "reactstrap";
import {BiArrowBack} from 'react-icons/bi';
import {colors} from '../../assets/colors'
import BluetoothScan from './BluetoothScan'
import UserSettings from './UserSettings'
import '../../assets/styles/Settings.css'
export default function Index() {
  return (
    <React.Fragment>
      <Navbar color="light" light expand="xs">
          <Nav>
          <NavbarBrand
                    href="/"
                    style={{paddingLeft:"8px", color: colors.active ,fontSize:"1.55rem",cursor:"pointer"}}
                >
                    <BiArrowBack />
                </NavbarBrand>
          </Nav>
      </Navbar>
      <Container fluid="xxl">
          <Row>
              <Col>
                <BluetoothScan />
              </Col>
              <Col>
                <UserSettings />
              </Col>
          </Row>
      </Container>
    </React.Fragment>
  );
}
