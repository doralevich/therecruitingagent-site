import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // The red the brackets are drawn in, #D72B2B, is the brand. Unlike the sibling sites
        // this wordmark ships as a raster rather than an Illustrator SVG, so the value is
        // sampled off the flat interior of a bracket stroke rather than read out of a fill
        // attribute - the antialiased edges around it are hundreds of near-reds and would give a
        // different answer.
        //
        // Same two-tone problem the CFO site has, for the same reason: at 51% lightness this red
        // is legible on the light grounds and vibrates against the near-black one. So `brand` is
        // the wordmark colour and `brand-tint` is the same hue lifted, which is what the dark
        // sections use.
        brand: {
          DEFAULT: "#D72B2B",
          dark: "#941C1C",
          tint: "#E07B7B",
        },
        // The dark ground carries a trace of the brand hue rather than being neutral black, so
        // the red sits on something rather than beside it.
        ground: "#1C0B0B",
        cream: "#F6F1F1",
        ink: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;
