import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class AppLink extends Component {
  render() {
    const {
      children,
      href,
      hash,
      state,
      ...rest
    } = this.props;

    return this.context.isWidget && hash
      ? (
        <Link {...rest} to={{ pathname: hash, state }}>
          {children}
        </Link>
      )
      : (
        <a {...rest} href={href}>
          {children}
        </a>
      );
  }
}

AppLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  href: PropTypes.string.isRequired,
  hash: PropTypes.string,
  state: PropTypes.object,
};

AppLink.contextTypes = {
  isWidget: PropTypes.bool,
};

AppLink.defaultProps = {
};

export default AppLink;
