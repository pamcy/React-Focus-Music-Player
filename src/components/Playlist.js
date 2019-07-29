/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PlayBtn from './Buttons/PlayBtn';
import LikeBtn from './Buttons/LikeBtn';

class Playlist extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="playlist">
        <div className="playlist__wrapper">
          <div className="playlist__header">
            <div className="playlist__cover">
              <img src="/images/album_cover.jpg" alt="" className="playlist__cover-img" />
            </div>
            <div className="playlist__album-info">
              <span className="playlist__album-year">2019</span>
              <h1 className="playlist__album-name">When 24hrs isn&apos;t enough</h1>
              <PlayBtn />
            </div>
          </div>
          <ul className="playlist__table">
            <li className="playlist__table-item playlist__table-item--head">
              <span />
              <span />
              <span className="table-head__title">Title</span>
              <span className="table-head__length">Length</span>
              <img src="/images/heart-l-red.svg" alt="" className="table-head__liked-icon" />
              <span />
            </li>
            <li className="playlist__table-item">
              <img src="/images/current_playing.svg" alt="" className="table-item__playing-icon" />
              <span className="table-item__no">1</span>
              <h3 className="table-item__song">
                Fresh Healthy Perspectives
                <span className="table-item__featuring">(featuring Birocratic)</span>
              </h3>
              <span className="table-item__length">3:17</span>
              <span className="table-item__total-likes">12,523</span>
              <LikeBtn />
            </li>
            <li className="playlist__table-item">
              <img src="/images/current_playing.svg" alt="" className="table-item__playing-icon" />
              <span className="table-item__no">12</span>
              <h3 className="table-item__song">
                Fresh Healthy Perspectives
                <span className="table-item__featuring">(featuring Birocratic)</span>
              </h3>
              <span className="table-item__length">3:17</span>
              <span className="table-item__total-likes">12,523</span>
              <LikeBtn />
            </li>
            <li className="playlist__table-item">
              <img src="/images/current_playing.svg" alt="" className="table-item__playing-icon" />
              <span className="table-item__no">1</span>
              <h3 className="table-item__song">
                Fresh Healthy Perspectives
                <span className="table-item__featuring">(featuring Birocratic)</span>
              </h3>
              <span className="table-item__length">3:17</span>
              <span className="table-item__total-likes">12,523</span>
              <LikeBtn />
            </li>
            <li className="playlist__table-item">
              <img src="/images/current_playing.svg" alt="" className="table-item__playing-icon" />
              <span className="table-item__no">1</span>
              <h3 className="table-item__song">
                Fresh Healthy Perspectives
                <span className="table-item__featuring">(featuring Birocratic)</span>
              </h3>
              <span className="table-item__length">3:17</span>
              <span className="table-item__total-likes">12,523</span>
              <LikeBtn />
            </li>
            <li className="playlist__table-item">
              <img src="/images/current_playing.svg" alt="" className="table-item__playing-icon" />
              <span className="table-item__no">1</span>
              <h3 className="table-item__song">
                Fresh Healthy Perspectives
                <span className="table-item__featuring">(featuring Birocratic)</span>
              </h3>
              <span className="table-item__length">3:17</span>
              <span className="table-item__total-likes">12,523</span>
              <LikeBtn />
            </li>
            <li className="playlist__table-item">
              <img src="/images/current_playing.svg" alt="" className="table-item__playing-icon" />
              <span className="table-item__no">1</span>
              <h3 className="table-item__song">
                Fresh Healthy Perspectives
                <span className="table-item__featuring">(featuring Birocratic)</span>
              </h3>
              <span className="table-item__length">3:17</span>
              <span className="table-item__total-likes">12,523</span>
              <LikeBtn />
            </li>
            <li className="playlist__table-item">
              <img src="/images/current_playing.svg" alt="" className="table-item__playing-icon" />
              <span className="table-item__no">1</span>
              <h3 className="table-item__song">
                Fresh Healthy Perspectives
                <span className="table-item__featuring">(featuring Birocratic)</span>
              </h3>
              <span className="table-item__length">3:17</span>
              <span className="table-item__total-likes">12,523</span>
              <LikeBtn />
            </li>
            <li className="playlist__table-item">
              <img src="/images/current_playing.svg" alt="" className="table-item__playing-icon" />
              <span className="table-item__no">1</span>
              <h3 className="table-item__song">
                Fresh Healthy Perspectives
                <span className="table-item__featuring">(featuring Birocratic)</span>
              </h3>
              <span className="table-item__length">3:17</span>
              <span className="table-item__total-likes">12,523</span>
              <LikeBtn />
            </li>
            <li className="playlist__table-item">
              <img src="/images/current_playing.svg" alt="" className="table-item__playing-icon" />
              <span className="table-item__no">1</span>
              <h3 className="table-item__song">
                Fresh Healthy Perspectives
                <span className="table-item__featuring">(featuring Birocratic)</span>
              </h3>
              <span className="table-item__length">3:17</span>
              <span className="table-item__total-likes">12,523</span>
              <LikeBtn />
            </li>
            <li className="playlist__table-item">
              <img src="/images/current_playing.svg" alt="" className="table-item__playing-icon" />
              <span className="table-item__no">1</span>
              <h3 className="table-item__song">
                Fresh Healthy Perspectives
                <span className="table-item__featuring">(featuring Birocratic)</span>
              </h3>
              <span className="table-item__length">3:17</span>
              <span className="table-item__total-likes">12,523</span>
              <LikeBtn />
            </li>
            <li className="playlist__table-item">
              <img src="/images/current_playing.svg" alt="" className="table-item__playing-icon" />
              <span className="table-item__no">1</span>
              <h3 className="table-item__song">
                Fresh Healthy Perspectives
                <span className="table-item__featuring">(featuring Birocratic)</span>
              </h3>
              <span className="table-item__length">3:17</span>
              <span className="table-item__total-likes">12,523</span>
              <LikeBtn />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Playlist;
