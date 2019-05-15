/* eslint-disable */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import apiUrlGenerator from '../../api/generator';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: props.roomId,
      abuseReported: false
    }
  }

  handleUpdateRoomId(evt) {
    this.setState({
      roomId: evt.target.value,
    })
  }

  handleReportAbuse(evt) {
    evt.preventDefault();
    fetch(`${apiUrlGenerator('abuse')}/${this.state.roomId}`, {
      method: 'POST'
    });
    this.setState({
      abuseReported: true,
    })
  }

  render() {
    return (
      <div>

        <strong>Bitcoin</strong>
        <p>189sPnHGcjP5uteg2UuNgcJ5eoaRAP4Bw4</p>
        <strong>Ethereum</strong>
        <p>0xD6e3D881036903999E2c0480fe9d2c20600C1c28</p>
        <strong>Litecoin</strong>
        <p>LUViQeSggBBtYoN2qNtXSuxYoRMzRY8CSX</p>
        <br />

      </div>
    )
  }
}

About.propTypes = {
  roomId: PropTypes.string.isRequired,
}

export default About
