/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

import PlayBtn from './Buttons/PlayBtn';
import LikeBtn from './Buttons/LikeBtn';

const Playlist = ({ album }) => {
  return (
    <div className="playlist">
      <div className="playlist__wrapper">
        <div className="playlist__header">
          <div className="playlist__cover">
            <img src={album.albumCover} alt={album.name} className="playlist__cover-img" />
          </div>
          <div className="playlist__album-info">
            <span className="playlist__album-year">{album.year}</span>
            <h1 className="playlist__album-name">{album.name}</h1>
            <PlayBtn />
          </div>
        </div>
        <ul className="playlist__table">
          <li className="playlist__table-item playlist__table-item--head">
            <span />
            <span />
            <span className="table-head__title">Title</span>
            <span className="table-head__length">Length</span>
            <img
              src="/images/heart-l-red.svg"
              alt="Add to your favorite"
              className="table-head__liked-icon"
            />
            <span />
          </li>

          {album.tracks.map((track, i) => (
            <li className="playlist__table-item" key={track.id}>
              <img
                src="/images/current_playing.svg"
                alt="Current playing"
                className="table-item__playing-icon"
              />
              <span className="table-item__no">{i + 1}</span>
              <h3 className="table-item__song">
                {track.title}
                <span className="table-item__featuring">{`(featuring ${track.featuring})`}</span>
              </h3>
              <span className="table-item__length">{track.length}</span>
              <span className="table-item__total-likes">{track.totalLikes}</span>
              <LikeBtn likeStatus={track.liked} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Playlist.propTypes = {
  album: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    artistCover: PropTypes.string.isRequired,
    albumCover: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
    tracks: PropTypes.array.isRequired,
  }).isRequired,
};

export default Playlist;
