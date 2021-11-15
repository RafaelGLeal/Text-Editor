window.addEventListener("load", (focusText) => {
  const textArea = document.querySelector(".form-control");
  textArea.focus();
});

function updateText() {
  const getText = document.getElementById("text-input").value;
  const updatedText = (document.getElementById("text-output").innerText =
    getText);
  const bold = document
    .getElementById("bold")
    .addEventListener("click", makeBold);
  const italic = document
    .getElementById("italic")
    .addEventListener("click", makeItalic);
  const underline = document
    .getElementById("underline")
    .addEventListener("click", makeUnderline);
  const leftAlign = document
    .getElementById("left-align")
    .addEventListener("click", alignText.left);
  const centerAlign = document
    .getElementById("center-align")
    .addEventListener("click", alignText.center);
  const rightAlign = document
    .getElementById("right-align")
    .addEventListener("click", alignText.right);
  return updatedText;
}

function makeBold() {
  document.getElementById("text-output").classList.toggle("bold");
}

function makeItalic() {
  document.getElementById("text-output").classList.toggle("italic");
  return;
}

function makeUnderline() {
  document.getElementById("text-output").classList.toggle("underline");
  return;
}

const alignText = {
  left: function () {
    return (document.getElementById("text-output").style.textAlign = "left");
  },
  right: function () {
    return (document.getElementById("text-output").style.textAlign = "right");
  },
  center: function () {
    return (document.getElementById("text-output").style.textAlign = "center");
  },
};

function activateBtn(btn) {
  const button = document.getElementById(`${btn}`).classList.toggle("btn-dark");
}

function changeFont(font) {
  switch (font) {
    case "0":
      document.getElementById("text-output").style.fontFamily =
        "Montserrat,sans-serif";
      break;
    case "1":
      document.getElementById("text-output").style.fontFamily =
        "Oswald,sans-serif";
      break;
    case "2":
      document.getElementById("text-output").style.fontFamily =
        "Roboto,sans-serif";
      break;
    case "3":
      document.getElementById("text-output").style.fontFamily =
        "Ubuntu,sans-serif";
      break;
  }
}

//Copiar para Clip-board

var clipboard = new ClipboardJS(".btn");

clipboard.on("success", function (e) {
  console.info("Action:", e.action);
  console.info("Text:", e.text);
  console.info("Trigger:", e.trigger);

  e.clearSelection();
});

clipboard.on("error", function (e) {
  console.error("Action:", e.action);
  console.error("Trigger:", e.trigger);
});
