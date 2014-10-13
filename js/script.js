$(document).ready(function() {
	$('#assembly-vid').videoBG({
		// position: 'fixed',
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

var assemblyVid = document.getElementById('assembly-vid');
var pauseButton = document.querySelector("#pause-button");

function vidFade() {
	assemblyVid.classList.add('stopfade');
}

assemblyVid.addEventListener('ended', function() {
	assemblyVid.pause();
	vidFade();
});

pauseButton.addEventListener("click", function() {
	assemblyVid.classList.toggle("stopfade");
	if(assemblyVid.paused){
		assemblyVid.play();
		pauseButton.innerHTML = "Pause";
	} else {
		assemblyVid.pause();
		pauseButton.innerHTML = "Play";
	}
})