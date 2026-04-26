document.addEventListener("DOMContentLoaded", () => {

    // ================= REVEAL ANIMATION =================
    function revealOnScroll() {
        const reveals = document.querySelectorAll(".reveal");

        reveals.forEach((el) => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();


    // ================= NAVBAR SCROLL =================
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });


    // ================= HAMBURGER MENU =================
    const toggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("menu");

    if (toggle && navMenu) {
        toggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        // auto close saat klik menu
        const links = document.querySelectorAll("#menu a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }


    // ================= ABOUT SLIDER =================
    const aboutSlides = document.querySelectorAll(".bg-slide");
    let aboutIndex = 0;

    if (aboutSlides.length > 0) {
        setInterval(() => {
            aboutSlides[aboutIndex].classList.remove("active");
            aboutIndex = (aboutIndex + 1) % aboutSlides.length;
            aboutSlides[aboutIndex].classList.add("active");
        }, 4000);
    }


    // ================= CONTACT FORM =================
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMsg");

    if (form && successMsg) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            successMsg.classList.add("show");
            form.reset();

            setTimeout(() => {
                successMsg.classList.remove("show");
            }, 3000);
        });
    }


    // ================= ABOUT LINE SCROLL GLOW =================
    const aboutText = document.querySelector(".about-text");

    if (aboutText) {
        let timeout;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    window.addEventListener("scroll", handleScroll);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(aboutText);

        function handleScroll() {
            aboutText.classList.add("scrolling");

            clearTimeout(timeout);
            timeout = setTimeout(() => {
                aboutText.classList.remove("scrolling");
            }, 200);
        }
    }

});
