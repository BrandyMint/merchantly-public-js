import React, { Component, PropTypes } from 'react';
import OrderComments from 'rc/common/Order/OrderComments';
import OrderContents from 'rc/common/Order/OrderContents';
import * as schemas from 'r/schemas';

class OrderCancelled extends Component {
  render() {
    const {
      isCurrentClientPresent,
      order,
      t,
      vendorRootPath,
    } = this.props;
    const {
      externalId,
      workflowState: {
        bgStyle,
        title,
      },
      adminComments,
    } = order;

    return (
      <section className="b-cart">
        <div className="b-cart__content">
          <h1 className="b-cart__title">
            {t('vendor.order.title', { number: externalId })}
            <span className="label label-success" style={bgStyle}>
              {title}
            </span>
          </h1>
          <div className="b-cart__message">
            <OrderComments comments={adminComments} />
            {!isCurrentClientPresent && (
              <a className="b-btn" href={vendorRootPath}>
                {t('vendor.order.continue_shopping')}
              </a>
            )}
          </div>
        </div>
        <OrderContents order={order} t={t} />
      </section>
    );
  }
}

OrderCancelled.propTypes = {
  isCurrentClientPresent: PropTypes.bool.isRequired,
  order: schemas.order.isRequired,
  t: PropTypes.func.isRequired,
  vendorRootPath: PropTypes.string,
};

OrderCancelled.defaultProps = {
  isCurrentClientPresent: false,
};

export default OrderCancelled;
