/*=====================================
ANIMACIONES AL HACER SCROLL
=====================================*/

const elementos = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.2

});

elementos.forEach((elemento) => {

    observer.observe(elemento);

});


/*=====================================
HEADER AL HACER SCROLL
=====================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(7,17,31,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(7,17,31,.75)";
        header.style.boxShadow = "none";

    }

});


/*=====================================
MODO OSCURO / CLARO
=====================================*/

const botonTema = document.getElementById("theme-toggle");

if (botonTema) {

    const temaGuardado = localStorage.getItem("tema");

    if (temaGuardado === "light") {

        document.body.classList.add("light");
        botonTema.textContent = "☀️";

    }

    botonTema.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            localStorage.setItem("tema", "light");
            botonTema.textContent = "☀️";

        } else {

            localStorage.setItem("tema", "dark");
            botonTema.textContent = "🌙";

        }

    });

}


/*=====================================
MENU HAMBURGUESA
=====================================*/

const menu = document.querySelector("nav");
const botonMenu = document.querySelector(".menu-toggle");

if (botonMenu) {

    botonMenu.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}


document.querySelectorAll("nav a").forEach((link) => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


/*=====================================
PARALLAX HERO
=====================================*/

const heroImagen = document.querySelector(".hero-imagen img");

window.addEventListener("scroll", () => {

    if (heroImagen) {

        const y = window.scrollY * 0.08;

        heroImagen.style.transform = `translateY(${y}px)`;

    }

});


/*=====================================
APARICIÓN ESCALONADA TARJETAS
=====================================*/

const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.15}s`;

});


/*=====================================
BOTONES EFECTO RIPPLE
=====================================*/

const botones = document.querySelectorAll(".boton");

botones.forEach((boton) => {

    boton.addEventListener("mouseenter", () => {

        boton.style.transform = "translateY(-4px) scale(1.02)";

    });

    boton.addEventListener("mouseleave", () => {

        boton.style.transform = "translateY(0) scale(1)";

    });

});