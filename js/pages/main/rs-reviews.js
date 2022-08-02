
// Инициализация слайдера в блоке rs-reviews
function initReviewsSwiper() {
	if (document.querySelector('.rs-reviews__slider')) {
		// Перечень слайдеров

		const reviewsSlider = new Swiper('.rs-reviews__slider', {
			// // Автопрокрутка
			// autoplay: {
			// 	// Пауза между прокруткой
			// 	delay: 10000,
			// 	// Закончить на последнем слайде
			// 	stopOnLastSlide: false,
			// 	// Отключить после ручного переключения
			// 	disableOnInteraction: false,
			// },

			// // Управлениt колесом мыши
			// mousewheel: {
			// 	// Чувствительность колеса мыши
			// 	sensitivity: 1,
			// },

			// Кол-во показываемых слайдов
			slidesPerView: 1,

			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,
			// при изменении родительских элементов слайдера
			observeParents: true,
			// при изменении дочерних элементов слайдера
			observeSlideChildren: true,

			// Скорость смены слайдов
			speed: 400,

			// Включение/отключение
			// перетаскивание на ПК
			simulateTouch: true,
			// Чувствительность свайпа
			touchRadio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,

			pagination: {
				el: '.rs-reviews__pagination',
				clickable: true,
				type: 'progressbar'
			},

			navigation: {
				nextEl: '.rs-reviews__button-next',
				prevEl: '.rs-reviews__button-prev',
			},


			grabCursor: true,
			effect: 'coverflow',
			coverflowEffect: {
				rotate: 0,
				stretch: 353,
				depth: 315,
				modifier: 2,
				slideShadows: false,
			},


			// Брейкпоинты(адаптив)
			// Шрина экрана
			breakpoints: {
				320: {
					coverflowEffect: {
						rotate: 0,
						stretch: 100,
						depth: 315,
						modifier: 2,
						slideShadows: false,
					},
				},
				480: {
					coverflowEffect: {
						rotate: 0,
						stretch: 150,
						depth: 315,
						modifier: 2,
						slideShadows: false,
					},
				},
				540: {
					coverflowEffect: {
						rotate: 0,
						stretch: 200,
						depth: 315,
						modifier: 2,
						slideShadows: false,
					},
				},
				768: {
					coverflowEffect: {
						rotate: 0,
						stretch: 250,
						depth: 315,
						modifier: 2,
						slideShadows: false,
					},
				},
				992: {
					coverflowEffect: {
						rotate: 0,
						stretch: 300,
						depth: 315,
						modifier: 2,
						slideShadows: false,
					},
				},
				1140: {
					coverflowEffect: {
						rotate: 0,
						stretch: 353,
						depth: 315,
						modifier: 2,
						slideShadows: false,
					},
				}
			},
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initReviewsSwiper();
});

/* ====================================
Инициализация галереи
==================================== */
/*
data-gallery - блок галереи 
data-gallery-item - блок с картинкой
data-src - ссылка на картинку 
*/
if (document.querySelector('[data-gallery]')) {
	const galleries = document.querySelectorAll('[data-gallery]');
	if (galleries.length) {
		let galleyItems = [];
		galleries.forEach(gallery => {
			galleyItems.push({
				gallery,
				galleryClass: lightGallery(gallery, {
					plugins: [lgZoom],
					licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
					selector: '[data-gallery-item]',
					// Скорость
					speed: 800,
					// Отключить кнопку Скачать
					download: false,
					// Надпись под фото (Вывод атрибута alt у img)
					appendSubHtmlTo: false,
				})
			})
		});
	}
}