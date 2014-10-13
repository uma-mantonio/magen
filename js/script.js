$(document).ready(function() {
	$('#assembly-vid').videoBG({
		position: 'fixed',
		zIndex: 0,
		mp4: 'assets/magen.mp4',
		ogv: 'assets/magen.ogv',
		webm: 'assets/magen.webm',
		poster: 'images/magen-poster.jpg',
		loop: true,
		fullscreen: true,
		opacity: 1
	});
})