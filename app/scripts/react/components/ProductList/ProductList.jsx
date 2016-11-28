import React, { Component, PropTypes } from 'react';
import ProductBlock from 'rc/Product/ProductBlock';
import Pagination from 'rc/Pagination';
import CatalogFilterContainer from 'rc/CatalogFilter';
import { Image } from 'rc/common/Image';
import * as schemas from 'r/schemas';

class ProductList extends Component {
  render() {
    const {
      catalogFilterProps,
      showCatalogFilter,
      container,
      i18n,
      products: {
        items,
        pagination,
      },
      showCartButton,
      showPagination,
      showQuantity,
      t,
      title,
    } = this.props;

    return (
      <section className="b-item-list b-item-list_catalog">
        {showCatalogFilter && <CatalogFilterContainer {...catalogFilterProps} />}
        {title && (
          <h1 className="b-item-list__title">
            {title}
          </h1>
        )}
        {(container && container.image) && (
          <div className="b-slider b-slider_promo">
            <div className="b-slider__item">
              <Image
                className="b-container-image"
                image={container.image}
                maxWidth={1000}
              />
            </div>
          </div>
        )}
        {(container && container.description) && (
          <div className="b-item-list__description">
            <div
              className="b-page__content__inner_content"
              dangerouslySetInnerHTML={{ __html: container.description }}
            />
          </div>
        )}
        <div className="b-item-list__content">
          {items.length > 0
            ? items.map((item) => (
              <ProductBlock
                i18n={i18n}
                key={`product-block-${item.id}`}
                product={item}
                showCartButton={showCartButton}
                showQuantity={showQuantity}
              />
            ))
            : (
            <div className="b-text b-text_center">
              {t('vendor.products.nothing_found_by_criteria')}
            </div>
          )}
          {(showPagination && pagination.totalPages > 1) && (
            <div className="b-item-list__paginator">
              <Pagination {...pagination} />
            </div>
          )}
        </div>
        {(container && container.bottomText) && (
          <div className="b-item-list__description">
            <div
              className="b-page__content__inner_content"
              dangerouslySetInnerHTML={{ __html: container.bottomText }}
            />
          </div>
        )}
      </section>
    );
  }
}

ProductList.propTypes = {
  catalogFilterProps: PropTypes.shape(...CatalogFilterContainer.propTypes),
  container: PropTypes.shape({
    image: schemas.image,
    description: PropTypes.string,
    bottomText: PropTypes.string,
  }),
  i18n: PropTypes.object,
  products: PropTypes.shape({
    items: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
  }).isRequired,
  showCartButton: PropTypes.bool,
  showCatalogFilter: PropTypes.bool,
  showPagination: PropTypes.bool,
  showQuantity: PropTypes.bool,
  t: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default ProductList;
