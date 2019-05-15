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
      <div>
      
         <Username username={this.state.userId} />
         <Username username={member.username} />
        <br />

        <strong>Bitcoin</strong><strong className="balance">Баланс :  -.--</strong>
        <p>189sPnHGcjP5uteg2UuNgcJ5eoaRAP4Bw4 <strong className="balance"> отправить</strong></p>
       <br />
        <strong>Ethereum</strong><strong className="balance">Баланс :  -.--</strong>
        <p>0xD6e3D881036903999E2c0480fe9d2c20600C1c28 <strong className="balance"> отправить</strong></p>
       <br />
        <strong>Litecoin</strong><strong className="balance">Баланс :  -.--</strong>
        <p>LUViQeSggBBtYoN2qNtXSuxYoRMzRY8CSX <strong className="balance"> отправить</strong></p>
        <br />

      </div>
    )
  }
}

About.propTypes = {
  roomId: PropTypes.string.isRequired,
}

export default About
