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

	/*========== MOUSE WHEEL SCROLL ==========*/
	//Set each section's height equals to the window height
	$('section').height($(window).height());

	//Set the class 'active' to the first element this will serve as our indicator
	$('section').first().addClass('active');

	//Handle the mousewheel event together withDOMMouseScroll to work on cross browser
	$(document).on('mousewheel DOMMouseScroll', function (e) {
		//Prevent the default mousewheel scrolling
		e.preventDefault(); 
		var active = $('section.active');

		//Get the delta to determine the mousewheel scrol UP and DOWN
		var delta = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1;

		// If the delta value is negative, the user is scrolling down
		if (delta < 0) {
			// Mousewheel down handler
			next = active.next();

			// Check if the next section exist and animate the anchoring
			if (next.length) {
				// SetTimeout is here to prevent the scrolling animation to jump to the topmost or bottom when the user scrolled very fast.
				var timer = setTimeout(function () {
					// Animate the scrollTop by passing the elements offset top value
					$('body, html').animate({
						scrollTop: next.offset().top
					}, 'slow');

					//Move the indicator 'active' class
					next.addClass('active').siblings().removeClass('active');

					clearTimeout(timer);
				}, 800);
			}
		} else {
			// Mousewheel up handler
			// Similar logic to the mousewheel down handler except that we are animate the anchoring to the previous sibling element
			prev = active.prev();

			if (prev.length) {
				var timer = setTimeout(function () {
					$('body, html').animate({
						scrollTop: prev.offset().top
					}, 'slow');

					prev.addClass('active').siblings().removeClass('active');

					clearTimeout(timer);
				}, 800);
			}
		}
	});
})