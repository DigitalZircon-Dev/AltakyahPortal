import colors from 'vuetify/es5/util/colors'
//import {en, ar} from 'vuetify/es5/locale'
import {en, ar} from '~/i18n'

let darkMode = false
if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || false
}

const palette = {
  money: {
    primary: colors.green.base, // primary main
    primarylight: colors.green.lighten4, // primary light
    primarydark: colors.green.darken3, // primary dark
    secondary: colors.amber.darken2, // secondary main
    secondarylight: colors.amber.lighten4, // secondary light
    secondarydark: colors.amber.darken4, // secondary dark
    anchor: colors.green.base // link
  }
}

export const theme = {
  ...palette.money
}

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
        dark: darkMode === 'true',
        themes: {
          light: {
            primary: '#4f008c',
            secondary: '#f3f3f1',
            accent: '#f3f3f1',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107'
          },
          dark: {
            primary: '#4f008c',
            secondary: '#3f0070',
            accent: '#f3f3f1',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107'
          }
        },
        options: {
          customProperties: true
        }
      }
  }