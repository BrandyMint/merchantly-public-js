import { PropTypes } from 'react';
import image from './image';
import money from './money'
import good from './good';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  hasOrderingGoods: PropTypes.bool.isRequired,
  indexImage: image,
  secondImage: image,
  isLabelNew: PropTypes.bool.isRequired,
  isRunOut: PropTypes.bool.isRequired,
  isSale: PropTypes.bool.isRequired,
  isSold: PropTypes.bool.isRequired,
  publicUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  prices: PropTypes.shape({
    minPrice: money.isRequired,
    maxPrice: money.isRequired,
  }),
  goods: PropTypes.arrayOf(good).isRequired,
});
