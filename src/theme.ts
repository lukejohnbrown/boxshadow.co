const palette = { // tailwind CSS color palette https://tailwindcss.com/docs/customizing-colors/
  grey: {
    [100]: "#F7FAFC",
    [200]: "#EDF2F7",
    [300]: "#E2E8F0",
    [400]: "#CBD5E0",
    [500]: "#A0AEC0",
    [600]: "#718096",
    [700]: "#4A5568",
    [800]: "#2D3748",
    [900]: "#1A202C"
  },
  blue: {
    [100]: "#EBF8FF",
    [200]: "#BEE3F8",
    [300]: "#90CDF4",
    [400]: "#63B3ED",
    [500]: "#4299E1",
    [600]: "#3182CE",
    [700]: "#2B6CB0",
    [800]: "#2C5282",
    [900]: "#2A4365"
  }
}

const breakpoints =  ["640px", "768px", "1024px", "1280px", "1420px"]
const space = ["0.25rem", "0.5rem", "0.75rem", "1rem", "1.5rem", "2rem", "3rem", "4rem", "6rem", "8rem", "12rem", "16rem", "24rem"]

type Theme = {
  palette: {
    blue: {
      [key: string]: string,
    },
    grey: {
      [key: string]: string,
    },
  },
  breakpoints: string[],
  space: string[]
}

const theme: Theme = {
  palette,
  breakpoints,
  space
}

export default theme;