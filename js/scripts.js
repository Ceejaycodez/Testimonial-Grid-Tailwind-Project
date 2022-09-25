// * Buttons on first Testimonial
const seeMore1 = document.getElementById('see-more1');
const seeLess1 = document.getElementById('see-less1');

// * Buttons on second Testimonial
const seeMore2 = document.getElementById('see-more2');
const seeLess2 = document.getElementById('see-less2');

// * Content of first Testimonial
const content1 = document.getElementById('content1');

// * Content of secomd Testimonial
const content2 = document.getElementById('content2');

// * Events on first Testimonial
seeMore1.addEventListener('click', showMore);
seeLess1.addEventListener('click', showLess);

// * Events on second Testimonial
seeMore2.addEventListener('click', showMore2);
seeLess2.addEventListener('click', showLess2);

// * funtions for fisrt
function showMore() {
	seeMore1.classList.add('hidden');
	seeLess1.classList.remove('hidden');
	content1.classList.remove('line-clamp-6');
}
function showLess() {
	seeMore1.classList.remove('hidden');
	seeLess1.classList.add('hidden');
	content1.classList.add('line-clamp-6');
}

// *functions for second
function showMore2() {
	seeMore2.classList.add('hidden');
	seeLess2.classList.remove('hidden');
	content2.classList.remove('line-clamp-5');
}
function showLess2() {
	seeMore2.classList.remove('hidden');
	seeLess2.classList.add('hidden');
	content2.classList.add('line-clamp-5');
}
