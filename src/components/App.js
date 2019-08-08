import React from 'react';
import CoverArtist from './CoverArtist';
import Playlist from './Playlist';
import UserPanel from './UserPanel';
import PlayingBar from './PlayingBar';

import albumInfo from '../initial-playlist';

class App extends React.Component {
  state = {
    album: albumInfo,
    currentSong: {},
    currentTime: null,
    duration: null,
    isPlaying: false,
  };

  audioRef = React.createRef();

  progressBarRef = React.createRef();

  playedRef = React.createRef();

  bufferRef = React.createRef();

  componentDidMount() {
    const audio = this.audioRef.current;

    this.init();
    audio.addEventListener('canplay', this.saveSongDuration);
    audio.addEventListener('timeupdate', this.updateProgressBar);
  }

  init = () => {
    const { album } = this.state;
    this.setState({ currentSong: album.tracks[0] });
  };

  saveSongDuration = e => {
    this.setState({
      duration: e.target.duration,
    });
  };

  playSong = () => {
    const { isPlaying } = this.state;
    const audio = this.audioRef.current;

    this.setState({ isPlaying: !isPlaying });

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  playLast = () => {
    const { album, currentSong } = this.state;
    const { tracks } = album;

    tracks.forEach((track, index) => {
      if (track.path === currentSong.path) {
        const trackIndex = index === 0 ? tracks[tracks.length - 1] : tracks[index - 1];

        this.setState(
          {
            currentSong: trackIndex,
            isPlaying: false,
          },
          () => {
            this.playSong();
          }
        );
      }
    });
  };

  playNext = () => {
    const { album, currentSong } = this.state;
    const { tracks } = album;

    tracks.forEach((track, index) => {
      if (track.path === currentSong.path) {
        this.setState(
          {
            currentSong: tracks[(index + 1) % tracks.length],
            isPlaying: false,
          },
          () => {
            this.playSong();
          }
        );
      }
    });
  };

  updateProgressBar = e => {
    this.setState({
      currentTime: e.target.currentTime,
    });

    const audio = this.audioRef.current;
    const playedBar = this.playedRef.current;
    const { currentTime, duration } = this.state;
    const playedRatio = (currentTime / duration) * 100;

    playedBar.style.transform = `translateX(${-(100 - playedRatio)}%)`;

    if (audio.buffered.length <= 0) return;

    const lastBuffered = audio.buffered.end(audio.buffered.length - 1);
    const bufferedRatio = (lastBuffered / duration) * 100;
    const bufferBar = this.bufferRef.current;

    bufferBar.style.transform = `translateX(${-(100 - bufferedRatio)}%)`;

    if (audio.ended) {
      this.playNext();
    }
  };

  updateCurrentTime = e => {
    const audio = this.audioRef.current;
    const progressBar = this.progressBarRef.current;
    const totalWidth = progressBar.offsetWidth;
    const playedRatio = e.pageX / totalWidth;
    const { duration } = this.state;

    audio.currentTime = playedRatio * duration;
  };

  render() {
    const { album } = this.state;

    return (
      <div className="app">
        <div className="wrapper-l container">
          <CoverArtist
            artistCover={album.artistCover}
            artist={album.artist}
            followers={album.followers}
          />
          <Playlist album={album} />
          <UserPanel />
          <PlayingBar
            {...this.state}
            audioRef={this.audioRef}
            progressBarRef={this.progressBarRef}
            playedRef={this.playedRef}
            bufferRef={this.bufferRef}
            playSong={this.playSong}
            playLast={this.playLast}
            playNext={this.playNext}
            updateCurrentTime={this.updateCurrentTime}
          />
        </div>
      </div>
    );
  }
}

export default App;
