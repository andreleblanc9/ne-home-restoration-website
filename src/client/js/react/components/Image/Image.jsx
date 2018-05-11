import React from 'react';
import cx from '_utilities/classnames';
import PropTypes from 'prop-types';
import './Image.scss';

const noop = () => {};

// @TODO: Add fullWidth fullHeight props
// @TODO: center image by default!
// @TODO: Add ref magic to have the image always fill the entire available width
// @TODO: Find ways of using the known height and width to mantain the aspect ratio of image
// even at loading state.


class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    this.image = new Image();
    this.image.src = this.props.src;
    this.image.onload = () => {
      this.setState(prevState => ({isLoading: false}));
    };
  }
  render() {
    const {withBorder, fullHeight, fullWidth, height, width, src, alt, onClick} = this.props;
    const {isLoading} = this.state;
    const aspectRatio = width && height ? Math.min(height/width, width/height) : 1;
    const styles = {paddingBottom: `${aspectRatio * 100}%`};
    return (
      <div className={cx("ImageComponent", {
        "ImageComponent--withBorder": withBorder,
        "ImageComponent--fullWidth": fullWidth,
        "ImageComponent--fullHeight": fullHeight
      })}>
        <div className="ImageComponent-wrapper" style={styles}>
          <figure className="ImageComponent-container" onClick={onClick}>
            <img className="ImageComponent-img" src={src} alt={alt}/>
          </figure>
        </div>
      </div>
    );
  }
}
ImageComponent.propTypes = {
  withBorder: PropTypes.bool,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func
};
ImageComponent.defaultProps = {
  withBorder: false,
  fullHeight: false,
  fullWidth: false,
  height: null,
  width: null,
  alt: '',
  onClick: noop
};

export default ImageComponent;