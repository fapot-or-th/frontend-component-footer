import React, { Fragment } from 'react';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import Cookies from 'js-cookie';
import messages from './CookieBanner.messages';
ensureConfig(['LMS_BASE_URL', 'LOGO_TRADEMARK_URL'], 'Footer component');
var CookieBanner = function CookieBanner(_ref) {
  var intl = _ref.intl;
  var domain = window.location.hostname.replace('apps', '');
  var cookieConsent = Cookies.get('cookieconsent_status', {
    domain: domain
  });
  var onDismissCookie = function onDismissCookie() {
    return Cookies.set('cookieconsent_status', 'dismiss', {
      domain: domain
    });
  };
  return cookieConsent ? /*#__PURE__*/React.createElement("div", null) : /*#__PURE__*/React.createElement("div", {
    className: "cookie-nanner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("a", {
    className: "learn-more-link",
    href: "https://www.cookiesandyou.com/",
    "aria-label": intl.formatMessage(messages['cookie.banner.content'])
  }, intl.formatMessage(messages['cookie.banner.content'])), /*#__PURE__*/React.createElement("button", {
    className: "dismiss-button",
    type: "button",
    onClick: onDismissCookie
  }, intl.formatMessage(messages['cookie.dismiss.button.label']))));
};
CookieBanner.contextType = AppContext;
CookieBanner.propTypes = {
  intl: intlShape.isRequired
};
CookieBanner.defaultProps = {};
export default injectIntl(CookieBanner);
//# sourceMappingURL=CookieBanner.js.map