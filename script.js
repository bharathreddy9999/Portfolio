function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
// Typing animation
class TxtRotate {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
  }
  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;
    setTimeout(() => this.tick(), 100);
  }
}
// Initialize
const elements = document.getElementsByClassName('txt-rotate');
for (let el of elements) {
  const toRotate = el.getAttribute('data-rotate');
  new TxtRotate(el, JSON.parse(toRotate), 2000);
}
anime({
  targets: '.skill-item',
  scale: [0.8, 1.2],
  delay: anime.stagger(100),
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutQuad'
});
const aiResponses = {
  "projects": "I used GitHub Copilot to generate 70% of the LSTM code for stock prediction...",
  "prompts": "Example prompt: 'Write Python code for REST API with Flask and JWT auth'"
};