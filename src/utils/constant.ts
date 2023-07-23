import { Open_Sans, M_PLUS_Rounded_1c, Red_Hat_Mono } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });
const mPlusRounded1c = M_PLUS_Rounded_1c({ weight: ['400', '700'], subsets: ['latin'] });
const redHatMono = Red_Hat_Mono({ subsets: ['latin'] });

export const FONT_FAMILIES = {
  default: openSans,
  japanese: mPlusRounded1c,
  mono: redHatMono,
};
