import React from 'react';
import PropTypes from 'prop-types';

const LikeBtn = ({ index, likeStatus, toggleLikedSong }) => {
  const fillColor = { fill: likeStatus ? '#964a4d' : 'none' };

  return (
    <button type="button" className="like-btn" onClick={() => toggleLikedSong(index)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24.15" viewBox="0 0 26 24.15">
        <g transform="translate(1 -1.004)">
          <g transform="translate(0 2.004)">
            <path
              className="like-btn__stroke"
              style={fillColor}
              d="M21.983,4.018A6.894,6.894,0,0,0,12,4.275a6.886,6.886,0,1,0-9.983,9.482L12,23.74l9.983-9.984a6.886,6.886,0,0,0,0-9.738Z"
              transform="translate(0 -2.004)"
            />
          </g>
        </g>
      </svg>
    </button>
  );
};

LikeBtn.propTypes = {
  index: PropTypes.number.isRequired,
  likeStatus: PropTypes.bool,
  toggleLikedSong: PropTypes.func.isRequired,
};

LikeBtn.defaultProps = {
  likeStatus: false,
};

export default LikeBtn;
