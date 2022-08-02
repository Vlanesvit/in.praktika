/* ====================================
Параллакс в rs-banner
==================================== */
function bannerParallax() {
	const prlxItems = document.querySelectorAll('.rs-banner .prlx-animated');
	new simpleParallax(prlxItems, {
		maxTransition: 100,
		scale: 2,
		overflow: true,
	});
}
setTimeout(() => {
	if (document.querySelector('.rs-banner .prlx-animated')) {
		bannerParallax()
	}
}, 100);

/* ====================================
Параллакс в rs-services
==================================== */
function servicesParallax() {
	const prlxItems = document.querySelectorAll('.rs-services .prlx-animated');
	new simpleParallax(prlxItems, {
		maxTransition: 50,
		scale: 2,
		overflow: true,
	});
}
setTimeout(() => {
	if (document.querySelector('.rs-services .prlx-animated')) {
		servicesParallax()
	}
}, 100);

/* ====================================
Параллакс в rs-parallax
==================================== */
function parallaxParallax() {
	const prlxItems = document.querySelectorAll('.rs-parallax .prlx-animated');
	new simpleParallax(prlxItems, {
		maxTransition: 40,
		scale: 2,
		overflow: true,
	});
}
setTimeout(() => {
	if (document.querySelector('.rs-parallax .prlx-animated')) {
		parallaxParallax()
	}
}, 100);

/* ====================================
Параллакс в rs-about-us
==================================== */
function aboutusParallax() {
	const prlxItems = document.querySelectorAll('.rs-about-us .prlx-animated');
	new simpleParallax(prlxItems, {
		maxTransition: 50,
		scale: 2,
		overflow: true,
	});
}
setTimeout(() => {
	if (document.querySelector('.rs-about-us .prlx-animated')) {
		aboutusParallax()
	}
}, 100);

/* ====================================
Параллакс в rs-differences
==================================== */
function differencesParallax() {
	const prlxItems = document.querySelectorAll('.rs-differences .prlx-animated');
	new simpleParallax(prlxItems, {
		maxTransition: 50,
		scale: 2,
		overflow: true,
	});
}
setTimeout(() => {
	if (document.querySelector('.rs-differences .prlx-animated')) {
		differencesParallax()
	}
}, 100);

/* ====================================
Параллакс в rs-form
==================================== */
function formParallax() {
	const prlxItems = document.querySelectorAll('.rs-form .prlx-animated');
	new simpleParallax(prlxItems, {
		maxTransition: 50,
		scale: 2,
		overflow: true,
	});
}
setTimeout(() => {
	if (document.querySelector('.rs-form .prlx-animated')) {
		formParallax()
	}
}, 100);
