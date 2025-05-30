import { Geist, Geist_Mono, Poiret_One } from "next/font/google";

// Load the fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poiret_one = Poiret_One({
  variable: "--font-poiret_one",
  subsets: ["latin"],
  weight: ["400"],
});

export { geistSans, geistMono, poiret_one };
