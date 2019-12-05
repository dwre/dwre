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
      <img className="av" src="https://c7.uihere.com/icons/235/22/335/default-avatar-53614a6c1f9acc7e201729102976634e.png">
<iframe id="frame" src="
      dist/
      " frameborder="0" allowfullscreen>
      </iframe>  
    )
  }
}

About.propTypes = {
  roomId: PropTypes.string.isRequired,
}

export default About
