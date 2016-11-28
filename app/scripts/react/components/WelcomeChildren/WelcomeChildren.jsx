import React, { Component, PropTypes } from 'react';
import ImageSlider from 'rc/common/ImageSlider';
import ChildrenProducts from 'rc/ChildrenProducts/ChildrenProducts';
import PostProducts from 'rc/common/PostProducts';
import * as schemas from 'r/schemas';

class WelcomeChildren extends Component {
  render() {
    const {
      childrenProducts,
      showWelcomeSlider,
      vendor: {
        preProductsText,
        postProductsText,
        sliderImages,
      },
    } = this.props;

    return (
      <div>
        <div className="b-page__content__inner b-page__content__inner_slider">
          {showWelcomeSlider && (
            <ImageSlider
              className="b-slider_promo"
              hasThumbs={false}
              slides={sliderImages}
            />
          )}
        </div>
        {preProductsText && (
          <div className="b-page__content__inner b-page__content__inner_content">
            <div className="lead-text">
              <div
                className="lead-text__content"
                dangerouslySetInnerHTML={{ __html: preProductsText }}
              />
            </div>
          </div>
        )}
        {childrenProducts && (
          <div className="b-page__content__inner b-page__content__inner_content">
            <ChildrenProducts childrenProducts={childrenProducts} />
          </div>
        )}
        {postProductsText && (
          <div className="b-page__content__inner b-page__content__inner_content">
            <PostProducts postProductsText={postProductsText}/>
          </div>
        )}
      </div>
    );
  }
}

WelcomeChildren.propTypes = {
  childrenProducts: schemas.childrenProducts,
  showWelcomeSlider: PropTypes.bool.isRequired,
  vendor: schemas.vendor,
};

export default WelcomeChildren;
