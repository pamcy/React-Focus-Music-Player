import React from 'react';
import PropTypes from 'prop-types';

import LikeBtn from './Buttons/LikeBtn';

import { timeConverter } from '../helpers';

class PlayingBar extends React.Component {
  // static propTypes = {
  //   audioRef: PropTypes.shape({
  //     current: PropTypes.instanceOf(Element),
  //   }).isRequired,
  //   album: PropTypes.shape({
  //     artist: PropTypes.string.isRequired,
  //     albumCover: PropTypes.string.isRequired,
  //   }).isRequired,
  //   currentSong: PropTypes.shape({
  //     title: PropTypes.string.isRequired,
  //     featuring: PropTypes.string.isRequired,
  //     liked: PropTypes.bool.isRequired,
  //     path: PropTypes.string.isRequired,
  //   }).isRequired,
  //   playSong: PropTypes.func.isRequired,
  //   isPlaying: PropTypes.bool.isRequired,
  // };

  render() {
    const {
      audioRef,
      progressBarRef,
      playedRef,
      bufferRef,
      album,
      currentSong,
      currentTime,
      duration,
      playSong,
      playLast,
      playNext,
      isPlaying,
      updateCurrentTime,
    } = this.props;
    const playStatus = isPlaying ? 'pause' : 'play';

    return (
      <div className="playing-bar">
        <div
          ref={progressBarRef}
          className="playing-bar__progress"
          onClick={updateCurrentTime}
          role="button"
        >
          <div className="progress__wrapper">
            <div ref={bufferRef} className="progress__buffered" />
            <div ref={playedRef} className="progress__played" />
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
            <div className="controller__btn" onClick={playLast} role="button">
              <img
                src="/images/bar_previous_song.svg"
                alt="Last song"
                className="controller__img"
              />
            </div>
            <div className="controller__btn controller__btn--play" onClick={playSong} role="button">
              <img
                src={`/images/bar_${playStatus}-button.svg`}
                alt={`${playStatus} song`}
                className="controller__img"
              />
            </div>
            <div className="controller__btn" onClick={playNext}>
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

export default PlayingBar;
