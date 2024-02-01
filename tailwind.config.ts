import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
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
        pretendard: 'Pretendard, noto-sans'
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
