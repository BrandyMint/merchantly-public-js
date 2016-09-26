import React, { Component, PropTypes } from 'react';
import ProductList from './ProductList';
import ProductBlock from 'rc/Product/ProductBlock';
import provideTranslations from 'rc/HoC/provideTranslations';
import * as schemas from 'r/schemas';
import CatalogFilterContainer from 'rc/CatalogFilter';

class ProductListContainer extends Component {
  render() {
    return <ProductList {...this.props} />;
  }
}

ProductListContainer.propTypes = {
  catalogFilterProps: PropTypes.shape(...CatalogFilterContainer.propTypes),
  container: PropTypes.shape({
    image: schemas.image,
    description: PropTypes.string,
    bottom_text: PropTypes.string,
  }),
  products: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape(...ProductBlock.wrapped.propTypes)
    ).isRequired,
    pagination: schemas.pagination.isRequired,
  }).isRequired,
  showCartButton: PropTypes.bool,
  showCatalogFilter: PropTypes.bool,
  showPagination: PropTypes.bool,
  showQuantity: PropTypes.bool,
  t: PropTypes.func.isRequired,
  title: PropTypes.string,
};

ProductListContainer.defaultProps = {
  container: {},
  products: [],
  showCartButton: false,
  showCatalogFilter: false,
  showPagination: false,
  showQuantity: false,
};

export default provideTranslations(ProductListContainer);
