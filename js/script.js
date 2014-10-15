$(document).ready(function() {
	// Load videos for each section
	$('#assembly-vid').videoBG({
		zIndex: 0,
		mp4: 'assets/magen.mp4',
		ogv: 'assets/magen.ogv',
		webm: 'assets/magen.webm',
		poster: 'images/magen-poster.jpg',
		loop: true,
		scale: true,
		opacity: 1
	});
})