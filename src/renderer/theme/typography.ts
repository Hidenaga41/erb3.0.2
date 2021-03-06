import { TypographyOptions } from '@material-ui/core/styles/createTypography';

const typography: TypographyOptions = {
  // useNextVariants: true,
  fontFamily: [
    'Roboto',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  h1: {
    fontSize: '2rem',
    // fontWeight: 600,
    fontWeight: 300,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: '1.75rem',
    // fontWeight: 600,
    fontWeight: 300,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: '1.5rem',
    // fontWeight: 600,
    fontWeight: 300,
    lineHeight: 1.2,
  },
  h4: {
    fontSize: '1.25rem',
    // fontWeight: 600,
    fontWeight: 300,
    lineHeight: 1.2,
  },
  h5: {
    fontSize: '1.125rem',
    // fontWeight: 600,
    fontWeight: 300,
    lineHeight: 1.2,
  },
  h6: {
    fontSize: '1.0625rem',
    // fontWeight: 600,
    fontWeight: 300,
    lineHeight: 1.2,
  },
  body1: {
    fontSize: 14,
  },
  button: {
    textTransform: 'none',
  },
};

export default typography;
