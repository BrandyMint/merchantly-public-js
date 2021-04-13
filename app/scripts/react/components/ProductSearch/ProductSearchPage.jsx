import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CatalogFilterContainer from 'rc/CatalogFilter';
import VendorLayoutContainer from 'rc/VendorLayout';
import ProductSearchContainer from './index';
import * as schemas from 'r/schemas';

class ProductSearchPage extends Component {
  componentDidMount() {
    try {
      $(window).trigger('m.search', [this.props.products.items]);
    } catch (e) {
      console.log('trigger: ', e.message);
    }
  }

  render() {
    const {
      catalogFilterProps,
      i18n,
      layoutProps,
      products,
      showCartButton,
      showAuthForBuyButton,
      vendorClientSigninPath,
      showCatalogFilter,
      showQuantity,
      vendorRootPath,
    } = this.props;

    return (
      <VendorLayoutContainer {...layoutProps} i18n={i18n}>
        <ProductSearchContainer
          catalogFilterProps={catalogFilterProps}
          i18n={i18n}
          products={products}
          showCartButton={showCartButton}
          showAuthForBuyButton={showAuthForBuyButton}
          vendorClientSigninPath={vendorClientSigninPath}
          showCatalogFilter={showCatalogFilter}
          showQuantity={showQuantity}
          vendorRootPath={vendorRootPath}
        />
      </VendorLayoutContainer>
    );
  }
}

ProductSearchPage.propTypes = {
  catalogFilterProps: PropTypes.shape(...CatalogFilterContainer.propTypes),
  i18n: PropTypes.object,
  layoutProps: PropTypes.shape(...VendorLayoutContainer.propTypes).isRequired,
  products: schemas.productList.isRequired,
  showCatalogFilter: PropTypes.bool,
  showCartButton: PropTypes.bool,
  showAuthForBuyButton: PropTypes.bool,
  vendorClientSigninPath: PropTypes.string,
  showQuantity: PropTypes.bool,
  vendorRootPath: PropTypes.string,
};

export default ProductSearchPage;
