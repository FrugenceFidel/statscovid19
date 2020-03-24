import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    screens?: {
      tablet: string;
      tabletPro: string;
      laptop: string;
      desktop: string;
      largeDesktop: string;
    };
    fontSize?: {
      '12': string;
      '14': string;
      '16': string;
      '18': string;
      '20': string;
      '24': string;
      '30': string;
      '36': string;
      '48': string;
      '64': string;
    };
    borderWidth?: {
      default: string;
      '0': string;
      '2': string;
      '4': string;
      '8': string;
    };
    borderRadius?: {
      none: string;
      sm: string;
      default: string;
      md: string;
      lg: string;
      full: string;
    };
    boxShadow?: {
      xs: string;
      sm: string;
      default: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      inner: string;
      outline: string;
    };
    opacity?: {
      '0': number;
      '25': number;
      '50': number;
      '75': number;
      '100': number;
    };
    letterSpacing?: {
      tighter: string;
      tight: string;
      normal: string;
      wide: string;
      wider: string;
      widest: string;
    };
    lineHeight?: {
      none: number;
      tight: number;
      snug: number;
      normal: number;
      relaxed: number;
      loose: number;
      '12': string;
      '16': string;
      '20': string;
      '24': string;
      '28': string;
      '32': string;
      '36': string;
      '40': string;
    };
    zIndex?: {
      '0': number;
      '10': number;
      '20': number;
      '30': number;
      '40': number;
      '50': number;
    };
    spacing?: {
      s4: string;
      s8: string;
      s12: string;
      s16: string;
      s20: string;
      s24: string;
      s32: string;
      s40: string;
      s48: string;
      s64: string;
      s80: string;
      s96: string;
      s128: string;
      s160: string;
      s192: string;
      s224: string;
      s256: string;
    };
    colors?: {
      [key: string]: {
        primary: string;
      };
    };
  }
}
