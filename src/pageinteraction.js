//responsive menu toggler
const menuToggleButton = document.querySelector(".menu-toggle-button");
const menu = document.querySelector(".navigation ul");
const elementorHoverStateActive = document.querySelector(
  ".elementor-hover-state-active"
);

menuToggleButton.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.toggle("active");
});

//Global element get
const editorBox = document.getElementById("editor-box");
const closeBtn = document.querySelector(".close-button");

//get the hoverd elements
document.addEventListener("mouseover", function (e) {
  let element = e.target;
  // Check if the hovered element should be skipped
  if (element.classList.contains("skip-hover")) {
    return; // Skip this element
  }
  let hoverdElement = e.target.classList.add("elementor-hover-state-active");
  let tagName = element.tagName;

  //show the editor box
  // element.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   editorBox.style.display = "block";
  //   editorBox.style.position = "fixed";
  //   editorBox.style.top = "20px";
  //   editorBox.style.left = "20px";
  //   closeBtn.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     editorBox.style.display = "none";
  //   });
  // });
  //get editor box form element
  const textarea = document.querySelector("textarea");
  const editorForm = document.querySelector("form.editor-form");
  const fontFamily = document.querySelector("select[name='font-family']");
  const fontSize = document.querySelector("input[name='font-size']");
  const fontSizeInput = document.querySelector("input[name='font-size-input']");
  const fontWeight = document.querySelector("select[name='font-weight']");
  const color = document.querySelector("input[name='color']");
  const textAlign = document.querySelector("select[name='text-align']");
  const margin = document.querySelector("input[name='margin']");
  const marginInputBox = document.querySelector("input[name='margin-input']");
  const padding = document.querySelector("input[name='padding']");
  const paddingInputBox = document.querySelector("input[name='padding-input']");
  editorForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (textarea.value) {
      element.innerText = textarea.value;
    }
  });
});

document.addEventListener("mouseout", function (e) {
  let hoverdElement = e.target.classList.remove("elementor-hover-state-active");
});
