import React from 'react';
import PropTypes from 'prop-types';

import LikeBtn from './Buttons/LikeBtn';

import { timeConverter } from '../helpers';

class PlayingBar extends React.Component {
  state = {
    currentTime: null,
    duration: null,
  };

  progressRef = React.createRef();

  bufferRef = React.createRef();

  componentDidUpdate() {
    const audio = this.props.audioRef.current;
    audio.addEventListener('timeupdate', this.updateProgressBar);
  }

  updateProgressBar = e => {
    this.setState({
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });

    const { currentTime, duration } = this.state;
    const playedRatio = (currentTime / duration) * 100;
    const progressBar = this.progressRef.current;

    progressBar.style.transform = `translateX(${-(100 - playedRatio)}%)`;

    const audio = this.props.audioRef.current;
    const lastBuffered = audio.buffered.end(audio.buffered.length - 1);
    const bufferedRatio = (lastBuffered / duration) * 100;
    const bufferBar = this.bufferRef.current;

    bufferBar.style.transform = `translateX(${-(100 - bufferedRatio)}%)`;
  };

  render() {
    const { audioRef, album, currentSong, playSong, isPlaying } = this.props;
    const { currentTime, duration } = this.state;
    const playStatus = isPlaying ? 'pause' : 'play';

    return (
      <div className="playing-bar">
        <div className="playing-bar__progress">
          <div className="progress__wrapper">
            <div ref={this.bufferRef} className="progress__buffered" />
            <div ref={this.progressRef} className="progress__played" />
          </div>
        </div>
        <div className="playing-bar__time">
          <span className="playing-bar__current-time">{timeConverter(currentTime)}</span>
          <span className="playing-bar__total-time">{timeConverter(duration)}</span>
        </div>
        <div className="playingbar__panel">
          <div className="panel__album">
            <img
              src={album.albumCover}
              alt="When 24hrs isn't enough"
              className="panel__album-img"
            />
            <div className="panel__album-content">
              <h3 className="panel__album-title">{currentSong.title}</h3>
              <p className="panel__album-featuring">{`${album.artist} (featuring ${currentSong.featuring})`}</p>
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
            <div className="controller__btn controller__btn--play" onClick={playSong}>
              <img
                src={`/images/bar_${playStatus}-button.svg`}
                alt={`${playStatus} song`}
                className="controller__img"
              />
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
        <audio src={currentSong.path} ref={audioRef}>
          <track kind="captions" />
        </audio>
      </div>
    );
  }
}

PlayingBar.propTypes = {
  album: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    albumCover: PropTypes.string.isRequired,
  }).isRequired,
  currentSong: PropTypes.shape({
    title: PropTypes.string.isRequired,
    featuring: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlayingBar;
