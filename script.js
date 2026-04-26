// paksa selalu balik ke atas saat reload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

window.addEventListener("load", () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);
});

// ANIMASI SCROLL (REVEAL)
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

// jalan saat scroll
window.addEventListener("scroll", revealOnScroll);

// biar langsung aktif kalau reload di tengah halaman
revealOnScroll();

// HAMBURGER MENU
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// AUTO CLOSE MENU SAAT KLIK
const links = document.querySelectorAll("#menu a");

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const menuLinks = document.querySelectorAll("#menu a");
const menu = document.getElementById("menu");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

//// ABOUT SLIDER AUTO
const aboutSlides = document.querySelectorAll(".bg-slide");
let aboutIndex = 0;

if (aboutSlides.length > 0) {
    setInterval(() => {
        aboutSlides[aboutIndex].classList.remove("active");

        aboutIndex = (aboutIndex + 1) % aboutSlides.length;

        aboutSlides[aboutIndex].classList.add("active");
    }, 4000);
}

// SUBMIT FORM
window.onload = function () {

    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMsg");

    if (!form || !successMsg) {
        console.log("Form atau successMsg tidak ditemukan");
        return;
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        console.log("Form disubmit"); // buat debug

        successMsg.classList.add("show");

        form.reset();

        setTimeout(() => {
            successMsg.classList.remove("show");
        }, 3000);
    });

};

// glow
document.addEventListener("DOMContentLoaded", () => {
    const aboutText = document.querySelector(".about-text");

    if (!aboutText) return;

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
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");

        // optional: delay dikit biar smooth
        document.body.style.overflow = "auto";
    });
});
