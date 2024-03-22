function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { Fragment, useEffect, useState } from 'react';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import Cookies from 'js-cookie';
import messages from './CookieBanner.messages';
ensureConfig(['LMS_BASE_URL', 'LOGO_TRADEMARK_URL'], 'Footer component');
var CookieBanner = function CookieBanner(_ref) {
  var intl = _ref.intl;
  var domain = window.location.hostname.replace('apps', '');
  var _useState = useState(!!Cookies.get('cookieconsent_status', {
      domain: domain
    })),
    _useState2 = _slicedToArray(_useState, 2),
    showCookie = _useState2[0],
    setShowCookie = _useState2[1];
  var onDismissCookie = function onDismissCookie() {
    Cookies.set('cookieconsent_status', 'dismiss', {
      domain: domain
    });
    setShowCookie(false);
  };
  return showCookie ? /*#__PURE__*/React.createElement("div", {
    className: "cookie-banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, intl.formatMessage(messages['cookie.banner.content']), /*#__PURE__*/React.createElement("a", {
    className: "learn-more-link",
    href: "https://www.cookiesandyou.com/",
    "aria-label": intl.formatMessage(messages['cookie.banner.content'])
  }, ' ', intl.formatMessage(messages['cookie.banner.leran.more']))), /*#__PURE__*/React.createElement("button", {
    className: "dismiss-button",
    type: "button",
    onClick: onDismissCookie
  }, intl.formatMessage(messages['cookie.dismiss.button.label']))) : /*#__PURE__*/React.createElement("div", null);
};
CookieBanner.contextType = AppContext;
CookieBanner.propTypes = {
  intl: intlShape.isRequired
};
CookieBanner.defaultProps = {};
export default injectIntl(CookieBanner);
//# sourceMappingURL=CookieBanner.js.map