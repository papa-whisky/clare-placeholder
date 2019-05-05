import enterView from "enter-view";
import { polyfill } from "seamless-scroll-polyfill";
polyfill();

const arrow = document.querySelector(".scroll-arrow-wrapper");
const about = document.querySelector(".about");
const title = document.querySelector(".title");

function scrollPage(e) {
  if (e.target.classList.contains("reverse-arrow")) {
    title.scrollIntoView({ behavior: "smooth" });
  } else {
    about.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

export default () => {
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

  arrow.onclick = scrollPage;
};
