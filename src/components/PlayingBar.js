import React from 'react';
import PropTypes from 'prop-types';

import LikeBtn from './Buttons/LikeBtn';

import { timeConverter } from '../helpers';

class PlayingBar extends React.Component {
  static propTypes = {
    audioRef: PropTypes.shape({
      current: PropTypes.instanceOf(Element),
    }).isRequired,
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
    playSong: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
  };

  volumeBarRef = React.createRef();

  volumeProgress = React.createRef();

  componentDidMount() {
    this.setDefaultVolume();
  }

  setDefaultVolume = () => {
    const audio = this.props.audioRef.current;
    const volumeProgress = this.volumeProgress.current;

    audio.volume = 0.6;
    volumeProgress.style.width = `${audio.volume * 100}%`;
  };

  adjustVolume = e => {
    const audio = this.props.audioRef.current;
    const volumeProgress = this.volumeProgress.current;
    const volumeBar = this.volumeBarRef.current;
    const volumeBarWidth = volumeBar.offsetWidth;
    const currentPosition = e.nativeEvent.offsetX;
    const volumeRatio = currentPosition / volumeBarWidth;

    audio.volume = volumeRatio;
    volumeProgress.style.width = `${volumeRatio * 100}%`;
  };

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
      repeatMode,
      toggleRepeatMode,
      shuffleMode,
      toggleShuffleMode,
      toggleLikedSong,
    } = this.props;

    const playStatus = isPlaying ? 'pause' : 'play';
    const repeatStatus = repeatMode ? '#964a4d' : '#fff';
    const shuffleStatus = shuffleMode ? '#964a4d' : '#fff';

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
            <div className="controller__btn" onClick={toggleShuffleMode}>
              <svg width="16" height="16" viewBox="0 0 16 16">
                <defs />
                <g transform="translate(-4 -4)">
                  <path
                    style={{ fill: shuffleStatus }}
                    d="M10.59,9.17,5.41,4,4,5.41l5.17,5.17ZM14.5,4l2.04,2.04L4,18.59,5.41,20,17.96,7.46,20,9.5V4Zm.33,9.41-1.41,1.41,3.13,3.13L14.5,20H20V14.5l-2.04,2.04-3.13-3.13Z"
                  />
                </g>
              </svg>
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
            <div className="controller__btn" onClick={toggleRepeatMode}>
              <svg width="18" height="20" viewBox="0 0 18 20">
                <defs />
                <g transform="translate(-3 -2)">
                  <path
                    style={{ fill: repeatStatus }}
                    d="M7,7H17v3l4-4L17,2V5H5v6H7ZM17,17H7V14L3,18l4,4V19H19V13H17Z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="panel__right">
            <div className="volume">
              <span className="volume__icon">
                <img src="/images/bar_volume_up.svg" alt="Adjust volume" className="volumn__img" />
              </span>
              <div ref={this.volumeBarRef} className="volume__bar" onClick={this.adjustVolume}>
                <div className="volume__bar-wrapper">
                  <div ref={this.volumeProgress} className="volume__bar-progress" />
                </div>
              </div>
            </div>
            <LikeBtn
              index={currentSong.id - 1}
              likeStatus={currentSong.liked}
              toggleLikedSong={toggleLikedSong}
            />
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
