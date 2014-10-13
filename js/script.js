$(document).ready(function() {
	$('#assembly-vid').videoBG({
		// position: 'fixed',
		zIndex: 0,
		mp4: 'assets/magen.mp4',
		ogv: 'assets/magen.ogv',
		webm: 'assets/magen.webm',
		poster: 'images/magen-poster.jpg',
		loop: false,
		scale: true,
		opacity: 1
	});

	var pause = document.getElementsByTagName("video").pause();
	var play = document.getElementsByTagName("video").play();

	function playVid() {
		play;
	}

	function pauseVid() {
		pause;
	}
})