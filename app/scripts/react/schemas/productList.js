import { PropTypes } from 'react';
import product from './product';
import pagination from './pagination';

const {
  arrayOf,
  shape,
  number,
} = PropTypes;

export default shape({
  items: arrayOf(product).isRequired,
  pagination: pagination.isRequired,
  totalCount: number,
});
