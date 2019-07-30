import React from 'react';
import CoverArtist from './CoverArtist';
import Playlist from './Playlist';
import UserPanel from './UserPanel';
import PlayingBar from './PlayingBar';

function App() {
  return (
    <div className="app">
      <div className="wrapper-l container">
        <CoverArtist />
        <Playlist />
        <UserPanel />
        <PlayingBar />
      </div>
    </div>
  );
}

export default App;
