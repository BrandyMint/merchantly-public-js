import $ from 'jquery';
import React, { Component, findDOMNode, PropTypes } from 'react';
import { PHOTO_CHANGE } from '../../../constants/globalEventKeys';

class ProductCardGallerySlider extends Component {
  state = {
    selectedIndex: 0,
  }
  componentDidMount() {
    this.initSliders();

    $('[lightbox], [data-lightbox]').fancybox({
      padding: 0,
      margin: 0,
      helpers: {
        thumbs: {
          width: 8,
          height: 8
        }
      },
      tpl: {
        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><i></i></a>',
        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><i></i></a>',
        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><i></i></a>',
      },
    });

    $(document).on(PHOTO_CHANGE, this.onPhotoChange.bind(this));
    $(document).on('updateProductImages', this.reinitSliders.bind(this));
  }
  componentDidUpdate(prevProps, prevState) {
    const $productPhoto = $(findDOMNode(this.refs.productPhoto));
    const $productThumbs = $(findDOMNode(this.refs.productThumbs));

    if (prevState.selectedIndex !== this.state.selectedIndex) {
      $productThumbs.trigger('owl.goTo', this.state.selectedIndex);
      $productPhoto.trigger('owl.goTo', this.state.selectedIndex);
    }
  }
  initSliders() {
    const $productPhoto = $(findDOMNode(this.refs.productPhoto));
    const $productThumbs = $(findDOMNode(this.refs.productThumbs));

    $productPhoto.owlCarousel({
      afterAction: this.onAfterPhotoAction.bind(this),
      autoHeight: true,
      singleItem: true,
    });

    if ($productThumbs.length) {
      $productThumbs.owlCarousel({
        items: 4,
        pagination: false,
        itemsMobile: 2,
      });
    }
  }
  reinitSliders() {
    const $productPhoto = $(findDOMNode(this.refs.productPhoto));
    const $productThumbs = $(findDOMNode(this.refs.productThumbs));

    $productPhoto.data('owlCarousel').reinit({
      singleItem: true,
      afterAction: this.onAfterPhotoAction.bind(this),
    });

    if ($productThumbs.length) {
      $productThumbs.data('owlCarousel').reinit({
        items: 4,
        pagination: false,
      });
    }
  }
  getIndexByUID(images, uid) {
    for (let i = 0; i < images.length; i++) {
      const image = images[i];

      if (image.uid === uid) return i;
    };

    return -1;
  }
  onAfterPhotoAction(el) {
    const $productPhoto = $(findDOMNode(this.refs.productPhoto));
    const carouselData = $productPhoto.data('owlCarousel');

    if (carouselData) {
      this.setState({
        selectedIndex: carouselData.currentItem,
      });
    }
  }
  onPhotoChange(ev, image) {
    if (image && image.uid) {
      const selectedIndex = this.getIndexByUID(this.props.images, image.uid);

      if (selectedIndex > -1) {
        this.setState({ selectedIndex });
      }
    }
  }
  onThumbClick(idx, ev) {
    const $productPhoto = $(findDOMNode(this.refs.productPhoto));

    ev.preventDefault();
    $productPhoto.trigger('owl.goTo', idx);
  }
  renderPhotoItem(el, idx) {
    return (
      <a
        className="b-slider__item"
        data-lightbox={''}
        href={el.url}
        key={idx}
        rel="photo-stack"
      >
        <img
          alt={el.title}
          className="u-photo"
          itemProp="image"
          src={el.url}
          title={el.title}
          width={this.props.previewWidth}
        />
      </a>
    );
  }
  renderThumbItem(el, idx) {
    return (
      <div
        className="b-slider__item"
        key={idx}
        onClick={this.onThumbClick.bind(this, idx)}
      >
        <img
          alt={el.title}
          src={el.url}
          title={el.title}
          width={this.props.thumbWidth}
        />
      </div>
    );
  }
  render() {
    const { images } = this.props;

    return (
      <div>
        <div
          className="b-slider"
          ref="productPhoto"
        >
          {images && images.map(this.renderPhotoItem.bind(this))}
        </div>
        {images && images.length > 1 &&
          <div
            className="b-slider b-slider_thumbs"
            ref="productThumbs"
          >
            {images.map(this.renderThumbItem.bind(this))}
          </div>
        }
      </div>
    );
  }
}

ProductCardGallerySlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      uid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  previewWidth: PropTypes.number,
  thumbWidth: PropTypes.number,
};
ProductCardGallerySlider.defaultProps = {
  images: [],
}

export default ProductCardGallerySlider;