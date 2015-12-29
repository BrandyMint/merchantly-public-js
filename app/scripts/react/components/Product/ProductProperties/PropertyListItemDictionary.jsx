import React, { Component, PropTypes } from 'react';
import Select from '../../common/Select';

export default class PropertyListItemDictionary extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    options: PropTypes.array.isRequired,
    propertyTitle: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="b-item-full__form__row">
        <div className="b-item-full__form__option b-item-full__form__option_full">
          <h3 className="b-item-full__form__title">
            {this.props.propertyTitle}
          </h3>
          <Select
            name={this.props.name}
            onChange={this.props.onChange}
            options={this.props.options}
            value={this.props.value}
          />
        </div>
      </div>
    );
  }
}