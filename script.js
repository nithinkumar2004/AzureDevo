// Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Typing Effect
const roles = [
  "Cloud Engineer ☁️",
  "Software Developer 💻",
  "AI Enthusiast 🤖",
  "UI/UX Designer 🎨"
];

let i = 0, j = 0;
const typing = document.querySelector('.typing');

function type() {
  if (j < roles[i].length) {
    typing.textContent += roles[i][j++];
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (j > 0) {
    typing.textContent = roles[i].substring(0, --j);
    setTimeout(erase, 50);
  } else {
    i = (i + 1) % roles.length;
    setTimeout(type, 300);
  }
}

type();
