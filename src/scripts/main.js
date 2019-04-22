const themes = [
  {
    hero: {
      color: "#f15f57",
      hue: "3deg",
      saturation: "85%",
      brightness: "128%"
    },
    background: {
      color: "#eff0d1"
    },
    title: {
      color: "#24283d"
    }
  },
  {
    hero: {
      color: "#020202",
      hue: "0deg",
      saturation: "0%",
      brightness: "2%"
    },
    background: {
      color: "#f0f821"
    },
    title: {
      color: "#d5d0cd"
    }
  },
  {
    hero: {
      color: "#efbbd3",
      hue: "332deg",
      saturation: "62%",
      brightness: "168%"
    },
    background: {
      color: "#db4168"
    },
    title: {
      color: "#89267c"
    }
  },
  {
    hero: {
      color: "#7f9183",
      hue: "133deg",
      saturation: "8%",
      brightness: "106%"
    },
    background: {
      color: "#ddd5d0"
    },
    title: {
      color: "#cfc0bd"
    }
  }
];

let currentTheme = 0;

const root = document.documentElement;

root.addEventListener("click", e => {
  const freshThemes = themes.filter((_, i) => i !== currentTheme);
  const newTheme = Math.floor(Math.random() * freshThemes.length);
  const theme = freshThemes[newTheme];

  root.style.setProperty("--hero-color", theme.hero.color);
  root.style.setProperty("--hero-hue", theme.hero.hue);
  root.style.setProperty("--hero-saturate", theme.hero.saturation);
  root.style.setProperty("--hero-brightness", theme.hero.brightness);
  root.style.setProperty("--background-color", theme.background.color);
  root.style.setProperty("--title-color", theme.title.color);

  currentTheme = themes.findIndex(e => e === theme);
});

const arrow = document.querySelector(".scroll-arrow-wrapper");

import enterView from "enter-view";

enterView({
  selector: ".about",
  enter: () => {
    arrow.classList.add("reverse-arrow");
  },
  exit: () => {
    arrow.classList.remove("reverse-arrow");
  },
  offset: 0.5
});
