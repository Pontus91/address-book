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
  gray: {
    500: '#718096',
    900: '#171923',
  },
}

export { 
  breakpoints,
  fonts,
  themeColors
 };
