import React from 'react';
import PropTypes from 'prop-types';

const playBtn = ({ playSong, isPlaying }) => {
  return (
    <button type="button" className={`play-btn ${isPlaying ? 'pause' : ''}`} onClick={playSong}>
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  );
};

playBtn.propTypes = {};

export default playBtn;
