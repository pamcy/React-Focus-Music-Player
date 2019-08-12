import React from 'react';
import PropTypes from 'prop-types';

import FollowBtn from './Buttons/FollowBtn';
import PlayBtn from './Buttons/PlayBtn';

const CoverArtist = props => {
  const { artist, artistCover, followers, isPlaying, playSong } = props;

  const artistImg = {
    backgroundImage: `url(${artistCover})`,
  };

  return (
    <div className="cover-artist">
      <div className="cover-artist__wrapper" style={artistImg}>
        <div className="cover-artist__info">
          <div className="cover-artist__info-top">
            <span className="cover-artist__subtitle">ARTIST</span>
            <h2 className="cover-artist__name">{artist}</h2>
          </div>
          <div className="cover-artist__info-bottom">
            <div className="cover-artist__follow">
              <span className="cover-artist__follow-number">{followers}</span>
              <span className="cover-artist__follow-txt">Followers</span>
            </div>
            <div className="cover-artist__btns">
              <FollowBtn />
              <PlayBtn playSong={playSong} isPlaying={isPlaying} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CoverArtist.propTypes = {
  artist: PropTypes.string.isRequired,
  artistCover: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  playSong: PropTypes.func.isRequired,
};

export default CoverArtist;
