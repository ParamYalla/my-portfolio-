const text = [
  "Tech Support Engineer",
  "Web Developer",
  "Cloud & Networking Enthusiast",
];

let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (charIndex < text[index].length) {
    typingElement.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();

// ===== DISABLE RIGHT CLICK =====
document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
    return false;
  },
  false,
);

// ===== DISABLE KEYBOARD SHORTCUTS =====
document.addEventListener(
  "keydown",
  function (e) {
    // Disable F12
    if (e.key === "F12") {
      e.preventDefault();
      return false;
    }

    // Disable Ctrl+Shift+I (Inspect)
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      e.preventDefault();
      return false;
    }

    // Disable Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.key === "C") {
      e.preventDefault();
      return false;
    }

    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
      e.preventDefault();
      return false;
    }

    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === "u") {
      e.preventDefault();
      return false;
    }

    // Disable Ctrl+Shift+K (Console - Firefox)
    if (e.ctrlKey && e.shiftKey && e.key === "K") {
      e.preventDefault();
      return false;
    }
  },
  false,
);

// ===== DISABLE INSPECT ELEMENT =====
document.addEventListener(
  "mousedown",
  function (e) {
    if (e.button === 3) {
      e.preventDefault();
      return false;
    }
  },
  false,
);

// ===== DISABLE TEXT SELECTION & COPY =====
document.addEventListener(
  "selectstart",
  function (e) {
    e.preventDefault();
    return false;
  },
  false,
);

document.addEventListener(
  "copy",
  function (e) {
    e.preventDefault();
    return false;
  },
  false,
);

document.addEventListener(
  "cut",
  function (e) {
    e.preventDefault();
    return false;
  },
  false,
);
