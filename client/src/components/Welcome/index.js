import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RoomLink from 'components/RoomLink'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roomUrl: `https://darkwire.io/${props.roomId}`,
    }
  }

  render() {
    return (
      <div>
        <div>
          v2.0 Тест:
          <ul className="native">
            <li>Поддерживает (Chrome, Firefox, Safari, Safari iOS, Android)</li>
            <li>Комманды (/nick, /me, /clear)</li>
            <li>Владельцы чата могут заблокировать комнату, не позволяя никому присоединиться</li>
            <li>фронтенд React.js & Redux</li>
            <li>Файлы до 4 MB</li>
          </ul>
          <div>
          </div>
        </div>
        <br />
        <p>Другие могут присоединиться к этой комнате, используя следующий URL:</p>
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
