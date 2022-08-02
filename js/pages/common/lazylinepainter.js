function initLazyLinePainter() {
	document.onreadystatechange = () => {
		if (document.readyState === 'complete') {
			// Линия под заголовком в банере
			const lineUnderlogo = document.getElementById('line_underlogo');
			const lineUnderlogoPosition = lineUnderlogo.getBoundingClientRect().top;
			let lineUnderlogoPaint = new LazyLinePainter(lineUnderlogo, {
				ease: "easeLinear",
				strokeWidth: 8,
				strokeOpacity: 1,
				strokeColor: "#3943ED",
				strokeCap: "round",
				delay: 300,
			});

			// Линия в форме перед футером
			const flyLine = document.getElementById('fly_line');
			const flyLinePosition = flyLine.getBoundingClientRect().top;
			let flyLinePaint = new LazyLinePainter(flyLine, {
				ease: "easeLinear",
				strokeWidth: 8,
				strokeOpacity: 1,
				strokeColor: "#3943ED",
				strokeCap: "round",
				delay: 300,
				reverse: true
			});

			window.addEventListener('scroll', function () {
				if (window.pageYOffset > lineUnderlogoPosition - window.innerHeight / 0.5) {
					if (!lineUnderlogo.classList.contains('svg-animated')) {
						lineUnderlogo.classList.add('svg-animated')
						lineUnderlogoPaint.paint();
					}
				}

				if (window.pageYOffset > flyLinePosition - window.innerHeight / 0.5) {
					if (!flyLine.classList.contains('svg-animated')) {
						flyLine.classList.add('svg-animated')
						flyLinePaint.paint();
					}
				}
			});

			// const svgItems = document.querySelectorAll('.svg-init');
			// svgItems.forEach(svg => {
			// 	const svgPosition = svg.getBoundingClientRect().top;
			// 	let svgPaint = new LazyLinePainter(svg, { "ease": "easeLinear", "strokeWidth": 8, "strokeOpacity": 1, "strokeColor": "#3943ED", "strokeCap": "round", "delay": 300 });
			// 	window.addEventListener('scroll', function () {
			// 		if (window.pageYOffset > svgPosition - window.innerHeight / 2) {
			// 			if (!svg.classList.contains('svg-animated')) {
			// 				svg.classList.add('svg-animated')
			// 				svgPaint.paint();
			// 			}
			// 		}
			// 	});
			// });
		}
	}
}
if (document.querySelector('.svg-init')) {
	initLazyLinePainter()
}