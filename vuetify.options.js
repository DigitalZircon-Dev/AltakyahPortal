import colors from 'vuetify/es5/util/colors'
//import {en, ar} from 'vuetify/es5/locale'
import {en, ar} from '~/i18n'


export default {
    breakpoint: {},
    icons: {},
    lang: {
        locales: { en, ar },
        current: en,
    },
    //rtl: true,
    theme: {
        // dark: true,
        themes: {
          dark: {
            primary: colors.blue.darken2,
            accent: colors.grey.darken3,
            secondary: colors.amber.darken3,
            info: colors.teal.lighten1,
            warning: colors.amber.base,
            error: colors.deepOrange.accent4,
            success: colors.green.accent3
          }
        }
      }
  }