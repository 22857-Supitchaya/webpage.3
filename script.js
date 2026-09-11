document.addEventListener("DOMContentLoaded", () => {


    /* ========================================= */
    /* LOADER */
    /* ========================================= */

    const loader =
        document.querySelector(".loader");


    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {

                loader.classList.add("loaded");

            }

        }, 1200);

    });


    /* ========================================= */
    /* CUSTOM CURSOR */
    /* ========================================= */

    const cursor =
        document.querySelector(".custom-cursor");

    const cursorRing =
        document.querySelector(".cursor-ring");


    let mouseX = window.innerWidth / 2;

    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;

    let cursorY = mouseY;


    document.addEventListener("mousemove", (event) => {

        mouseX = event.clientX;

        mouseY = event.clientY;

        document.documentElement.style.setProperty(
            "--mouse-x",
            `${mouseX}px`
        );

        document.documentElement.style.setProperty(
            "--mouse-y",
            `${mouseY}px`
        );

    });


    function animateCursor() {

        cursorX +=
            (mouseX - cursorX) * 0.16;

        cursorY +=
            (mouseY - cursorY) * 0.16;


        if (cursor) {

            cursor.style.transform =
                `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;

        }


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    document
        .querySelectorAll("a, button, .tilt-card")
        .forEach(element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    document.body
                        .classList
                        .add("cursor-hover");

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    document.body
                        .classList
                        .remove("cursor-hover");

                }
            );

        });


    /* ========================================= */
    /* WATER SPLASH CLICK */
    /* ========================================= */

    document.addEventListener("click", (event) => {

        const ripple =
            document.createElement("div");

        ripple.className =
            "water-ripple";

        ripple.style.left =
            `${event.clientX}px`;

        ripple.style.top =
            `${event.clientY}px`;


        document.body.appendChild(
            ripple
        );


        for (let i = 0; i < 10; i++) {

            createSplashParticle(
                event.clientX,
                event.clientY
            );

        }


        setTimeout(() => {

            ripple.remove();

        }, 900);

    });


    function createSplashParticle(x, y) {

        const particle =
            document.createElement("span");

        particle.style.position =
            "fixed";

        particle.style.left =
            `${x}px`;

        particle.style.top =
            `${y}px`;

        particle.style.width =
            "3px";

        particle.style.height =
            "3px";

        particle.style.borderRadius =
            "50%";

        particle.style.background =
            "#8ff7ff";

        particle.style.boxShadow =
            "0 0 10px #5cecff";

        particle.style.pointerEvents =
            "none";

        particle.style.zIndex =
            "9997";


        const angle =
            Math.random() *
            Math.PI * 2;

        const distance =
            20 + Math.random() * 70;


        particle.animate(

            [

                {
                    transform:
                        "translate(-50%,-50%) scale(1)",

                    opacity: 1

                },

                {

                    transform:
                        `translate(
                            ${Math.cos(angle) * distance}px,
                            ${Math.sin(angle) * distance}px
                        )
                        scale(0)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    600 + Math.random() * 400,

                easing:
                    "cubic-bezier(.2,.8,.2,1)"

            }

        );


        document.body.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 1100);

    }


    /* ========================================= */
    /* PARTICLES */
    /* ========================================= */

    const particleContainer =
        document.querySelector(".particles");


    if (particleContainer) {

        for (let i = 0; i < 80; i++) {

            const particle =
                document.createElement("span");

            particle.className =
                "particle";


            const size =
                Math.random() * 3 + 1;


            particle.style.width =
                `${size}px`;

            particle.style.height =
                `${size}px`;

            particle.style.left =
                `${Math.random() * 100}%`;

            particle.style.animationDuration =
                `${8 + Math.random() * 18}s`;

            particle.style.animationDelay =
                `${Math.random() * -20}s`;


            particleContainer.appendChild(
                particle
            );

        }

    }


    /* ========================================= */
    /* BUBBLES */
    /* ========================================= */

    const bubbleContainer =
        document.querySelector(".bubbles");


    if (bubbleContainer) {

        for (let i = 0; i < 35; i++) {

            const bubble =
                document.createElement("span");

            bubble.className =
                "bubble";


            const size =
                3 + Math.random() * 20;


            bubble.style.width =
                `${size}px`;

            bubble.style.height =
                `${size}px`;

            bubble.style.left =
                `${Math.random() * 100}%`;

            bubble.style.animationDuration =
                `${7 + Math.random() * 16}s`;

            bubble.style.animationDelay =
                `${Math.random() * -20}s`;


            bubbleContainer.appendChild(
                bubble
            );

        }

    }


    /* ========================================= */
    /* FISH SCHOOL */
    /* ========================================= */

    const fishContainer =
        document.querySelector(".fish-school");


    if (fishContainer) {

        const fishTypes = [
            "🐟",
            "🐠",
            "🐡",
            "🐟",
            "🐠"
        ];


        for (let i = 0; i < 12; i++) {

            const fish =
                document.createElement("span");

            fish.className =
                "fish";


            fish.textContent =
                fishTypes[
                    Math.floor(
                        Math.random() *
                        fishTypes.length
                    )
                ];


            fish.style.top =
                `${10 + Math.random() * 75}%`;

            fish.style.fontSize =
                `${12 + Math.random() * 22}px`;

            fish.style.animationDuration =
                `${16 + Math.random() * 20}s`;

            fish.style.animationDelay =
                `${Math.random() * -30}s`;


            fishContainer.appendChild(
                fish
            );

        }

    }


    /* ========================================= */
    /* SCROLL DEPTH */
    /* ========================================= */

    const depthNumber =
        document.querySelector(
            "#depthNumber"
        );

    const depthFill =
        document.querySelector(
            "#depthFill"
        );


    function updateDepth() {

        const scrollTop =
            window.scrollY;

        const maxScroll =
            document.documentElement.scrollHeight -
            window.innerHeight;


        let percent =
            maxScroll > 0
                ? scrollTop / maxScroll
                : 0;


        percent =
            Math.min(
                1,
                Math.max(0, percent)
            );


        const depth =
            Math.round(
                percent * 4500
            );


        if (depthNumber) {

            depthNumber.textContent =
                depth.toString()
                    .padStart(4, "0");

        }


        if (depthFill) {

            depthFill.style.height =
                `${percent * 100}%`;

        }


        document.body.style.setProperty(
            "--scroll-depth",
            percent
        );


        /* PARALLAX */

        document.documentElement.style.setProperty(
            "--scroll-y",
            `${scrollTop}px`
        );

    }


    window.addEventListener(
        "scroll",
        updateDepth,
        { passive: true }
    );


    updateDepth();


    /* ========================================= */
    /* SCROLL REVEAL */
    /* ========================================= */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("visible");

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );


    /* ========================================= */
    /* 3D TILT */
    /* ========================================= */

    document
        .querySelectorAll(".tilt-card")
        .forEach(card => {


            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const centerX =
                        rect.width / 2;


                    const centerY =
                        rect.height / 2;


                    const rotateX =
                        (y - centerY) /
                        18;


                    const rotateY =
                        (centerX - x) /
                        18;


                    card.style.transform =
                        `perspective(900px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-5px)`;


                    card.style.setProperty(
                        "--mx",
                        `${(x / rect.width) * 100}%`
                    );


                    card.style.setProperty(
                        "--my",
                        `${(y / rect.height) * 100}%`
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });


    /* ========================================= */
    /* MAGNETIC BUTTONS */
    /* ========================================= */

    document
        .querySelectorAll(".btn")
        .forEach(button => {


            button.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        button.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;


                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    button.style.transform =
                        `translate(
                            ${x * 0.08}px,
                            ${y * 0.08}px
                        )`;

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform =
                        "";

                }
            );

        });


    /* ========================================= */
    /* MOUSE LIGHT */
    /* ========================================= */

    document.addEventListener(
        "mousemove",
        event => {

            document.documentElement.style.setProperty(
                "--mouse-x",
                `${event.clientX}px`
            );

            document.documentElement.style.setProperty(
                "--mouse-y",
                `${event.clientY}px`
            );

        }
    );


    /* ========================================= */
    /* THEME */
    /* ========================================= */

    const themeButton =
        document.querySelector(
            "#themeButton"
        );


    const savedTheme =
        localStorage.getItem(
            "myOceanTheme"
        );


    if (savedTheme === "surface") {

        document.body.classList.add(
            "surface-mode"
        );

    }


    if (themeButton) {

        themeButton.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "surface-mode"
                );


                const isSurface =
                    document.body.classList.contains(
                        "surface-mode"
                    );


                localStorage.setItem(
                    "myOceanTheme",
                    isSurface
                        ? "surface"
                        : "deep"
                );

            }
        );

    }


    /* ========================================= */
    /* KEYBOARD EASTER EGG */
    /* ========================================= */

    let keySequence = "";


    document.addEventListener(
        "keydown",
        event => {

            keySequence +=
                event.key.toLowerCase();


            if (
                keySequence.length > 12
            ) {

                keySequence =
                    keySequence.slice(-12);

            }


            if (
                keySequence.includes(
                    "ocean"
                )
            ) {

                document.body.classList.add(
                    "ocean-pulse"
                );


                setTimeout(() => {

                    document.body.classList.remove(
                        "ocean-pulse"
                    );

                }, 1500);


                keySequence = "";

            }

        }
    );


});
