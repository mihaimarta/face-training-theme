import DatePicker from '../common-styles/DatePicker';
import { darkMode } from '../common-styles/Colors';
import fontProps from '../common-styles/Fonts';
import PlusWhite from '../assets/plusWhite.svg';

export const DarkTheme = {
  spacing: 4,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          padding: '0 !important',
          '& .SingleDatePicker_picker': {
            ...DatePicker(darkMode),
          },
          '& *:focus': {
            outline: 'none',
          },
          '& .player-showmore-options': {
            border: '1px solid transparent !important',
            backgroundColor: `${darkMode.elementBackgroundColor} !important`,
            borderRadius: 2,

            '& .player-control-wrapper button:hover': {
              backgroundColor: `${darkMode.selectedElement} !important`,
            },

            '& .player-button': {
              backgroundColor: `${darkMode.elementBackgroundColor} !important`,
            },

            '& .player-dropdown__toggle': {
              backgroundColor: `${darkMode.elementBackgroundColor} !important`,
            },
          },

          '& button': {
            color: darkMode.white,
            '& .player-button__text': {
              minWidth: 25,
              display: 'inline-flex !important',
              alingItems: 'center',
              justifyContent: 'center',
            },
          },

          '& .player-dropdown__menu': {
            border: '1px solid transparent !important',
          },

          '& .player-dropdown__item': {
            color: `${darkMode.white} !important`,
            backgroundColor: `${darkMode.elementBackgroundColor} !important`,

            '&:hover': {
              backgroundColor: `${darkMode.selectedElement} !important`,
            },
          },

          '& .addtoDropzone': {
            '& .button-text': {
              backgroundPosition: 'left center',
              backgroundSize: 'contain',
              backgroundImage: `url(${PlusWhite})!important`,
              backgroundRepeat: 'no-repeat',
              paddingLeft: 25,
            },
          },
        },
      },
    },
    MuiAutocomplete: {
      popper: {
        width: 'auto !important',
        '& li': {
          fontSize: '0.75rem',
          lineHeight: '18px',
          padding: '4px 14px',
          '&:hover': {
            backgroundColor: darkMode.selectedElement,
          },
        },
        '& li[aria-selected="true"]': {
          backgroundColor: darkMode.selectedElement,
        },
      },
      inputRoot: {
        padding: 0,
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        backgroundColor: darkMode.filterPanel,
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        backgroundColor: darkMode.elementBackgroundColor,
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: darkMode.elementBackgroundColor,
      },
    },
    MuiCardHeader: {
      root: {
        backgroundColor: `${darkMode.elementBackgroundColor} !important`,
      },
    },
    MuiTableRow: {
      root: {
        backgroundColor: darkMode.elementBackgroundColor,
        '&:hover': {
          backgroundColor: darkMode.selectedElement,
        },
      },
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: darkMode.selectedElement,
        },
      },
    },

    MuiChip: {
      root: {
        backgroundColor: darkMode.arvatoBlue,
        fontSize: '0.75rem',
        lineHeight: '18px',
        color: darkMode.fontColorPrimary,
        '&.small': {
          height: 24,
          '& svg': {
            height: 16,
            width: 16,
          },
        },
      },
      deleteIcon: {
        color: darkMode.white,
      },
      label: {
        color: darkMode.white,
      },
      deletable: {
        '&:hover, &:focus': {
          backgroundColor: darkMode.arvatoBlue,
        },
      },
    },
    MuiButton: {
      root: {
        minWidth: 36,
        minHeight: 32,
        textTransform: 'uppercase',
        borderRadius: 2,
        transition: 'none',
        boxShadow: 'none',
        '&.Mui-focusVisible': {
          color: darkMode.onHoverTextColor,
        },
      },
      contained: {
        backgroundColor: darkMode.btnGroupColor,
        color: darkMode.white,
        fill: darkMode.white,
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: darkMode.disabledBtnHover, //! not disabled btw. change the naming later,
          boxShadow: 'none',
        },
        '&$disabled': {
          backgroundColor: darkMode.darkGrey,
          color: darkMode.inactiveGrey,
          fill: darkMode.inactiveGrey,
          cursor: 'not-allowed',
        },
      },
      containedPrimary: {
        color: darkMode.white,
        fill: darkMode.white,
        '&:hover': {
          backgroundColor: darkMode.lightBlue,
          color: darkMode.onHoverTextColor,
          fill: darkMode.onHoverTextColor,
        },
      },
      containedSizeSmall: {
        padding: 4,
      },
    },
    MuiSvgIcon: {
      root: {
        color: darkMode.white,
      },
    },
    MuiIconButton: {
      root: {
        borderRadius: 4,
        padding: 8,
        '&.Mui-focusVisible': {
          color: darkMode.onHoverTextColor,
        },
      },
      colorPrimary: {
        color: darkMode.white,
        fill: darkMode.white,
        '&:hover': {
          backgroundColor: darkMode.lightBlue,
          color: darkMode.onHoverTextColor,
          fill: darkMode.onHoverTextColor,
        },
      },
    },
    MuiToggleButton: {
      root: {
        color: darkMode.inactiveGrey,
        fill: darkMode.inactiveGrey,
        borderRadius: '4px !important',
        margin: 'auto 2px !important',
        height: '100%',
        borderColor: 'transparent',
        textTransform: 'Capitalize',
        '&.Mui-focusVisible': {
          color: darkMode.onHoverTextColor,
        },
        '&.Mui-selected': {
          backgroundColor: darkMode.arvatoBlue,
          color: darkMode.onHoverTextColor,
          fill: darkMode.onHoverTextColor,
        },
        '&.Mui-disabled': {
          backgroundColor: 'transparent',
          color: darkMode.inactiveGrey,
          fill: darkMode.inactiveGrey,
          cursor: 'not-allowed',
        },
        '&:hover': {
          backgroundColor: `${darkMode.disabledBtnHover} !important`,
          color: darkMode.onHoverTextColor,
          fill: darkMode.onHoverTextColor,
        },
      },
      label: {
        color: 'inherit',
        fill: 'inherit',
      },
    },
    MuiPickerDTToolbar: {
      toolbar: {
        backgroundColor: darkMode.arvatoBlue,
      },
    },
    MuiPickerDTTabs: {
      tabs: {
        backgroundColor: darkMode.arvatoBlue,
      },
    },
    MuiPickersCalendarHeader: {
      dayLabel: {
        color: darkMode.arvatoBlue,
      },
      iconButton: {
        backgroundColor: 'transparent',
      },
    },
  },
  palette: {
    ...darkMode,
    type: 'dark',
    background: {
      default: '#101010',
    },
    text: {
      primary: darkMode.fontColorPrimary,
      secondary: darkMode.fontColorSecondary,
    },
    primary: {
      main: darkMode.arvatoBlue,
      dark: darkMode.darkBlue,
    },
    secondary: {
      main: darkMode.arvatoBlue,
      dark: darkMode.darkBlue,
    },
  },
  ...fontProps,
};

export default DarkTheme;
