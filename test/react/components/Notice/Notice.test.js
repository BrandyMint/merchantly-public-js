import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import sinon from 'sinon';
import { render } from 'enzyme';
import { expect } from 'chai';
import Notice from '../../../../app/scripts/react/components/Notice';

describe('[Component] Notice', function() {
  beforeEach(function () {
    this.timeout = 3;
    this.onClose = sinon.spy();
    this.clock = sinon.useFakeTimers();
    this.renderedComponent = renderIntoDocument(
      <Notice
        type="success"
        text="Hello, world!"
        timeout={this.timeout}
        onClose={this.onClose}
      />
    );
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('renders without errors', function() {
    expect(() => render(
          <Notice
            type="success"
            text="Hello, world!"
            timeout={this.timeout}
            onClose={this.onClose}
          />)
    ).to.not.throw()
  });

  it.skip('triggers onClose callback after timer has finished', function() {
    this.clock.tick(this.timeout);
    sinon.assert.calledOnce(this.onClose);
  });
});
