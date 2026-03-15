// =============================
// ANIMACION HERO
// =============================
window.addEventListener("load", () => {
  const hero = document.getElementById("hero-content");
  setTimeout(() => {
    hero.classList.remove("opacity-0", "translate-y-10");
  }, 300);
});

// =============================
// COPIAR EMAIL
// =============================
function copyEmail() {
  const email = "sandovalisabela0524@gmail.com";
  navigator.clipboard.writeText(email);
  const message = document.getElementById("copyMessage");
  message.style.opacity = "1";
  setTimeout(() => { message.style.opacity = "0"; }, 2000);
}

// =============================
// ANIMACION SCROLL
// =============================
const reveals = document.querySelectorAll(".reveal, .experiencia-item");

function revealOnScroll() {
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 150;
    if(elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// =============================
// BOTON VOLVER ARRIBA
// =============================
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if(window.scrollY > 400){
    backToTop.style.opacity = "1";
    backToTop.style.pointerEvents = "auto";
  } else {
    backToTop.style.opacity = "0";
    backToTop.style.pointerEvents = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =============================
// CARRUSEL DE PROYECTOS
// =============================
let currentProject = 0;
const projects = document.querySelectorAll(".project-slide");

function showProject(index){
  projects.forEach((p,i) => {
    p.classList.add("hidden");
    if(i === index) p.classList.remove("hidden");
  });
}

function nextProject(){
  currentProject++;
  if(currentProject >= projects.length) currentProject = 0;
  showProject(currentProject);
}

function prevProject(){
  currentProject--;
  if(currentProject < 0) currentProject = projects.length - 1;
  showProject(currentProject);
}

// Animación de scroll para timeline
const timelineItems = document.querySelectorAll('.timeline-item');

function revealTimeline() {
  timelineItems.forEach(item => {
    const windowHeight = window.innerHeight;
    const elementTop = item.getBoundingClientRect().top;
    const revealPoint = 150;
    if (elementTop < windowHeight - revealPoint) {
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealTimeline);
window.addEventListener('load', revealTimeline);

