import React from 'react';
import PropTypes from 'prop-types';

import FollowBtn from './Buttons/FollowBtn';
import PlayBtn from './Buttons/PlayBtn';

const CoverArtist = props => {
  return (
    <div className="cover-artist">
      <div className="cover-artist__wrapper">
        <div className="cover-artist__info">
          <div className="cover-artist__info-top">
            <span className="cover-artist__subtitle">ARTIST</span>
            <h2 className="cover-artist__name">Russel Kroh</h2>
          </div>
          <div className="cover-artist__info-bottom">
            <div className="cover-artist__follow">
              <span className="cover-artist__follow-number">252,134</span>
              <span className="cover-artist__follow-txt">Followers</span>
            </div>
            <div className="cover-artist__btns">
              <FollowBtn />
              <PlayBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CoverArtist.propTypes = {};

export default CoverArtist;
