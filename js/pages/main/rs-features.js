
/* ====================================
Инициализация слайдера в блоке rs-features__slider
==================================== */
function initFeaturesSliders() {
	if (document.querySelector('.rs-features__slider')) {
		const productSliders = document.querySelectorAll('.rs-features__slider');
		productSliders.forEach(productSlider => {
			'use strict';
			const breakpoint = window.matchMedia('(min-width: 769px)');
			let featuresSlider;
			const breakpointChecker = function () {
				if (breakpoint.matches === true) {
					if (featuresSlider !== undefined) featuresSlider.destroy(true, true);
					return;
				} else if (breakpoint.matches === false) {
					return enableSwiper();
				}
			};

			const enableSwiper = function () {
				featuresSlider = new Swiper(productSlider, {
					// Автопрокрутка
					autoplay: {
						// Пауза между прокруткой
						delay: 7000,
						// Закончить на последнем слайде
						stopOnLastSlide: false,
						// Отключить после ручного переключения
						disableOnInteraction: false,
					},
					// Обновить свайпер
					// при изменении элементов слайдера
					observer: true,
					// при изменении родительских элементов слайдера
					observeParents: true,
					// при изменении дочерних элементов слайдера
					observeSlideChildren: true,
					// Скорость смены слайдов
					speed: 800,
					// Курсор перетаскивания
					grabCursor: true,
					// Включение/отключение
					// перетаскивание на ПК
					simulateTouch: true,
					// Чувствительность свайпа
					touchRadio: 1,
					// Угол срабатывания свайпа/перетаскивания
					touchAngle: 45,

					// Пагинация
					pagination: {
						el: '.rs-features__pagination',
						clickable: true,
						dynamicBullets: true,
					},

					// Брейкпоинты(адаптив)
					// Шрина экрана
					breakpoints: {
						320: {
							slidesPerView: 1.4,
							spaceBetween: 15,
							centeredSlides: true,
						},
						540: {
							slidesPerView: 2,
							spaceBetween: 30,
							centeredSlides: false,
						},
					},
				});
			};

			breakpoint.addListener(breakpointChecker);
			breakpointChecker();
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initFeaturesSliders();
});