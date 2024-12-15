import responsive from '@/utils/responsive';
import { StyleSheet, TextProps } from 'react-native';

export type TextVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'placeholder'
  | 'link'
  | 'success'
  | 'warning'
  | 'error';

export type FontWeight = 'regular' | 'semiBold' | 'bold';

export const fontWeights: Record<FontWeight, string> = {
  regular: 'Pretendard-Regular',
  semiBold: 'Pretendard-SemiBold',
  bold: 'Pretendard-Bold',
};

export type Typography =
  | 'largeTitle'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'headline'
  | 'body'
  | 'callout'
  | 'subhead'
  | 'footnote'
  | 'caption1'
  | 'caption2';

export interface ThemedTextProps extends TextProps {
  variant?: TextVariant;
  type?: Typography;
  weight?: FontWeight;
}

export const typography = StyleSheet.create({
  largeTitle: {
    fontSize: responsive(34),
    lineHeight: responsive(41),
  },
  title1: {
    fontSize: responsive(28),
    lineHeight: responsive(34),
  },
  title2: {
    fontSize: responsive(22),
    lineHeight: responsive(28),
  },
  title3: {
    fontSize: responsive(20),
    lineHeight: responsive(25),
  },
  headline: {
    fontSize: responsive(17),
    lineHeight: responsive(22),
  },
  body: {
    fontSize: responsive(17),
    lineHeight: responsive(22),
  },
  callout: {
    fontSize: responsive(16),
    lineHeight: responsive(21),
  },
  subhead: {
    fontSize: responsive(15),
    lineHeight: responsive(20),
  },
  footnote: {
    fontSize: responsive(13),
    lineHeight: responsive(18),
  },
  caption1: {
    fontSize: responsive(12),
    lineHeight: responsive(16),
  },
  caption2: {
    fontSize: responsive(11),
    lineHeight: responsive(13),
  },
});
