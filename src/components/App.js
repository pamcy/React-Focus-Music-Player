import React from 'react';
import CoverArtist from './CoverArtist';
import Playlist from './Playlist';
import UserPanel from './UserPanel';
import PlayingBar from './PlayingBar';

import albumInfo from '../initial-playlist';

class App extends React.Component {
  state = {
    album: albumInfo,
    current: {},
  };

  componentDidMount() {
    this.init();
  }

  init = () => {
    const { album } = this.state;

    this.setState({ current: album.tracks[0] });
  };

  render() {
    const { album, current } = this.state;

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
          <PlayingBar album={album} current={current} />
        </div>
      </div>
    );
  }
}

export default App;
