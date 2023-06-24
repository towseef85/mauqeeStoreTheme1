import React from 'react'
import AppLocale from '../../shared/localization';
import { useLocaleContext } from '../AppContextProviders/LocaleContextProvide';
import {IntlProvider} from 'react-intl';
import { IntlGlobalProvider } from '../helpers/Utils';

export default function AppLocaleProvider(props) {
    const {locale} = useLocaleContext();
    const currentAppLocale = AppLocale[locale.locale];
  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}>
      <IntlGlobalProvider>{props.children}</IntlGlobalProvider>
    </IntlProvider>
  )
}
