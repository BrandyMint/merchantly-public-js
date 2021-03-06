import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HiddenInput from '../../common/HiddenInput';
import ProductCartWishlist from './ProductCartWishlist';
import ProductAddToCartButton from '../ProductAddToCartButton';

const ProductCartForProduct = (props) => (
  <span>
    <HiddenInput name="cart_item[good_id]" value={props.good.globalId} />
    <HiddenInput name="cart_item[product_price_id]" value={props.good.actualPrice.id} />
    <div className="b-item-full__form__row b-item-full__form__row_fixed">
      <div className="b-item-full__form__submit">
        <ProductAddToCartButton
          isAddingGood={props.isAddingGood}
          good={props.good}
          t={props.t}
          text={props.t('vendor.button.to_cart', {title: props.product.title})}
        />
      </div>
    </div>
    <ProductCartWishlist t={props.t} product={props.product} />
  </span>
);

export default ProductCartForProduct;
