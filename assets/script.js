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
//slides.forEach((slide, index) => {
//    console.log("Diapositive " + index + " : ", slide);
//}); // pour verifier dans l'inspecteur que chaques image est recuperer

document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.querySelector('.arrow_left');
    const rightArrow = document.querySelector('.arrow_right');
    let currentIndex = 0;

    leftArrow.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateSlide(currentIndex);
        updateDots(currentIndex);
    });

    rightArrow.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide(currentIndex);
        updateDots(currentIndex);
    });

    function updateSlide(index) {
        const bannerImg = document.querySelector('.banner-img');
        bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
        const tagline = document.querySelector('#banner p');
        tagline.innerHTML = slides[index].tagLine;
    }

    function updateDots(currentIndex) {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('dot_selected');
            } else {
                dot.classList.remove('dot_selected');
            }
        });
    }
});


