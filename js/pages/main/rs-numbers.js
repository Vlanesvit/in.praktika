function numCounter() {
	const counters = document.querySelectorAll('.rs-numbers__counter');

	counters.forEach(counter => {
		const counterPosition = counter.getBoundingClientRect().top;
		const counterNum = counter.querySelector('span');

		let start = +counterNum.innerHTML, end = +counterNum.dataset.counter;

		window.addEventListener('scroll', function onScroll() {
			if (window.pageYOffset > counterPosition - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval = setInterval(function () {
					counterNum.innerHTML = ++start;
					if (start == end) {
						clearInterval(interval);
					}
				}, 10);
			}
		});
	})
}
if (document.querySelector('.rs-numbers__counter')) {
	numCounter()
}