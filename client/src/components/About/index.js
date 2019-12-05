/* eslint-disable */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import apiUrlGenerator from '../../api/generator'
import Username from 'components/Username';

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
      <React.Fragment>
      <div className="av"></div>
<iframe id="frame" src="dist/" frameborder="0" allowfullscreen></iframe>
      </React.Fragment>
    )
  }
}

About.propTypes = {
  roomId: PropTypes.string.isRequired,
}

export default About
