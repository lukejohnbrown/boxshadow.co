const palette = {
  // tailwind CSS color palette https://tailwindcss.com/docs/customizing-colors/
  grey: {
    [100]: "#F7FAFC",
    [200]: "#EDF2F7",
    [300]: "#E2E8F0",
    [400]: "#CBD5E0",
    [500]: "#A0AEC0",
    [600]: "#718096",
    [700]: "#4A5568",
    [800]: "#2D3748",
    [900]: "#1A202C",
  },
  black: "#333333",
  primary: "#12664F",
  error: "#900000",
}

const sizes = ["640px", "768px", "1024px", "1280px", "1420px", "1650px"]
const breakpoints =  {
  up: {
    xs: `(min-width: ${sizes[0]})`,
    sm: `(min-width: ${sizes[1]})`,
    md: `(min-width: ${sizes[2]})`,
    lg: `(min-width: ${sizes[3]})`,
    xl: `(min-width: ${sizes[4]})`,
    xxl: `(min-width: ${sizes[5]})`,
  },
  down: {
    xs: `(max-width: ${sizes[0]})`,
    sm: `(max-width: ${sizes[1]})`,
    md: `(max-width: ${sizes[2]})`,
    lg: `(max-width: ${sizes[3]})`,
    xl: `(max-width: ${sizes[4]})`,
    xxl: `(max-width: ${sizes[5]})`,
  }
}
const space = ["0.25rem", "0.5rem", "0.75rem", "1rem", "1.5rem", "2rem", "3rem", "4rem", "6rem", "8rem", "12rem", "16rem", "24rem"];
const fontSize = {
  [-4]: '0.6rem',
  [-3]: '0.7rem',
  [-2]: '0.8rem',
  [-1]: '0.9rem',
  [0]: '1rem',
  [1]: '1.2rem',
  [2]: '1.5rem',
  [3]: '1.8rem',
  [4]: '2.4rem',
  [5]: '3rem',
  [6]: '3.6rem',
}

type Theme = {
  palette: {
    black: string;
    primary: string;
    error: string;
    grey: {
      [key: string]: string,
    },
  },
  breakpoints: {
    up: {
      xs: string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
    },
    down: {
      xs: string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
    }
  }
  space: string[];
  fontSize: {
    [key: string]: string,
  }
}

const theme: Theme = {
  palette,
  breakpoints,
  space,
  fontSize
}

export default theme;