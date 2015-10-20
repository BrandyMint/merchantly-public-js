import React, { PropTypes } from 'react';
import { vendorCartItems } from '../../../../routes/app';
import ProductCartForProduct from './ProductCartForProduct';
import ProductCartForProductItems from './ProductCartForProductItems';
import ProductCartNotAvailable from './ProductCartNotAvailable';

export default class ProductCart {
  static propTypes = {
    onGoodChange: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
  }
  renderContent(product) {
    if (product.has_ordering_goods) {
      if (product.goods.length === 1) {
        return (
          <ProductCartForProduct good={product.goods[0]} />
        );
      } else {
        return (
          <ProductCartForProductItems
            onGoodChange={this.props.onGoodChange}
            product={product}
          />
        );
      }
    } else {
      return (
        <ProductCartNotAvailable title="Не доступно" />
      );
    }
  }
  render() {
    const { onProductChange, product } = this.props;

    return (
      <form
        acceptCharset="UTF-8"
        action={vendorCartItems()}
        className="simple_form cart_item"
        method="POST"
      >
        {this.renderContent(product)}
      </form>
    );
  }
}