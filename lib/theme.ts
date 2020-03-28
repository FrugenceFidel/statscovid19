import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  screens: {
    tablet: '640px',
    tabletPro: '768px',
    laptop: '1024px',
    desktop: '1280px',
    largeDesktop: '1440px'
  },
  fontSize: {
    '12': '1.2rem',
    '14': '1.4rem',
    '16': '1.6rem',
    '18': '1.8rem',
    '20': '2.0rem',
    '24': '2.4rem',
    '30': '3.0rem',
    '36': '3.6rem',
    '48': '4.8rem',
    '64': '6.4rem'
  },
  borderWidth: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px'
  },
  borderRadius: {
    none: '0',
    sm: '0.2rem',
    default: '0.4rem',
    md: '0.6rem',
    lg: '0.8rem',
    full: '9999px'
  },
  boxShadow: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)'
  },
  opacity: {
    '0': 0,
    '25': 0.25,
    '50': 0.5,
    '75': 0.75,
    '100': 1
  },
  letterSpacing: {
    tighter: '-0.08em',
    tight: '-0.04em',
    normal: '0',
    wide: '0.04em',
    wider: '0.08em',
    widest: '0.16em'
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
    '12': '1.2rem',
    '16': '1.6rem',
    '20': '2rem',
    '24': '2.4rem',
    '28': '2.8rem',
    '32': '3.2rem',
    '36': '3.6rem',
    '40': '4rem'
  },
  zIndex: {
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50
  },
  spacing: {
    s4: '0.4rem',
    s8: '0.8rem',
    s12: '1.2rem',
    s16: '1.6rem',
    s20: '2rem',
    s24: '2.4rem',
    s32: '3.2rem',
    s40: '4rem',
    s48: '4.8rem',
    s64: '6.4rem',
    s80: '8rem',
    s96: '9.6rem',
    s128: '12.8rem',
    s160: '16rem',
    s192: '19.2rem',
    s224: '22.4rem',
    s256: '25.6rem'
  },
  colors: {
    green: {
      primary: '#4caf50'
    },
    black: {
      primary: '#212b36'
    },
    orange: {
      primary: '#f77427'
    },
    yellow: {
      primary: '#eab70e'
    },
    red: {
      primary: '#ec314b'
    },
    grey: {
      primary: '#ebebeb'
    }
  }
};

export default theme;
