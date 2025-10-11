import React from 'react';
import {Platform, TextStyle} from 'react-native';

import {createText} from '@shopify/restyle';

import {Theme} from '@theme';

export const SRText = createText<Theme>();

type SRTextProps = React.ComponentProps<typeof SRText>;
export interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  bold,
  italic,
  semiBold,
  style,
  ...sRTextProps
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, italic, semiBold);
  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], fontFamily, style]}
      {...sRTextProps}>
      {children}
    </SRText>
  );
}

function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  italic?: boolean,
  semiBold?: boolean,
): TextStyle {
  const isIOS = Platform.OS === 'ios';

  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    if (italic) {
      return isIOS
        ? {fontFamily: 'Satoshi', fontWeight: '700', fontStyle: 'italic'}
        : {fontFamily: $fontFamily.boldItalic};
    }
    return isIOS
      ? {fontFamily: 'Satoshi', fontWeight: '700'}
      : {fontFamily: $fontFamily.bold};
  }

  switch (true) {
    case bold && italic:
      return isIOS
        ? {fontFamily: 'Satoshi', fontWeight: '700', fontStyle: 'italic'}
        : {fontFamily: $fontFamily.boldItalic};
    case bold:
      return isIOS
        ? {fontFamily: 'Satoshi', fontWeight: '700'}
        : {fontFamily: $fontFamily.bold};
    case italic:
      return isIOS
        ? {fontFamily: 'Satoshi', fontStyle: 'italic'}
        : {fontFamily: $fontFamily.italic};
    case semiBold && italic:
      return isIOS
        ? {fontFamily: 'Satoshi', fontWeight: '600', fontStyle: 'italic'}
        : {fontFamily: $fontFamily.mediumItalic};
    case semiBold:
      return isIOS
        ? {fontFamily: 'Satoshi', fontWeight: '600'}
        : {fontFamily: $fontFamily.medium};
    default:
      return isIOS
        ? {fontFamily: 'Satoshi', fontWeight: '400'}
        : {fontFamily: $fontFamily.regular};
  }
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export const $fontFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-Regular',
};
