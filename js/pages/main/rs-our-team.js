
/* ====================================
Инициализация слайдера в блоке rs-our-team__slider
==================================== */
function initOurteamSliders() {
	if (document.querySelector('.rs-our-team__slider')) {
		const productSliders = document.querySelectorAll('.rs-our-team__slider');
		productSliders.forEach(productSlider => {
			'use strict';
			const breakpoint = window.matchMedia('(min-width:1601px)');
			let ourteamSlider;
			const breakpointChecker = function () {
				if (breakpoint.matches === true) {
					if (ourteamSlider !== undefined) ourteamSlider.destroy(true, true);
					return;
				} else if (breakpoint.matches === false) {
					return enableSwiper();
				}
			};

			const enableSwiper = function () {
				ourteamSlider = new Swiper(productSlider, {
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
						el: '.rs-our-team__pagination',
						clickable: true,
						dynamicBullets: true,
					},

					// Брейкпоинты(адаптив)
					// Шрина экрана
					breakpoints: {
						320: {
							slidesPerView: 1.2,
							spaceBetween: 15,
							centeredSlides: true,
						},
						540: {
							slidesPerView: 2,
							spaceBetween: 30,
							centeredSlides: false,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 30,
							centeredSlides: false,
						},
						1170: {
							slidesPerView: 4,
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
	initOurteamSliders();
});