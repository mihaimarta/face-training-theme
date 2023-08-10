import { createTheme } from '@material-ui/core/styles';
import { DarkTheme } from './themes/index';
import 'typeface-roboto';

const primary = '#0068A9';
const typography = {
  useNextVariants: true,
  htmlFontSize: 18,
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  subtitle2: {
    fontWeight: 600,
  },
};

const MuiButton = { root: { borderRadius: 0 } };
const MuiTableCell = { head: { fontWeight: 600 } };
const VdtQueryEntry = { queryGroup: { borderRadius: 0 } };
const overrides = { MuiButton, MuiTableCell, VdtQueryEntry };

export const light = createTheme({
  typography,
  overrides,
  palette: {
    type: 'light',
    primary: {
      main: primary,
    },
    background: {
      default: '#f7f7f7',
    },
    secondary: {
      main: primary,
    },
  },
});

export const dark = createTheme(DarkTheme);

export default {
  light,
  dark,
};
