import React, { Fragment, useEffect, useState } from 'react';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import Cookies from 'js-cookie';

import messages from './CookieBanner.messages';

ensureConfig([
  'LMS_BASE_URL',
  'LOGO_TRADEMARK_URL',
], 'Footer component');

const CookieBanner = ({ intl }) => {
  const domain = window.location.hostname.replace('apps', '');

  const [showCookie, setShowCookie] = useState(!!Cookies.get('cookieconsent_status', { domain }));

  const onDismissCookie = () => {
    Cookies.set('cookieconsent_status', 'dismiss', { domain });
    setShowCookie(false);
  };

  return showCookie ? (
    <div className="cookie-banner">
      <div className="content">
        {intl.formatMessage(messages['cookie.banner.content'])}
        <a
          className="learn-more-link"
          href="https://www.cookiesandyou.com/"
          aria-label={intl.formatMessage(messages['cookie.banner.content'])}
        >
          {' '}{intl.formatMessage(messages['cookie.banner.leran.more'])}
        </a>
      </div>
      <button className="dismiss-button" type="button" onClick={onDismissCookie}>
        { intl.formatMessage(messages['cookie.dismiss.button.label']) }
      </button>
    </div>
  ) : <div />;
};

CookieBanner.contextType = AppContext;

CookieBanner.propTypes = {
  intl: intlShape.isRequired,
};

CookieBanner.defaultProps = {};

export default injectIntl(CookieBanner);
