document.addEventListener('DOMContentLoaded', function () {

    // ===== HAMBURGER / MOBILE NAV =====
    var hamburgerBtn = document.getElementById('hamburgerBtn');
    var navMenu = document.getElementById('navMenu');

    if (hamburgerBtn && navMenu) {

        function openMenu() {
            navMenu.classList.add('active');
            hamburgerBtn.classList.add('active');
            hamburgerBtn.setAttribute('aria-expanded', 'true');
        }

        function closeMenu() {
            navMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        }

        function toggleMenu() {
            if (navMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        hamburgerBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMenu();
        });

        var navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                closeMenu();
            });
        });

        document.addEventListener('click', function (e) {
            var isClickInsideMenu = navMenu.contains(e.target);
            var isClickOnButton = hamburgerBtn.contains(e.target);
            if (!isClickInsideMenu && !isClickOnButton && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 1024) {
                closeMenu();
            }
        });
    }

    var teacherWrapper = document.querySelector('.teacher-wrapper');
    var teacherItems = document.querySelectorAll('.teacher-wrapper .teacher-item');
    var prevButton = document.querySelector('.arrow-prev');
    var nextButton = document.querySelector('.arrow-next');

    if (teacherWrapper && teacherItems.length && prevButton && nextButton) {

        function scrollTeachers(direction) {
            var firstItem = teacherItems[0];
            var itemWidth = firstItem.getBoundingClientRect().width;
            var wrapperStyle = window.getComputedStyle(teacherWrapper);
            var gap = parseFloat(wrapperStyle.columnGap || wrapperStyle.gap) || 0;

            teacherWrapper.scrollBy({
                left: direction * (itemWidth + gap),
                behavior: 'smooth'
            });
        }

        prevButton.addEventListener('click', function () {
            scrollTeachers(-1);
        });

        nextButton.addEventListener('click', function () {
            scrollTeachers(1);
        });
    }
});