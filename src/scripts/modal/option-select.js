export default function optionSelect() {
  const font = document.querySelectorAll(".option-font");
  const color = document.querySelectorAll(".option-color");

  function addClickListener(options) {
    options.forEach((e) => {
      e.addEventListener("click", (option) => {
        options.forEach((e) => e.classList.remove("selected"));
        option.target.classList.add("selected");
      });
    });
  }

  addClickListener(font);
  addClickListener(color);
}