import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import ProductGoodActualPrice from './ProductGoodActualPrice';
import HumanizedMoneyWithCurrency from '../../common/Money/HumanizedMoneyWithCurrency';

class ProductGoodPrice extends Component {
  static propTypes = {
    good: PropTypes.object.isRequired,
  }
  renderWeightOfPrice(product, t){
    if (product.sellingByWeight && product.weightOfPrice){
      return (
        <span>
          &nbsp;/&nbsp;{product.weightOfPrice} {t('vendor.product.kg')}
        </span>
      );
    }else{
      return null;
    }
  }
  render() {
    const { product, good, t } = this.props;

    if (good.isSale) {
      return (
        <span>
          <div className="b-item__price b_item_price_sale">
            <ProductGoodActualPrice good={good} t={t} />
            {this.renderWeightOfPrice(product, t)}
          </div>
          <div className="b-item__price b-item__price_old">
            <HumanizedMoneyWithCurrency money={good.price} />
          </div>
        </span>
      );
    } else {
      const priceClasses = classNames('b-item__price', {
        'b-item__price_unknown': good.actualPrice && good.actualPrice.cents === 0,
      });

      return (
        <div className={priceClasses}>
          <ProductGoodActualPrice good={good} product={product} t={t} />
          {this.renderWeightOfPrice(product, t)}
        </div>
      );
    }
  }
}

export default ProductGoodPrice;
