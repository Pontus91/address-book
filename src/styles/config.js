/**
 * Responsive Breakpoints
 */
 const breakpoints = {
  xxs: '20rem',        // 320px (iPhone SE)
  xs: '23.4375rem',    // 375px (iPhone)
  s: '25.625rem',      // 410px (Pixel)
  sm: '40rem',         // 640px
  m: '48rem',          // 768px (iPad)
  l: '64rem',          // 1024px (iPad Pro)
  xl: '75rem',         // 1200px
  xxl: '90rem',        // 1440px
  xxxl: '120rem',      // 1920px
}

/**
 * Fonts
 */
const fonts = {
  body: 'Roboto, sans-serif',
  heading: 'Montserrat, sans-serif',
}

/**
 * Palette
 */
const themeColors = {
  white: {
    500: '#fff',
  },
  black: {
    400: '#505050',
    500: '#111'
  },
  pink: {
    100: '#f9f9f9',
    200: '#f3f3f3'
  },
  gray: {
    100: '#ebebeb',
    500: '#718096',
    900: '#171923',
  },
  shadows: {
    primary: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    secondary: '#17192354',
  }
}

export { 
  breakpoints,
  fonts,
  themeColors
 };
