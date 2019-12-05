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
      
<div id="aspect-content">
  <div className="aspect-tab ">
    <input id="item-18" type="checkbox" className="aspect-input" name="aspect">
    <label for="item-18" className="aspect-label"></label>
    <div className="aspect-content">
        <div className="aspect-info">
            <div className="chart-pie negative over50">
                <span className="chart-pie-count">69</span>
                <div>
                    <div className="first-fill"></div>
                    <div className="second-fill" style="transform: rotate(249deg)"></div>
                </div>
            </div>
            <span className="aspect-name">Пользователь </span>
        </div>
        <div className="aspect-stat">
            <div className="all-opinions">
                <span className="all-opinions-count">18</span>
                <span>событий</span>
            </div>
            <div>
                <span className="positive-count">4</span>
                <span className="neutral-count">1</span>
                <span className="negative-count">13</span>
            </div>
        </div>
    </div>
    <div className="aspect-tab-content">
        <div className="sentiment-wrapper">
            <div>
                <div>
                    <div className="positive-count opinion-header">
                        <span>positive</span>
                        <span>4</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.</span>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="neutral-count opinion-header">
                        <span>neutral</span>
                        <span>1</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.</span>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="negative-count opinion-header">
                        <span>negative</span>
                        <span>13</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div className="aspect-tab ">
    <input id="item-14" type="checkbox" className="aspect-input" name="aspect">
    <label for="item-14" className="aspect-label"></label>
    <div className="aspect-content">
        <div className="aspect-info">
            <div className="chart-pie positive over50">
                <span className="chart-pie-count">58</span>
                <div>
                    <div className="first-fill"></div>
                    <div className="second-fill" style="transform: rotate(209deg)"></div>
                </div>
            </div>
            <span className="aspect-name">Кошельки и операции</span>
        </div>
        <div className="aspect-stat">
            <div className="all-opinions">
                <span className="all-opinions-count">22</span>
                <span>события</span>
            </div>
            <div>
                <span className="positive-count">12</span>
                <span className="neutral-count">5</span>
                <span className="negative-count">5</span>
            </div>
        </div>
    </div>
    <div className="aspect-tab-content">
        <div className="sentiment-wrapper">
            <div>
                <div>
                    <div className="positive-count opinion-header">
                        <span>positive</span>
                        <span>12</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.</span>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="neutral-count opinion-header">
                        <span>neutral</span>
                        <span>5</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.</span>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="negative-count opinion-header">
                        <span>negative</span>
                        <span>5</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div className="aspect-tab ">
    <input id="item-2" type="checkbox" className="aspect-input" name="aspect">
    <label for="item-2" className="aspect-label"></label>
    <div className="aspect-content">
        <div className="aspect-info">
            <div className="chart-pie positive">
                <span className="chart-pie-count">33</span>
                <div>
                    <div className="first-fill"></div>
                    <div className="second-fill" style="transform: rotate(119deg)"></div>
                </div>
            </div>
            <span className="aspect-name">Командная строка</span>
        </div>
        <div className="aspect-stat">
            <div className="all-opinions">
                <span className="all-opinions-count">7</span>
                <span>событий</span>
            </div>
            <div>
                <span className="positive-count">3</span>
                <span className="neutral-count">2</span>
                <span className="negative-count">2</span>
            </div>
        </div>
    </div>
    <div className="aspect-tab-content">
        <div className="sentiment-wrapper">
            <div>
                <div>
                    <div className="positive-count opinion-header">
                        <span>positive</span>
                        <span>3</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="neutral-count opinion-header">
                        <span>neutral</span>
                        <span>2</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.</span>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="negative-count opinion-header">
                        <span>negative</span>
                        <span>2</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
      
    )
  }
}

About.propTypes = {
  roomId: PropTypes.string.isRequired,
}

export default About
