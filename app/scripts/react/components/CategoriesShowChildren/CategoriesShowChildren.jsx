import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChildrenProducts from 'rc/ChildrenProducts';

class CategoriesShowChildren extends Component {
  render() {
    const {
      childrenProducts,
      showCartButton,
      showAuthForBuyButton,
      vendorClientSigninPath,
      showQuantity,
      t,
      title,
      vendorRootPath,
      container,
      historyProducts
    } = this.props;

    return childrenProducts.length
      ? (
        <ChildrenProducts
          childrenProducts={childrenProducts}
          showCartButton={showCartButton}
          showAuthForBuyButton={showAuthForBuyButton}
          vendorClientSigninPath={vendorClientSigninPath}
          showQuantity={showQuantity}
          title={title}
          container={container}
          historyProducts={historyProducts}
          t={t}
        />
      )
      : (
        <div className="b-text b-text_center">
          <p>
            {t('vendor.category.empty')}
          </p>
          <a className="b-btn" href={vendorRootPath}>
            {t('vendor.category.continue_shopping')}
          </a>
        </div>
      );
  }
}

CategoriesShowChildren.propTypes = {
  childrenProducts: PropTypes.array.isRequired,
  showCartButton: PropTypes.bool,
  showAuthForBuyButton: PropTypes.bool,
  vendorClientSigninPath: PropTypes.string,
  showQuantity: PropTypes.bool,
  t: PropTypes.func.isRequired,
  title: PropTypes.string,
  vendorRootPath: PropTypes.string,
  container: PropTypes.object,
  historyProducts: PropTypes.arrayOf(PropTypes.object),
};

export default CategoriesShowChildren;
