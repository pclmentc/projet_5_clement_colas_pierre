// Images deroulantes banner

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]   
// valeurs constantes   
const nombreSlides = slides.length;
const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');


let currentIndex = 0;

// Fonction pour mettre à jour les points indicateurs
function updateDots(index) {
	const _dots = document.querySelectorAll('.dot');
    _dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    });
}
function createDots(){
	
	for (const slide of slides) { // peut etre remplacer par un for classique
		let dot = document.createElement("div"); // creer ton element div
		dot.classList.add('dot'); // tu lui assigne une classe dot
		dots.appendChild(dot); // tu inject la dot dans le container dots
	}
}
// Mettre à jour l'image
	function updateImage(){
    const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ${currentIndex + 1}`;
}
// Mettre à jour le text
function updateText(){
	const tagLine = slides[currentIndex].tagLine;
    document.querySelector('p').innerHTML = tagLine;
}
// les flèches:
arrowLeft.addEventListener("click",()=> {
	// Utilisez l'opérateur modulo (%) pour gérer le défilement circulaire
	currentIndex = (currentIndex - 1 + nombreSlides) % nombreSlides;
	updateDots(currentIndex);
	updateImage();
	updateText();
	console.log (`vous avez cliqué sur la flèche gauche`)
});
arrowRight.addEventListener("click",()=> {
	currentIndex = (currentIndex + 1 ) % nombreSlides;
	updateDots(currentIndex);
	updateImage();
	updateText();
	console.log (`vous avez cliqué sur la flèche droite`)
});

// Mettre à jour l'image initiale
createDots();
updateImage();
updateText();

