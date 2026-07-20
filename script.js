document.addEventListener('DOMContentLoaded', function () {

    // ===== HAMBURGER / MOBILE NAV =====
    var hamburgerBtn = document.getElementById('hamburgerBtn'); //ngambil tombol hambur dari html 
    var navMenu = document.getElementById('navMenu'); //navigation 

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

        // menutup menu pada saat salah satu menu navigasi diklik
        var navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                closeMenu();
            });
        });

        // untuk meenutup menu jika pengguna klik di luar menu
        document.addEventListener('click', function (e) {
            var isClickInsideMenu = navMenu.contains(e.target);
            var isClickOnButton = hamburgerBtn.contains(e.target);
            if (!isClickInsideMenu && !isClickOnButton && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        // pada saat layar berubah ke ukuran desktop, ini tuh untuk menutup menu hamburger
        window.addEventListener('resize', function () {
            if (window.innerWidth > 1024) {
                closeMenu();
            }
        });
    }
});