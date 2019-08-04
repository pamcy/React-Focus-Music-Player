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
    isPlaying: false,
  };

  audioRef = React.createRef();

  componentDidMount() {
    this.init();
  }

  init = () => {
    const { album } = this.state;
    this.setState({ currentSong: album.tracks[0] });
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

  render() {
    const { album, currentSong, isPlaying } = this.state;

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
            audioRef={this.audioRef}
            album={album}
            currentSong={currentSong}
            playSong={this.playSong}
            isPlaying={isPlaying}
          />
        </div>
      </div>
    );
  }
}

export default App;
