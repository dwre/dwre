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
  <div class="aspect-tab ">
    <input id="item-18" type="checkbox" class="aspect-input" name="aspect">
    <label for="item-18" class="aspect-label"></label>
    <div class="aspect-content">
        <div class="aspect-info">
            <div class="chart-pie negative over50">
                <span class="chart-pie-count">69</span>
                <div>
                    <div class="first-fill"></div>
                    <div class="second-fill" style="transform: rotate(249deg)"></div>
                </div>
            </div>
            <span class="aspect-name">Пользователь </span>
        </div>
        <div class="aspect-stat">
            <div class="all-opinions">
                <span class="all-opinions-count">18</span>
                <span>событий</span>
            </div>
            <div>
                <span class="positive-count">4</span>
                <span class="neutral-count">1</span>
                <span class="negative-count">13</span>
            </div>
        </div>
    </div>
    <div class="aspect-tab-content">
        <div class="sentiment-wrapper">
            <div>
                <div>
                    <div class="positive-count opinion-header">
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
                    <div class="neutral-count opinion-header">
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
                    <div class="negative-count opinion-header">
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
  <div class="aspect-tab ">
    <input id="item-14" type="checkbox" class="aspect-input" name="aspect">
    <label for="item-14" class="aspect-label"></label>
    <div class="aspect-content">
        <div class="aspect-info">
            <div class="chart-pie positive over50">
                <span class="chart-pie-count">58</span>
                <div>
                    <div class="first-fill"></div>
                    <div class="second-fill" style="transform: rotate(209deg)"></div>
                </div>
            </div>
            <span class="aspect-name">Кошельки и операции</span>
        </div>
        <div class="aspect-stat">
            <div class="all-opinions">
                <span class="all-opinions-count">22</span>
                <span>события</span>
            </div>
            <div>
                <span class="positive-count">12</span>
                <span class="neutral-count">5</span>
                <span class="negative-count">5</span>
            </div>
        </div>
    </div>
    <div class="aspect-tab-content">
        <div class="sentiment-wrapper">
            <div>
                <div>
                    <div class="positive-count opinion-header">
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
                    <div class="neutral-count opinion-header">
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
                    <div class="negative-count opinion-header">
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
  <div class="aspect-tab ">
    <input id="item-2" type="checkbox" class="aspect-input" name="aspect">
    <label for="item-2" class="aspect-label"></label>
    <div class="aspect-content">
        <div class="aspect-info">
            <div class="chart-pie positive">
                <span class="chart-pie-count">33</span>
                <div>
                    <div class="first-fill"></div>
                    <div class="second-fill" style="transform: rotate(119deg)"></div>
                </div>
            </div>
            <span class="aspect-name">Командная строка</span>
        </div>
        <div class="aspect-stat">
            <div class="all-opinions">
                <span class="all-opinions-count">7</span>
                <span>событий</span>
            </div>
            <div>
                <span class="positive-count">3</span>
                <span class="neutral-count">2</span>
                <span class="negative-count">2</span>
            </div>
        </div>
    </div>
    <div class="aspect-tab-content">
        <div class="sentiment-wrapper">
            <div>
                <div>
                    <div class="positive-count opinion-header">
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
                    <div class="neutral-count opinion-header">
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
                    <div class="negative-count opinion-header">
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
