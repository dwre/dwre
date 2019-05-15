import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RoomLink from 'components/RoomLink'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roomUrl: `https://black-chat.herokuapp.com/${props.roomId}`,
    }
  }

  render() {
    return (
      <div>
        <div>

        <RoomLink roomId={this.props.roomId} />
        <div className="react-modal-footer">
          <button className="btn btn-primary btn-lg" onClick={this.props.close}>Ok</button>
        </div>
      </div>
    )
  }
}

Welcome.propTypes = {
  roomId: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
}

export default Welcome
