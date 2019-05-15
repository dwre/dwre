import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RoomLink from 'components/RoomLink'

class Settings extends Component {
  handleSoundToggle() {
    this.props.toggleSoundEnabled(!this.props.soundIsEnabled)
  }

  render() {
    return (
      <div>
        <div>
          <h5>Звук</h5>
          <form>
            <div className="form-check">
              <label className="form-check-label" htmlFor="sound-control">
                <input id="sound-control" onChange={this.handleSoundToggle.bind(this)} className="form-check-input" type="checkbox" checked={this.props.soundIsEnabled} />
                Звук
              </label>
            </div>
          </form>
        </div>
        <br />
        <div>
          <h5>Чат</h5>
          <RoomLink roomId={this.props.roomId} />
        </div>
        <br />
        <div>
          <h5>Права</h5>
          <p>Человек, создавший комнату, является владельцем комнаты и обладает особыми привилегиями, такими как возможность запирать и разблокировать комнату.
           Если владелец покидает комнату, второй человек, который присоединится, принимает на себя ответственность. Если они уходят, третье лицо становится владельцем и так далее.
           Владелец комнаты имеет значок звездочки рядом с его именем пользователя в раскрывающемся списке участников.
          </p>
        </div>
        <br />
        <div>
          <h5>Блок</h5>
          <p>Если вы владелец комнаты, вы можете заблокировать и разблокировать комнату, щелкнув значок замка в навигационной панели. Когда комната закрыта, другие участники не смогут присоединиться.</p>
        </div>
        <br />
        <div>
          <h5>Слэш команды</h5>
          <p>Доступны:</p>
          <ul>
            <li>/nick [никнейм] <span className="text-muted">сменить имя</span></li>
            <li>/me [action] <span className="text-muted">выполнить действие</span></li>
            <li>/clear <span className="text-muted">очистить историю сообщений</span></li>
            <li>/help <span className="text-muted">показать все команды</span></li>
          </ul>
        </div>
      </div>
    )
  }
}

Settings.propTypes = {
  soundIsEnabled: PropTypes.bool.isRequired,
  toggleSoundEnabled: PropTypes.func.isRequired,
  roomId: PropTypes.string.isRequired,
}

export default Settings
