import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButtonElement = document.querySelector("#menu-toggle");
  const drawerElement = document.querySelector("#drawer");

  hamburgerButtonElement.addEventListener("click", (event) => {
    drawerElement.classList.toggle("open");
    event.stopPropagation();
  });
});
