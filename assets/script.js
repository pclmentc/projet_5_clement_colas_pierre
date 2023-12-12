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
const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot'); 

let currentIndex = 0;


// les flèches: 

arrowLeft.addEventListener("click",()=> {
	currentIndex = (currentIndex - 1)
	console.log ("vous avez cliqué sur la flèche gauche")
});

arrowRight.addEventListener("click",()=> {
	currentIndex = (currentIndex + 1)
	console.log ("vous avez cliqué sur la flèche droite")
});
