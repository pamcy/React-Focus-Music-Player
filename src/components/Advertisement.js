import React from 'react';
import PropTypes from 'prop-types';

class Advertisement extends React.Component {
  static propTypes = {
    audioRef: PropTypes.shape({
      current: PropTypes.instanceOf(Element),
    }).isRequired,
  };

  state = {
    adIsOpen: false,
    count: null,
  };

  adRef = React.createRef();

  componentDidMount() {
    const audio = this.props.audioRef.current;

    audio.addEventListener('timeupdate', this.displayAD);
    document.addEventListener('mousedown', this.clickOutsideToCloseAD);
  }

  displayAD = () => {
    const audio = this.props.audioRef.current;
    if (!audio.ended) return;

    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });

    const { count } = this.state;
    if (count % 3 === 0) {
      this.setState({ adIsOpen: true });
    }
  };

  closeAD = () => {
    this.setState({ adIsOpen: false });
  };

  clickOutsideToCloseAD = e => {
    if (!this.adRef.current.contains(e.target)) {
      this.setState({ adIsOpen: false });
    }
  };

  render() {
    const { adIsOpen } = this.state;

    return (
      <div className={`ad ${adIsOpen ? 'open' : ''}`}>
        <div ref={this.adRef} className="ad__wrapper">
          <div className="ad__top">
            <span className="ad__caption">Advertisement</span>
            <img
              src="/images/close_btn.svg"
              alt="Close AD"
              className="ad__close-btn"
              onClick={this.closeAD}
            />
          </div>
          <div className="ad__main">
            <img src="/images/advertisement.png" alt="Subscribe today" className="ad__img" />
          </div>
        </div>
      </div>
    );
  }
}

export default Advertisement;
