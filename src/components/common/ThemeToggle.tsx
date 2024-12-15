import { colors } from '@/constants';
import useThemeStore from '@/stores/themeStore';
import React from 'react';
import { Switch } from 'react-native';

interface ThemeToggleProps {}

function ThemeToggle({}: ThemeToggleProps) {
  const { theme, setTheme } = useThemeStore();

  return (
    <Switch
      trackColor={{
        false: colors[theme].inactive,
        true: colors[theme].active,
      }}
      ios_backgroundColor={colors[theme].active}
      thumbColor={colors.white}
      onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      value={theme === 'dark' ? true : false}
    />
  );
}

export default ThemeToggle;
