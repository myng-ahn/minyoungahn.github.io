function typewrite(element, text, i = 0) {
  if (i === 0) {
    element.textContent = "";
  }

  element.textContent += text[i];

  if (i === text.length - 1) {
    return;
  }

  setTimeout(() => typewrite(element, text, i + 1), 75);
}

const greeting = document.querySelector(".greeting");
text = "Hi, I'm Minyoung";
typewrite(greeting, text);
