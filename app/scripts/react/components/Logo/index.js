import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Logo extends Component {
  static propTypes = {
    linkUrl: PropTypes.string.isRequired,
    logoText: PropTypes.string.isRequired,
    logoUrl: PropTypes.string,
    imageAlt: PropTypes.string
  }

  render() {
    const { linkUrl, logoUrl, logoText, imageAlt } = this.props;
    if (!linkUrl) {
      return (
        <span className="b-logo">
          {this.renderContent(logoUrl, logoText, imageAlt)}
        </span>
      );
    }
    return (
      <a href={linkUrl} className="b-logo">
        {this.renderContent(logoUrl, logoText, imageAlt)}
      </a>
    );
  }
  renderContent(logoUrl, logoText, imageAlt) {
    return logoUrl
      ? <img src={logoUrl} className="b-header__logo-img" alt={imageAlt} />
      : <span className="b-logo__text">{logoText}</span>;
  }
}

export default Logo;
