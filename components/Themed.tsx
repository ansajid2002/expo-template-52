
import { Text as DefaultText, View as DefaultView } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps  & { fontWeight?: 'light' | 'regular' | 'semibold' | 'bold' }) {
  const { style, lightColor, darkColor, fontWeight = 'regular', ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
 // Map fontWeight prop to the corresponding font
 
 const fontFamilyMap = {
  light: 'customfont-Light',
  regular: 'customfont-Regular',
  semibold: 'customfont-SemiBold',
  bold: 'customfont-Bold',
};
  return  <DefaultText
  style={[{ fontFamily: fontFamilyMap[fontWeight], color }, style]} 
  {...otherProps}
/>
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
