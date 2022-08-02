/* ====================================
Мобильное меню
==================================== */
const burger = () => {
	const mobileMenu = document.querySelectorAll('.menu');
	const menuMainList = document.querySelectorAll('.menu__list > .dropdown > a > i');
	const menuSubList = document.querySelectorAll('.dropdown-menu > .dropdown > a > i');
	const menuMainItem = document.querySelectorAll('.menu__list > .dropdown');
	const menuSubItem = document.querySelectorAll('.dropdown-menu > .dropdown');
	const menuItems = [...menuMainItem, ...menuSubItem];

	function closeMenuDesk() {
		if (window.innerWidth > 992) {
			menuItems.forEach(item => {
				item.addEventListener('click', function (event) {
					event.stopPropagation();
				});

				document.addEventListener('click', function (e) {
					item.classList.remove('_open');
				});
			});
		}
	}
	closeMenuDesk()
	window.addEventListener('resize', closeMenuDesk)

	mobileMenu.forEach(menu => {
		const burgerBtn = menu.querySelector('.menu__icon');
		const burgerMenuBody = menu.querySelector('.menu__body');

		if (burgerBtn) {
			burgerBtn.addEventListener('click', function () {

				// Закрытие подменю при клинке на бургер
				for (let i = 0; i < menuItems.length; i++) {
					if (menuItems[i].classList.contains('_open')) {
						menuItems[i].classList.remove('_open');
					}
				}

				if (document.querySelector('.search__wrapper').classList.contains('_search-active')) {
					document.querySelector('.search__wrapper').classList.remove('_search-active');
					document.querySelector('.search-hide').classList.remove('_active');
					document.querySelector('.search-show').classList.add('_active');
				}

				// Показать меню
				burgerBtn.classList.toggle('_icon-open');
				burgerMenuBody.classList.toggle('_menu-active');
			});
		}
	});

	// Открытие только одного из выпадающих списков (submenu)
	menuSubList.forEach(menuSubBtn => {
		menuSubBtn.addEventListener('click', (e) => {
			e.preventDefault();
			menuSubList.forEach((subBtn) => {
				if (menuSubBtn === subBtn) {
					subBtn.closest('.dropdown').classList.toggle('_open');
				} else {
					subBtn.closest('.dropdown').classList.remove('_open');
				}
			});
		});
	});

	// Открытие только одного из выпадающих списков (mainmenu)
	menuMainList.forEach(menuMainBtn => {
		menuMainBtn.addEventListener('click', (e) => {
			e.preventDefault();
			menuMainList.forEach((mainBtn) => {
				if (menuMainBtn === mainBtn) {
					mainBtn.closest('.dropdown').classList.toggle('_open');

					for (let i = 0; i < menuSubItem.length; i++) {
						menuSubItem[i].classList.remove('_open')
					}
				} else {
					mainBtn.closest('.dropdown').classList.remove('_open');
				}
			});
		});
	});
}
if (document.querySelectorAll('.menu')) {
	burger()
}

/* ====================================
Отчистка поиска
==================================== */
function searchClear() {
	const searchClear = document.querySelector('.search__clear');
	const searchInput = document.querySelector('.search__input');

	searchInput.addEventListener('input', function (e) {
		searchClear.classList.add('_clear-search-active');
	})

	searchClear.addEventListener('click', function (e) {
		searchInput.value = '';
		searchClear.classList.remove('_clear-search-active')

		setTimeout(function () {
			searchInput.focus()
		}, 100);
	})
}
if (document.querySelector('.search__clear') && document.querySelector('.search__input')) {
	searchClear()
}

/* ====================================
Появление поиска
==================================== */
function search() {
	const searchShow = document.getElementById('search-show')
	const searchHide = document.getElementById('search-hide')
	const search = document.querySelector('.search__wrapper');
	const searchInput = document.querySelector('.search__input');

	searchShow.addEventListener("click", function (e) {
		searchShow.classList.remove('_active');
		searchHide.classList.add('_active');
		search.classList.add('_search-active');

		setTimeout(function () {
			searchInput.focus()
		}, 100);

		if (document.querySelector('.menu__body').classList.contains('_menu-active')) {
			document.querySelector('.menu__body').classList.remove('_menu-active')
			document.querySelector('.menu__icon').classList.remove('_icon-open')
		}
	});

	searchHide.addEventListener("click", function (e) {
		searchHide.classList.remove('_active');
		searchShow.classList.add('_active');
		search.classList.remove('_search-active');
	});
}
window.addEventListener('resize', function () {
	if ((window.innerWidth > 992) && (window.innerWidth < 1451) && (document.querySelector('.search'))) {
		search()
	}
})
window.addEventListener('load', function () {
	if ((window.innerWidth < 1451) && (document.querySelector('.search'))) {
		search()
	}
})

/* ====================================
Шапка при скролле
==================================== */
const onFixedHead = () => {
	const header = document.querySelector('.rs-header');

	function fixBotHead() {
		header.classList.toggle('_menu-fixed', window.scrollY > 0);
	}

	window.addEventListener('scroll', function () {
		fixBotHead()
	})
	window.addEventListener('load', function () {
		fixBotHead()
	})
	window.addEventListener('resize', function () {
		fixBotHead()
	})
}
if (document.querySelector('.rs-header')) {
	onFixedHead()
}
