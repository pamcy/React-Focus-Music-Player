import React from 'react';
import CoverArtist from './CoverArtist';
import Playlist from './Playlist';
import UserPanel from './UserPanel';
import PlayingBar from './PlayingBar';

import albumInfo from '../initial-playlist';

class App extends React.Component {
  state = {
    album: albumInfo,
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
          <PlayingBar />
        </div>
      </div>
    );
  }
}

export default App;
