import React from 'react';
import PropTypes from 'prop-types';

import LikeBtn from './Buttons/LikeBtn';

const PlayingBar = ({ album, current }) => {
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
          <img src={album.albumCover} alt="When 24hrs isn't enough" className="panel__album-img" />
          <div className="panel__album-content">
            <h3 className="panel__album-title">{current.title}</h3>
            <p className="panel__album-featuring">{`${album.artist} (featuring ${current.featuring})`}</p>
          </div>
        </div>
        <div className="panel__controller">
          <div className="controller__btn">
            <img src="/images/bar_shuffle.svg" alt="Shuffle" className="controller__-img" />
          </div>
          <div className="controller__btn">
            <img
              src="/images/bar_previous_song.svg"
              alt="Previous song"
              className="controller__img"
            />
          </div>
          <div className="controller__btn controller__btn--play">
            <img src="/images/bar_play-button.svg" alt="Play song" className="controller__img" />
          </div>
          <div className="controller__btn">
            <img src="/images/bar_next_song.svg" alt="Next song" className="controller__img" />
          </div>
          <div className="controller__btn">
            <img src="/images/bar_repeat.svg" alt="Repeat" className="controller__img" />
          </div>
        </div>
        <div className="panel__right">
          <div className="volume">
            <span className="volume__icon">
              <img src="/images/bar_volume_up.svg" alt="Adjust volume" className="volumn__img" />
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
      <audio src={current.path}>
        <track kind="captions" />
      </audio>
    </div>
  );
};

PlayingBar.propTypes = {
  album: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    albumCover: PropTypes.string.isRequired,
  }).isRequired,
  current: PropTypes.shape({
    title: PropTypes.string.isRequired,
    featuring: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlayingBar;
