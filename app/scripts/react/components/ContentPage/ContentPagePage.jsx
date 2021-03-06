import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VendorLayoutContainer from 'rc/VendorLayout';
import ImageSlider from 'rc/common/ImageSlider';
import ContentPageContainer from './index';

class ContentPagePage extends Component {
  render() {
    const {
      i18n,
      layoutProps,
      title,
      text,
      images,
      rtl,
    } = this.props;

    return (
      <VendorLayoutContainer {...layoutProps} i18n={i18n}>
        <ContentPageContainer {...{
          title,
          text,
          images,
          rtl,
        }} />
      </VendorLayoutContainer>
    );
  }
}

ContentPagePage.propTypes = {
  i18n: PropTypes.object,
  layoutProps: PropTypes.shape(...VendorLayoutContainer.propTypes).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  images: ImageSlider.propTypes.slides,
  rtl: PropTypes.bool.isRequired,
};

ContentPagePage.defaultProps = {
  rtl: false
}

export default ContentPagePage;
