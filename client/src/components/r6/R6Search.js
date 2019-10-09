import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

import "../../styles.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: "psn",
      platformUserIdentifier: "",
      error: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.platformUserIdentifier) {
      this.setState({ error: "Please enter the IGN" });
    } else {
      this.props.history.push(
        `/profile/${this.state.platform}/${this.state.platformUserIdentifier}`
      );
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Stat Tracking Apex Players</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Platform</label>
          <select
            name="platform"
            value={this.state.platform}
            onChange={this.handleChange}
          >
            <option value="psn">psn</option>
            <option value="xbl">xbl</option>
            <option value="origin">origin</option>
          </select>
          <br />
          <label>Gamer Tag</label>
          <input
            type="text"
            name="platformUserIdentifier"
            value={this.state.platformUserIdentifier}
            placeholder="Origin ID, Xbox Live gamertag, PSN "
            onChange={this.handleChange}
          />
          <br />
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
      </div>
      /**
       * TO BE FINISHED
       * <div>
        <Navbar
          className="r6nav"
          sticky="top"
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="/">PTN</Navbar.Brand>
          <Nav.Link href="/search">Apex Legends</Nav.Link>
        </Navbar>
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
          <Form inline>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text className="material-icons">
                  search
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-lg-2"
              />
              <Button variant="outline-success">Search</Button>
            </InputGroup>
          </Form>
          <Nav.Link href="/search">Home</Nav.Link>
          <Nav.Link href="#">Usage</Nav.Link>
        </Navbar>
      </div>*/
    );
  }
}
export default withRouter(Main);
