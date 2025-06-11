import {useTheme} from '@/theme';
import React from 'react';
import {StatusBar as StatusBarRN} from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const supportedStyles = {
  'light-content': 'light-content',
  'dark-content': 'dark-content',
} as const;

interface IStatusBar {
  barStyle?: keyof typeof supportedStyles;
  backgroundColor?: string;
}

const StatusBar = ({barStyle, backgroundColor}: IStatusBar) => {
  const {theme, colors} = useTheme();
  if (!barStyle) {
    barStyle = 'light-content';
    if (theme === 'light') {
      barStyle = 'dark-content';
    }
  }
  return (
    <StatusBarRN
      backgroundColor={backgroundColor ?? colors.surfaceNeutral}
      barStyle={barStyle}
      animated
    />
  );
};

export default StatusBar;
