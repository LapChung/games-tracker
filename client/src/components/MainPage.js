import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import apexlink from "../assets/apex-link.jpg";

const styles = {
  container: {
    paddingLeft: 0,
    paddingRight: 0
  },
  row: {
    marginLeft: 0,
    marginRight: 0
  },
  col: {
    paddingLeft: 0,
    paddingRight: 0
  }
};

class MainPage extends Component {
  render() {
    return (
      <Container fluid style={styles.container} className="main">
        <Row style={styles.row} className="justify-content-lg-center">
          <Col style={styles.col} lg="auto" className="title">
            PLAYER
            <span style={{ color: "red" }}> TRACKING NETWORK</span>
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col
            className="description"
            lg={{ span: 6, offset: 3 }}
            align="center"
          >
            Tracking millions of players
          </Col>
          <Col style={styles.col} className="account col-lg-3">
            <ListGroup
              className="list-group-horizontal-lg list-group-flush"
              as="ul"
            >
              <ListGroup.Item
                className="create"
                href="#"
                action
                style={{ color: "gold" }}
              >
                Create account
              </ListGroup.Item>
              <ListGroup.Item
                className="sign-in"
                href="#"
                action
                style={{ color: "white" }}
              >
                Sign In
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col className="apex-container col-lg-3">
            <Figure className="apex">
              <a href="/search">
                <Figure.Image className="apex-pic" alt="apex" src={apexlink} />
                <Figure.Caption className="apex-description">
                  Apex Legends
                </Figure.Caption>
                <Button className="apex-button" variant="secondary">
                  View Stats
                </Button>
              </a>
            </Figure>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;
