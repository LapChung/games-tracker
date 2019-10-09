import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: null,
      meta: {
        currentSeason: "",
        activeLegend: "",
        activeLegendName: ""
      }
    };
  }

  async componentDidMount() {
    const { platform, platformUserIdentifier } = this.props.match.params;
    this.setState({ isLoading: true });

    axios
      .get(`/api/v1/profile/${platform}/${platformUserIdentifier}`)
      .then(response => {
        this.setState({ meta: response.data.data.metadata, isLoading: false });
      })
      .catch(err =>
        this.setState({
          err,
          isLoading: false
        })
      );
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <p>Loading.. Please wait</p>
        ) : (
          <div>
            <h1>MetaData</h1>
            <p>{this.state.meta.currentSeason}</p>
            <p>{this.state.meta.activeLegend}</p>
            <p>{this.state.meta.activeLegendName}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
