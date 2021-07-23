import React from "react";
import { Container, Row, Col } from "reactstrap";
import { AiFillSetting } from "react-icons/ai";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import Road from "../../assets/images/road.png";
import { FaRegHeart } from "react-icons/fa";
import { colors } from "../../assets/colors.js";
import signs from "./signs";
export default function SignesStatus(props) {
  const history = useHistory();
  function handleOnClick(e) {
    e.preventDefault();
    history.push("/settings");
  }
  return (
    <div className="HomeCard">
      <Container>
        <Row>
          <Col xs={10}>
            <p
              style={{
                color: colors.active,
                textAlign: "left",
                fontSize: "1rem",
              }}
            >
              Drive Safe{" "}
              <span>
                <FaRegHeart />
              </span>
            </p>
          </Col>
          <Col xs={2}>
            <Button onClick={handleOnClick} color="link">
              <AiFillSetting fill={"grey"} />
            </Button>
          </Col>
        </Row>
        <Row>
          {props.signs.map((sign) => {
            return (
              <Col xs={2}>
                <div
                  style={{
                    height: "60px",
                    width: "60px",
                    display: "block",
                    backgroundImage: `url(${signs.get(sign)})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  {" "}
                </div>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col>
            <div
              style={{
                height: "6rem",
                width: "100%",
                display: "block",
                backgroundImage: `url(${Road})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left bottom",
              }}
            >
              {" "}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
