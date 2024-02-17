import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: ['light', 'dark', "cupcake", "halloween"],
  },
  theme: {
    screens: {
      xs: '460px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        pretendard100: 'Pretendard-thin',
        pretendard200: 'Pretendard-extraLight',
        pretendard300: 'Pretendard-light',
        pretendard: 'Pretendard',
        pretendard500: 'Pretendard-medium',
        pretendard600: 'Pretendard-semiBold',
        pretendard700: 'Pretendard-bold',
        pretendard800: 'Pretendard-extraBold',
        pretendard900: 'Pretendard-black',
      },
      colors: {
        black1: '#212529',

        blue1: '#5383E8',
        blue2: '#28344E',
        blue3: '#3C5A99',
        blue4: '#1EA1F7',

        gray1: '#ffffff',
        gray2: '#B3CDFF',
        gray3: '#9AA4AF',
        gray4: '#EBEEF1',
        gray5: '#F5F5F5',
        gray6: '#758592',
        gray7: '#C3CBD1',

        gray8: '#DBE0E4',
        gray9: '#EBEEF1',
        gray10: '#57646F',
        gray11: '#7b858e',
        gray12: '#F3F5F7',
        gray13: '#DDDFE4',
        gray14: '#7B858B',
        gray15: '#E9EDEF',
      },
    },
  },
  plugins: [],
}
export default config
