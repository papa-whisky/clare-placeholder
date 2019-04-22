import enterView from "enter-view";

const arrow = document.querySelector(".scroll-arrow-wrapper");

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
};
