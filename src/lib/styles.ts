export const Fonts = {
  Black: 'HelveticaNeueCyr-Black',
  Bold: 'HelveticaNeueCyr-Bold',
  Heavy: 'HelveticaNeueCyr-Heavy',
  Light: 'HelveticaNeueCyr-Light',
  Medium: 'HelveticaNeueCyr-Medium',
  Roman: 'HelveticaNeueCyr-Roman',
  Thin: 'HelveticaNeueCyr-Thin',
  UltraLight: 'HelveticaNeueCyr-UltraLight',
};

export const text = (
  fontFamily: string,
  fontSize: number,
  lineHeight: number,
  color: string,
) => ({ fontFamily, fontSize, lineHeight, color });
