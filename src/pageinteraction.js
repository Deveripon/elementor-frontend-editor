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
const textFiled = editorBox.querySelector("textarea[name ='text']");
const fontFamily = editorBox.querySelector("select[name ='font-family']");
const fontSize = editorBox.querySelector("input[name ='font-size']");
const fontSizeInput = editorBox.querySelector("input[name ='font-size-input']");
const fontSizeUnit = editorBox.querySelector("select[name ='unit']");
const fontWeight = editorBox.querySelector("select[name ='font-weight']");
const color = editorBox.querySelector("input[name ='color']");
const textAlign = editorBox.querySelector("select[name ='text-align']");
const margin = editorBox.querySelector("input[name ='margin']");
const marginInput = editorBox.querySelector("input[name ='margin-input']");
const marginUnit = editorBox.querySelector("select[name ='margin-unit']");
const padding = editorBox.querySelector("input[name ='padding']");
const paddingInput = editorBox.querySelector("input[name ='padding-input']");

//get all html component
const logoText = document.getElementById("logo-text");
const logoExtension = document.getElementById("logo-extension");
const heroTitle = document.getElementById("hero-title");
const heroDesc = document.getElementById("hero-desc");
const heroButton = document.getElementById("hero-button");
const aboutTitle = document.getElementById("about-title");
const aboutDesc = document.getElementById("about-desc");
const aboutLink = document.getElementById("about-link");
const imgBoxTitle1 = document.getElementById("img-box-title1");
const imgBoxDesc1 = document.getElementById("img-box-desc1");
const imgBoxDesc2 = document.getElementById("img-box-desc2");
const imgBoxTitle2 = document.getElementById("img-box-title2");
const sectionTitle = document.getElementById("section-title");
const sectionDesc = document.getElementById("section-desc");
const serviceTitle1 = document.getElementById("service-title-1");
const serviceTitle2 = document.getElementById("service-title-2");
const serviceTitle3 = document.getElementById("service-title-3");
const serviceTitle4 = document.getElementById("service-title-4");
const serviceDesc1 = document.getElementById("service-desc-1");
const serviceDesc2 = document.getElementById("service-desc-2");
const serviceDesc3 = document.getElementById("service-desc-3");
const serviceDesc4 = document.getElementById("service-desc-4");

function elementorEdit(element) {
  element.addEventListener("mouseover", function (e) {
    element.classList.add("elementor-hover-state-active");
  });
  element.addEventListener("click", function (e) {
    e.preventDefault();
    element.classList.add("elementor-hover-state-active");

    var styles = window.getComputedStyle(element);
    var colorValue = styles.getPropertyValue("font-family");
    console.log(colorValue);
    //text modifications
    textFiled.value = textFiled.value + element.innerText;
    textFiled.addEventListener("input", function (e) {
      let textFieldValue = e.target.value;
      element.innerText = textFieldValue;
    });

    //font Family modifications
    fontFamily.addEventListener("change", function (e) {
      e.preventDefault();
      if (fontFamily.value) {
        element.style.fontFamily = fontFamily.value;
      }
    });

    //font Size Modification
    fontSize.addEventListener("input", function (e) {
      e.preventDefault();
      if (fontSize.value && fontSizeUnit.value) {
        fontSizeInput.value = fontSize.value;
        element.style.fontSize = fontSizeInput.value + fontSizeUnit.value;
      }
    });
    fontSizeInput.addEventListener("input", function (e) {
      e.preventDefault();
      if (fontSizeInput.value && fontSizeUnit.value) {
        fontSize.value = fontSizeInput.value;
        element.style.fontSize = fontSizeInput.value + fontSizeUnit.value;
      }
    });
    fontSizeUnit.addEventListener("change", function (e) {
      e.preventDefault();
      if (fontSizeInput.value && fontSizeUnit.value) {
        element.style.fontSize = fontSizeInput.value + fontSizeUnit.value;
      }
    });
    //font weight modifications
    fontWeight.addEventListener("change", function (e) {
      e.preventDefault();
      if (fontWeight.value) {
        element.style.fontWeight = fontWeight.value;
      }
    });

    //color modifications
    color.addEventListener("input", function (e) {
      e.preventDefault();
      if (color.value) {
        element.style.color = color.value;
      }
    });
    //Allignment Modification
    textAlign.addEventListener("change", function (e) {
      e.preventDefault();
      if (textAlign.value) {
        element.style.textAlign = textAlign.value;
      }
    });

    //margin Modification
    margin.addEventListener("input", function (e) {
      e.preventDefault();
      marginInput.value = margin.value;
      if (margin.value && marginInput.value) {
        element.style.margin = marginInput.value + marginUnit.value;
      }
    });

    marginInput.addEventListener("input", function (e) {
      e.preventDefault();
      margin.value = marginInput.value;
      if (marginInput.value) {
        element.style.margin = marginInput.value + marginUnit.value;
      }
    });

    marginUnit.addEventListener("change", function (e) {
      e.preventDefault();
      if (marginInput.value && marginUnit.value) {
        element.style.margin = marginInput.value + marginUnit.value;
      }
    });

    //Padding Modification
    padding.addEventListener("input", function (e) {
      e.preventDefault();
      paddingInput.value = padding.value;
      if (padding.value && paddingInput.value) {
        element.style.margin = paddingInput.value + paddingUnit.value;
      }
    });

    paddingInput.addEventListener("input", function (e) {
      e.preventDefault();
      padding.value = paddingInput.value;
      if (paddingInput.value) {
        element.style.margin = paddingInput.value + paddingUnit.value;
      }
    });

    paddingUnit.addEventListener("change", function (e) {
      e.preventDefault();
      if (paddingInput.value && paddingUnit.value) {
        element.style.margin = paddingInput.value + paddingUnit.value;
      }
    });
    editorBox.addEventListener(
      ("submit",
      function (e) {
        e.preventDefault();
        sendData(textFieldValue, element.getAttribute("id"));
        textFiled.value = "";
      })
    );
  });
}
document.addEventListener("mouseout", function (e) {
  e.target.classList.remove("elementor-hover-state-active");
});

//invoce functions
elementorEdit(heroTitle);
elementorEdit(heroDesc);
elementorEdit(logoText);
elementorEdit(logoExtension);
elementorEdit(heroButton);
elementorEdit(aboutTitle);
elementorEdit(aboutDesc);
elementorEdit(aboutLink);
elementorEdit(imgBoxTitle1);
elementorEdit(imgBoxDesc1);
elementorEdit(imgBoxDesc2);
elementorEdit(imgBoxTitle2);
elementorEdit(sectionTitle);
elementorEdit(sectionDesc);
elementorEdit(serviceTitle1);
elementorEdit(serviceTitle2);
elementorEdit(serviceTitle3);
elementorEdit(serviceTitle4);
elementorEdit(serviceDesc1);
elementorEdit(serviceDesc2);
elementorEdit(serviceDesc3);
elementorEdit(serviceDesc4);
