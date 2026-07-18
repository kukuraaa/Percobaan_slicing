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

    if (teacherItems.length && prevButton && nextButton) {

        var activeIndex = 0;
        teacherItems.forEach(function (item, i) {
            if (item.classList.contains('active')) {
                activeIndex = i;
            }
        });
        function setActiveTeacher(index) {
            teacherItems.forEach(function (item, i) {
                item.classList.toggle('active', i === index);
            });
            if (teacherWrapper) {
                var target = teacherItems[index];
                target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest'
                });
            }
        }
        prevButton.addEventListener('click', function () {
            activeIndex = (activeIndex - 1 + teacherItems.length) % teacherItems.length;
            setActiveTeacher(activeIndex);
        });

        nextButton.addEventListener('click', function () {
            activeIndex = (activeIndex + 1) % teacherItems.length;
            setActiveTeacher(activeIndex);
        });

        function centerActiveInstantly() {
            if (window.innerWidth <= 1024) {
                var target = teacherItems[activeIndex];
                target.scrollIntoView({
                    behavior: 'auto',
                    inline: 'center',
                    block: 'nearest'
                });
            }
        }
        window.addEventListener('load', centerActiveInstantly);
        window.addEventListener('resize', centerActiveInstantly);
    }
});