const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");
const bannerText = banner.querySelector("p");
const bannerSlide = document.getElementById("banner-slide");

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentSlide = 0; // initialise la variable currentSlide indiquant que la première diapositive est celle actuellement affichée
updateActiveDot(); // Et appel cette fonction, pour mettre à jour visuellement les points indicateurs

/* Functions */

function updateActiveDot() {
  dots.forEach((dot, index) => {
    dot.classList.remove("dot_selected");
    if (index === currentSlide) {
      dot.classList.add("dot_selected");
    }
  });
}

/* "forEach" parcourt chaque puce et supprime la classe "dot_selected".
La classe "dot_selected" est ajoutée uniquement à la puce correspondant à la diapositive actuelle. */

function showNextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // "%" est utilisé pour gérer la boucle du carrousel
  bannerSlide.src = "./assets/images/slideshow/" + slides[currentSlide].image;
  bannerText.innerHTML = slides[currentSlide].tagLine;
  updateActiveDot();
}

function showPreviousSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  bannerSlide.src = "./assets/images/slideshow/" + slides[currentSlide].image;
  bannerText.innerHTML = slides[currentSlide].tagLine;
  updateActiveDot();
}

/* EventListerner on arrows */

leftArrow.addEventListener("click", showPreviousSlide);
rightArrow.addEventListener("click", showNextSlide);
