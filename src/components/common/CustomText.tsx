import React from 'react';
import { Text } from 'react-native';
import { fontWeights, ThemedTextProps, typography } from '@/constants';
import { colors } from '@/constants';
import useThemeStore from '@/stores/themeStore';

/**style, type, variant, color, weight, props가능.. */
function CustomText({
  style,
  type = 'body',
  variant = 'primary',
  weight = 'regular',
  ...props
}: ThemedTextProps) {
  const theme = useThemeStore(state => state.theme);

  const customStyle = {
    fontFamily: fontWeights[weight],
    color: colors[theme][`text_${variant}`],
    ...typography[type],
  };

  return <Text style={[customStyle, style]} {...props} />;
}
export default CustomText;
