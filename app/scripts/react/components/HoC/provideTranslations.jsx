/*global gon */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import localeLanguages from '../../constants/localeLanguages';

const DEFAULT_LOCALE = 'ru';

const provideTranslations = (WrappedComponent) => {
  let i18n;

  class I18nextProvider extends Component {
    componentWillMount() {
      const locale = this.getLocale();
      const translations = this.getTranslations();

      this.i18n = i18next.createInstance({
        lng: locale,
        fallbackLng: DEFAULT_LOCALE,
        interpolation: {
          prefix: '%{',
          suffix: '}',
        },
        resources: {
          [locale]: {
            translation: translations,
          },
        },
      }, () => {});
    }
    getLocale() {
      const { i18n } = this.props;

      if (i18n && i18n.locale) {
        return i18n.locale;
      }
      if (typeof gon !== 'undefined' && gon.i18n && gon.i18n.locale) {
        return gon.i18n.locale;
      }

      return DEFAULT_LOCALE;
    }
    getTranslations() {
      const { i18n } = this.props;

      if (i18n && i18n.translations) {
        return i18n.translations;
      }
      if (typeof gon !== 'undefined'  && gon.i18n && gon.i18n.translations) {
        return gon.i18n.translations;
      }

      return {};
    }
    render() {
      return (
        <WrappedComponent t={this.i18n.getFixedT()} {...this.props} />
      );
    }
  }

  I18nextProvider.wrapped = WrappedComponent;

  I18nextProvider.propTypes = {
    i18n: PropTypes.shape({
      locale: PropTypes.oneOf(localeLanguages).isRequired,
      translations: PropTypes.object.isRequired,
    }),
  };

  return I18nextProvider;
};

export default provideTranslations;
