import React from 'react';

import CoverArtist from './CoverArtist';
import Playlist from './Playlist';
import UserPanel from './UserPanel';
import PlayingBar from './PlayingBar';

import albumInfo from '../initial-playlist';
import { getRandomNumber } from '../helpers';

class App extends React.Component {
  state = {
    album: albumInfo,
    currentSong: {},
    currentTime: null,
    duration: null,
    isPlaying: false,
    repeatMode: false,
    shuffleMode: false,
  };

  audioRef = React.createRef();

  progressBarRef = React.createRef();

  playedRef = React.createRef();

  bufferRef = React.createRef();

  componentDidMount() {
    const audio = this.audioRef.current;

    this.init();
    audio.addEventListener('canplay', this.saveSongDuration);
    audio.addEventListener('timeupdate', this.handleTimeUpdateEvent);
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

  playSingleSong = index => {
    const { album } = this.state;

    this.setState(
      {
        currentSong: album.tracks[index],
        isPlaying: false,
      },
      () => this.playSong()
    );
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

  handleTimeUpdateEvent = e => {
    this.setState({
      currentTime: e.target.currentTime,
    });
    this.updateProgressBar(e);
    this.handleAudioEnd();
  };

  updateProgressBar = e => {
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
  };

  handleAudioEnd = () => {
    const audio = this.audioRef.current;
    const { album, repeatMode, shuffleMode, isPlaying } = this.state;

    if (!audio.ended) return;

    if (repeatMode) {
      this.setState({ isPlaying: !isPlaying });
      audio.currentTime = 0;
      this.playSong();
    } else if (shuffleMode) {
      const totalTracks = album.tracks.length;
      const randomTrack = getRandomNumber(0, totalTracks - 1);

      this.setState({
        currentSong: album.tracks[randomTrack],
        isPlaying: !isPlaying,
      });

      this.playSong();
    } else {
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

  toggleRepeatMode = () => {
    const { repeatMode } = this.state;
    this.setState({ repeatMode: !repeatMode });
  };

  toggleShuffleMode = () => {
    const { shuffleMode } = this.state;
    this.setState({ shuffleMode: !shuffleMode });
  };

  render() {
    const { album, currentSong, isPlaying } = this.state;

    return (
      <div className="app">
        <div className="wrapper-l container">
          <CoverArtist
            artistCover={album.artistCover}
            artist={album.artist}
            followers={album.followers}
            isPlaying={isPlaying}
            playSong={this.playSong}
          />
          <Playlist
            album={album}
            isPlaying={isPlaying}
            currentSong={currentSong}
            playSong={this.playSong}
            playSingleSong={this.playSingleSong}
          />
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
            toggleRepeatMode={this.toggleRepeatMode}
            toggleShuffleMode={this.toggleShuffleMode}
          />
        </div>
      </div>
    );
  }
}

export default App;
