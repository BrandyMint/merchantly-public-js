import $ from 'jquery';
import React, { Component, PropTypes } from 'react';
import { diff } from 'deep-diff';
import ErrorService from '../../../services/Error';
import { PHOTO_CHANGE } from '../../../constants/globalEventKeys';
import { getInitialGood, getInitialValues, getMatchedGood, getUpdatedValues } from './utils';

import HiddenInput from '../../common/HiddenInput';
import ProductAddToCartButton from '../ProductAddToCartButton';
import PropertyList from './PropertyList';
import PropertySingle from './PropertySingle';
import ProductCartWishlist from '../ProductCart/ProductCartWishlist';

class ProductProperties extends Component {
  static propTypes = {
    addWishlistUrl: PropTypes.string,
    goods: PropTypes.array.isRequired,
    isWishlisted: PropTypes.bool,
    onGoodChange: PropTypes.func,
    properties: PropTypes.array.isRequired,
    wishlistUrl: PropTypes.string,
    t: PropTypes.func.isRequired,
  }
  static defaultProps = {
    goods: [],
    properties: [],
  }
  constructor(props) {
    super(props);

    const { goods, properties } = props;

    this.state = {
      good: getInitialGood(properties, goods),
      values: getInitialValues(properties, goods),
    };
  }
  componentDidMount() {
    if (this.props.onGoodChange) {
      this.props.onGoodChange(this.state.good);
    }
    // TODO: Make TestComponentService or smth
    this.validateProps(this.props);
  }
  componentDidUpdate(prevProps, prevState) {
    const { good } = this.state;

    if (diff(this.state.good, prevState.good)) {
      if (this.props.onGoodChange) {
        this.props.onGoodChange(this.state.good);
      }
      $(document).trigger(PHOTO_CHANGE, good ? good.image : null);
    }
  }
  validateProps(props) {
    // Number of attributes in every good equals number of product properties
    const { goods, properties } = props;

    if (properties && properties.length && goods && goods.length) {
      const propertiesCount = properties.length;
      const hasDifferentCount = goods.some((el) =>
        Object.keys(el.attributes).length !== propertiesCount
      );

      if (hasDifferentCount) {
        ErrorService.notifyErrorProps('Количество свойств товара отличается от количества аттрибутов варианта', {
          props,
          component: 'ProductProperties',
        });
      }
    }
  }
  updateValues(property, value) {
    const { properties, goods } = this.props;
    const { values } = this.state;

    const newValues = getUpdatedValues(property, properties, goods, values, {
      [property.id]: value,
    });

    this.setState({
      good: getMatchedGood(properties, goods, newValues),
      values: newValues,
    });
  }
  render() {
    const { t } = this.props;
    const { good, values } = this.state;

    const hiddenInput = good && (
      <HiddenInput
        name="cart_item[good_id]"
        value={good.globalId}
      />
    );
    const addToCartButton = (
      <ProductAddToCartButton
        disabled={!good}
        t={t}
        text={good ? t('vendor.button.to_cart') : t('vendor.button.select_good')}
      />
    );

    if (this.props.properties.length > 1) {
      return (
        <span>
          <PropertyList
            goods={this.props.goods}
            onChange={this.updateValues.bind(this)}
            properties={this.props.properties}
            t={t}
            values={values}
          />
          {hiddenInput}
          <div className="b-item-full__form__row b-item-full__form__submit">
            {addToCartButton}
          </div>
          <ProductCartWishlist
            {...this.props}
            addWishlistText={t('vendor.button.to_wishlist')}
            goWishlistText={t('vendor.button.go_wishlist')}
          />
        </span>
      );
    } else {
      return (
        <div className="b-item-full__form__row b-item-full__form__row_fixed">
          <div className="b-item-full__form__option">
            <PropertySingle
              goods={this.props.goods}
              onChange={this.updateValues.bind(this)}
              properties={this.props.properties}
              values={values}
            />
          </div>
        <div className="b-item-full__form__submit">
          {hiddenInput}
          {addToCartButton}
        </div>
        <ProductCartWishlist
          {...this.props}
          addWishlistText={t('vendor.button.to_wishlist')}
          goWishlistText={t('vendor.button.go_wishlist')}
        />
      </div>
      );
    }
  }
}

export default ProductProperties;
