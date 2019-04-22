import themes from "./themes";

let currentTheme = 0;
const root = document.documentElement;

export default function init() {
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
}
