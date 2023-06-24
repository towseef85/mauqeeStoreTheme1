import { ThemeDirection, ThemeMode } from "../helpers/AppEnums";

const defaultConfig = {
    locale: {
        languageId: 'english',
        locale: 'en',
        name: 'English',
        icon: 'us',
      },
      direction: ThemeDirection.LTR,
      rtlLocale: ['ar'],
      themeMode: ThemeMode.SEMI_DARK
}

export default defaultConfig;