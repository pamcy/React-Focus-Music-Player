/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LikeBtn from './Buttons/LikeBtn';

class PlayingBar extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="playing-bar">
        <div className="playing-bar__progress">
          <div className="progress__wrapper">
            <div className="progress__buffered" />
            <div className="progress__played" />
          </div>
        </div>
        <div className="playing-bar__time">
          <span className="playing-bar__current-time">1:38</span>
          <span className="playing-bar__total-time">3:39</span>
        </div>
        <div className="playingbar__panel">
          <div className="panel__album">
            <img
              src="/images/album_cover.jpg"
              alt="When 24hrs isn't enough"
              className="panel__album-img"
            />
            <div className="panel__album-content">
              <h3 className="panel__album-title">I don&apos;t Care</h3>
              <p className="panel__album-featuring">Russel Kroh (featuring South London HiFi)</p>
            </div>
          </div>
          <div className="panel__controller">
            <div className="controller__btn">
              <img src="/images/bar_shuffle.svg" alt="" className="controller__-img" />
            </div>
            <div className="controller__btn">
              <img src="/images/bar_previous_song.svg" alt="" className="controller__img" />
            </div>
            <div className="controller__btn controller__btn--play">
              <img src="/images/bar_play-button.svg" alt="" className="controller__img" />
            </div>
            <div className="controller__btn">
              <img src="/images/bar_next_song.svg" alt="" className="controller__img" />
            </div>
            <div className="controller__btn">
              <img src="/images/bar_repeat.svg" alt="" className="controller__img" />
            </div>
          </div>
          <div className="panel__right">
            <div className="volume">
              <span className="volume__icon">
                <img src="/images/bar_volume_up.svg" alt="" className="volumn__img" />
              </span>
              <div className="volume__bar">
                <div className="volume__bar-wrapper">
                  <div className="volume__bar-progress" />
                </div>
              </div>
            </div>
            <LikeBtn />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayingBar;
