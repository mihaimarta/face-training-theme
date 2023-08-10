import fontProps from './Fonts';

export default (color) => {
  return {
    marginBottom: -30,
    zIndex: '5',
    backgroundColor: color.filterPanel,
    fontFamily: fontProps.typography.fontFamily,
    '& .CalendarMonth, & .CalendarMonthGrid, & .DayPicker__horizontal, .CalendarDay__default, & .DayPickerNavigation_button__default, & .CalendarMonth_caption, & .DayPicker_weekHeader': {
      background: color.elementBackgroundColor,
      color: color.fontColorPrimary,
    },
    '& .DayPicker__withBorder': {
      boxShadow: `0px 2px 8px 0px ${color.boxShadow}`,
    },
    '& .CalendarDay__selected': {
      background: color.arvatoBlue,
      color: color.fontColorPrimary,
      borderColor: color.arvatoBlue,
    },
    '& .CalendarDay__blocked_out_of_range': {
      border: '1px solid #e4e7e7',
      color: color.fontColorSecondary,
    },
  };
};
