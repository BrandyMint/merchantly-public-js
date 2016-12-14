import React, { Component, PropTypes } from 'react';

import HiddenInput from '../../common/HiddenInput';
import ProductCartWishlist from './ProductCartWishlist';
import ProductAddToCartButton from '../ProductAddToCartButton';

const ProductCartForProduct = (props) => (
  <span>
    <HiddenInput name="cart_item[good_id]" value={props.good.globalId} />
    <div className="b-item-full__form__row b-item-full__form__row_fixed">
      <div className="b-item-full__form__submit">
        <ProductAddToCartButton
          text={props.t('vendor.button.to_cart', {title: props.product.title})}
          t={props.t}
        />
      </div>
    </div>
    <ProductCartWishlist
      {...props}
      addWishlistText={props.t('vendor.button.to_wishlist')}
      goWishlistText={props.t('vendor.button.go_wishlist')}
    />
  </span>
);

export default ProductCartForProduct;
