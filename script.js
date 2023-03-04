const pages = document.querySelectorAll('.page');
let currentPage = 0;

document.addEventListener('wheel', function(event) {
	if (event.deltaY < 0) {
		if (currentPage > 0) {
			currentPage--;
			scrollToPage(currentPage);
		}
	} else if (event.deltaY > 0) {
		if (currentPage < pages.length - 1) {
			currentPage++;
			scrollToPage(currentPage);
		}
	}
});

function scrollToPage(pageNumber) {
	pages.forEach(function(page, index) {
		if (index === pageNumber) {
			page.classList.add('active');
		} else {
			page.classList.remove('active');
		}
	});
}

const downloadButton = document.querySelector('.download-button');
const form = document.querySelector('form');

downloadButton.addEventListener('click', function(event) {
	event.preventDefault();
	alert('The game is downloading...');
});

form.addEventListener('submit', function(event) {
	event.preventDefault();
	alert('Your message has been sent!');
});

scrollToPage(currentPage);