import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { CatalogFilter } from '../../../../app/scripts/react/components/CatalogFilter';

const options = [{
  'title': 'Показывать',
  'type': 'checkbox',
  'paramName': 'type',
  'items': [{
    'name': 'Все',
    'paramValue': 'all',
    'checked': true
  }, {
    'name': 'Гибридные',
    'paramValue': 'hybrid',
    'checked': false
  }]
}, {
  'title': 'Доступность',
  'type': 'radio',
  'default': 'any',
  'paramName': 'availability',
  'value': 'any',
  'items': [{
    'name': 'Все',
    'paramValue': 'any'
  }, {
    'name': 'В наличии',
    'paramValue': 'in-stock'
  }, {
    'name': 'Под заказ',
    'paramValue': 'on-request'
  }, {
    'name': 'Распродажа',
    'paramValue': 'sale'
  }]
}, {
  'title': 'Ценовой диапазон',
  'type': 'range',
  'paramName': 'price',
  'units': 'руб.',
  'from': 6,
  'to': 763680,
  'valueFrom': null,
  'valueTo': null,
  'step': 10000
}, {
  'title': 'Женская модель',
  'type': 'radio',
  'paramName': 'attr_207',
  'value': 'any',
  'items': [{
    'name': 'Без разницы',
    'paramValue': 'any'
  }, {
    'name': 'Да',
    'paramValue': 'true'
  }, {
    'name': 'Нет',
    'paramValue': 'false'
  }]
}];

describe('[Component] CatalogFilter', function() {
  it('renders without errors', function() {
      expect(() => render(
        <CatalogFilter
          options={options}
          selectedOptions={[]}
          params={{'categoryId': 5}}
        />

      )).to.not.throw();
  });
});
