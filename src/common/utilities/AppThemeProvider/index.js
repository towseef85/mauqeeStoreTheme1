import React, {useEffect} from 'react';
import {ConfigProvider} from 'antd';
import AppLocale from '../../shared/localization';
import {useLayoutContext} from '../AppContextProviders/LayoutContextProvider';
import {useLocaleContext} from '../AppContextProviders/LocaleContextProvide';

const AppThemeProvider = (props) => {
  const {direction} = useLayoutContext();
  const {locale} = useLocaleContext();

  const {antLocale} = AppLocale[locale.locale];

  useEffect(() => {
    document.body.setAttribute('dir', direction);
  }, [direction]);

  return (
    <ConfigProvider theme={{
      token:{
        colorText:'#666'
      }
    }} direction={direction} locale={antLocale}>
      {props.children}
    </ConfigProvider>
  );
};

export default React.memo(AppThemeProvider);