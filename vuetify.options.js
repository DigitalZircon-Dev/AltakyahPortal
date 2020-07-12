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

            /*=== Our  COLORS ===*/
            stc_color_purple: '#4f008c',
            stc_color_purple_dark: '#420076',
            stc_color_coral: '#ff375e',
            stc_color_air: '#f3f3f1',
            stc_color_silver: '#8e9aa0',
            stc_color_onyx: '#1d252d',
            stc_color_sunlight: '#ffdd40',
            stc_color_sunsetlight: '#ff6a39',
            stc_color_moonlight: '#a54ee1',
            stc_color_oasislight: '#00c48c',
            stc_color_half: 'hsla(0, 0%, 100%, 0.5)',
            stc_color_white: 'hsla(0, 0%, 100%, 1)',
            stc_color_border: '#ddd',
            stc_color_mtea: '#eff3f6',


            /*=== Vuetify Light COLORS ===*/
            primary: '#4f008c',
            secondary: '#3f0070',
            accent: '#f3f3f1',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107'


          },
          dark: {
             /*=== Our COLORS ===*/
             stc_color_purple: '#4f008c',
             stc_color_purple_dark: '#420076',
             stc_color_coral: '#ff375e',
             stc_color_air: '#f3f3f1',
             stc_color_silver: '#8e9aa0',
             stc_color_onyx: '#1d252d',
             stc_color_sunlight: '#ffdd40',
             stc_color_sunsetlight: '#ff6a39',
             stc_color_moonlight: '#a54ee1',
             stc_color_oasislight: '#00c48c',
             stc_color_half: 'hsla(0, 0%, 100%, 0.5)',
             stc_color_white: 'hsla(0, 0%, 100%, 1)',
             stc_color_border: '#ddd',


             /*=== Vuetify Dark COLORS ===*/
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
