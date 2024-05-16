import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
      
        'warmGrey': '#D9D9D9',
        'newBlack': '#000000'
      }
    },
  },
  plugins: [],
} satisfies Config;
