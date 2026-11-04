/* =========================================================
   KARTALOVIC LABS
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LANGUAGE
       Pages are generated per language by _i18n/build.mjs, so the
       text is already in the HTML and the URL decides the language
       (/, /de/, /sr/). The build embeds only the strings this script
       shows at runtime as JSON (#i18nRuntime).

       The 404 page is the exception: GitHub Pages serves one file for
       every missing URL, so it is translated here from the URL prefix,
       falling back to the visitor's last chosen language.
       ===================================================== */

    const SUPPORTED_LANGUAGES =
        ["en", "de", "sr"];

    const LANGUAGE_STORAGE_KEY =
        "kartalovicLabsLanguage";


    /* Attributes translated from data-i18n-* keys (404 page only) */

    const translatedAttributes = {
        "data-i18n-placeholder": "placeholder",
        "data-i18n-aria-label": "aria-label",
        "data-i18n-alt": "alt",
        "data-i18n-content": "content"
    };


    const languageLinks =
        document.querySelectorAll(".lang-btn");


    function readRuntimeStrings() {

        const node =
            document.getElementById("i18nRuntime");

        try {

            return node
                ? JSON.parse(node.textContent)
                : { languages: {} };

        } catch (error) {

            return { languages: {} };

        }

    }


    const runtime =
        readRuntimeStrings();


    function isSupportedLanguage(language) {

        return SUPPORTED_LANGUAGES.includes(language);

    }


    /* localStorage can throw when storage is blocked */

    function readStoredLanguage() {

        try {

            const stored =
                localStorage.getItem(LANGUAGE_STORAGE_KEY);

            return isSupportedLanguage(stored)
                ? stored
                : null;

        } catch (error) {

            return null;

        }

    }


    function storeLanguage(language) {

        try {

            localStorage.setItem(
                LANGUAGE_STORAGE_KEY,
                language
            );

        } catch (error) {
            /* Only the 404 fallback depends on the stored choice. */
        }

    }


    function languageFromDocument() {

        const lang =
            (document.documentElement.lang || "en").toLowerCase();

        if (lang.startsWith("de")) {
            return "de";
        }

        return lang.startsWith("sr")
            ? "sr"
            : "en";

    }


    function languageFromPath() {

        const match =
            window.location.pathname.match(/^\/(de|sr)(\/|$)/);

        return match
            ? match[1]
            : null;

    }


    /* The URL always wins; stored preference only helps the 404 page
       on URLs without a language prefix. */

    let currentLanguage =
        runtime.dynamic
            ? languageFromPath() || readStoredLanguage() || "en"
            : languageFromDocument();


    function strings() {

        return runtime.languages[currentLanguage] ||
            runtime.languages.en ||
            {};

    }


    /* 404 only: translate the page and point its links at the
       detected language. */

    function translateDynamicPage() {

        const selected =
            strings();


        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const value =
                    selected[element.dataset.i18n];

                if (value) {
                    element.textContent = value;
                }

            });


        Object
            .entries(translatedAttributes)
            .forEach(([sourceAttribute, attribute]) => {

                document
                    .querySelectorAll(`[${sourceAttribute}]`)
                    .forEach(element => {

                        const value =
                            selected[element.getAttribute(sourceAttribute)];

                        if (value) {
                            element.setAttribute(attribute, value);
                        }

                    });

            });


        const prefix =
            (runtime.paths && runtime.paths[currentLanguage]) || "/";

        document
            .querySelectorAll("a[href^='/']:not(.lang-btn)")
            .forEach(link => {

                const page =
                    link.getAttribute("href")
                        .match(/^\/(?:(contact|privacy|impressum)\.html)?(#.*)?$/);

                if (page) {
                    link.setAttribute(
                        "href",
                        prefix + (page[1] ? `${page[1]}.html` : "") + (page[2] || "")
                    );
                }

            });


        languageLinks.forEach(link => {

            const isActive =
                link.dataset.lang === currentLanguage;

            link.classList.toggle("active", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "true");
            } else {
                link.removeAttribute("aria-current");
            }

        });


        document.documentElement.lang =
            currentLanguage === "sr"
                ? "sr-Latn"
                : currentLanguage;

    }


    /* Reads the toggle state from the DOM so it can run before the
       mobile menu section below is initialised. */

    function updateMenuToggleLabel() {

        const toggle =
            document.querySelector(".menu-toggle");

        if (!toggle) {
            return;
        }

        const isOpen =
            toggle.getAttribute("aria-expanded") === "true";

        const label =
            isOpen
                ? strings().menuClose
                : strings().menuOpen;

        if (label) {
            toggle.setAttribute("aria-label", label);
        }

    }


    /* Language links navigate to the equivalent page; remembering the
       choice only matters for the 404 fallback. */

    languageLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                if (isSupportedLanguage(link.dataset.lang)) {
                    storeLanguage(link.dataset.lang);
                }

            }
        );

    });


    if (runtime.dynamic) {
        translateDynamicPage();
    }

    updateMenuToggleLabel();


    /* =====================================================
       REDUCED MOTION
       ===================================================== */

    const reducedMotionQuery =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    function prefersReducedMotion() {

        return reducedMotionQuery.matches;

    }


    /* =====================================================
       PREMIUM SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-label, " +
            ".idea-heading, " +
            ".idea-copy, " +
            ".services-heading h2, " +
            ".service-item, " +
            ".proof-inner, " +
            ".work-copy, " +
            ".project-showcase, " +
            ".studio-manifesto, " +
            ".studio-copy, " +
            ".contact-content, " +
            ".contact-page-hero-inner, " +
            ".project-form-card, " +
            ".contact-promise-item"
        );


    /* With reduced motion (or no IntersectionObserver) content
       simply stays visible. */

    if (
        !prefersReducedMotion() &&
        "IntersectionObserver" in window
    ) {

        revealElements.forEach(element => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(45px)";

            element.style.transition =
                "opacity 0.9s cubic-bezier(.2,.7,.2,1), " +
                "transform 0.9s cubic-bezier(.2,.7,.2,1)";

        });


        const revealObserver =
            new IntersectionObserver(

                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    });

                },

                {
                    threshold: 0.12
                }

            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    }


    /* =====================================================
       HERO LOAD ANIMATION
       ===================================================== */

    const heroContent =
        document.querySelector(
            ".hero-content"
        );


    const heroVisual =
        document.querySelector(
            ".hero-visual"
        );


    if (
        heroContent &&
        !prefersReducedMotion()
    ) {

        heroContent.animate(

            [
                {
                    opacity: 0,
                    transform:
                        "translateY(30px)"
                },

                {
                    opacity: 1,
                    transform:
                        "translateY(0)"
                }
            ],

            {
                duration: 1100,

                easing:
                    "cubic-bezier(.2,.7,.2,1)",

                fill: "both"
            }

        );

    }


    if (
        heroVisual &&
        !prefersReducedMotion()
    ) {

        heroVisual.animate(

            [
                {
                    opacity: 0,

                    transform:
                        "scale(.94)"
                },

                {
                    opacity: 1,

                    transform:
                        "scale(1)"
                }
            ],

            {
                duration: 1500,

                delay: 250,

                easing:
                    "cubic-bezier(.2,.7,.2,1)",

                fill: "both"
            }

        );

    }


    /* =====================================================
       INTERACTIVE ORBITAL OBJECT
       ===================================================== */

    const orbitalObject =
        document.querySelector(
            ".orbital-object"
        );


    const hero =
        document.querySelector(
            ".hero"
        );


    if (
        orbitalObject &&
        hero &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        hero.addEventListener(
            "mousemove",
            event => {

                if (prefersReducedMotion()) {
                    return;
                }

                const rect =
                    hero.getBoundingClientRect();


                const mouseX =
                    (
                        event.clientX -
                        rect.left
                    ) / rect.width;


                const mouseY =
                    (
                        event.clientY -
                        rect.top
                    ) / rect.height;


                const rotateX =
                    59 +
                    (mouseY - 0.5) * -8;


                const rotateZ =
                    -22 +
                    (mouseX - 0.5) * 9;


                orbitalObject.style.animation =
                    "none";


                orbitalObject.style.transform =
                    `rotateX(${rotateX}deg)
                     rotateZ(${rotateZ}deg)
                     translateY(-5px)`;

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                orbitalObject.style.transform =
                    "";

                orbitalObject.style.animation =
                    "";

            }
        );

    }


    /* =====================================================
       HEADER SCROLL EFFECT
       ===================================================== */

    const header =
        document.querySelector(
            ".site-header"
        );


    let lastScrollY =
        window.scrollY;


    window.addEventListener(
        "scroll",
        () => {

            if (!header) {
                return;
            }


            const currentScroll =
                window.scrollY;


            if (currentScroll > 80) {

                header.style.position =
                    "fixed";

                header.style.background =
                    "rgba(5, 7, 10, 0.82)";

                header.style.backdropFilter =
                    "blur(18px)";

                header.style.webkitBackdropFilter =
                    "blur(18px)";

                header.style.borderBottom =
                    "1px solid rgba(255,255,255,.07)";

            } else {

                header.style.position =
                    "absolute";

                header.style.background =
                    "transparent";

                header.style.backdropFilter =
                    "none";

                header.style.webkitBackdropFilter =
                    "none";

                header.style.borderBottom =
                    "1px solid transparent";

            }


            if (
                currentScroll >
                lastScrollY + 15 &&
                currentScroll > 300 &&
                !mobileMenuOpen
            ) {

                header.style.transform =
                    "translateY(-100%)";

            } else {

                header.style.transform =
                    "translateY(0)";

            }


            header.style.transition =
                "transform .35s ease, " +
                "background .35s ease, " +
                "border-color .35s ease";


            lastScrollY =
                currentScroll;

        },

        {
            passive: true
        }
    );


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuToggle =
        document.querySelector(
            ".menu-toggle"
        );


    const mainNav =
        document.querySelector(
            ".main-nav"
        );


    let mobileMenuOpen =
        false;


    /* Layout lives in CSS (.main-nav.is-open); JS only switches state. */

    function setMobileMenu(open) {

        if (
            !menuToggle ||
            !mainNav
        ) {
            return;
        }

        mobileMenuOpen = open;

        mainNav.classList.toggle(
            "is-open",
            open
        );

        menuToggle.setAttribute(
            "aria-expanded",
            String(open)
        );

        updateMenuToggleLabel();

        document.body.style.overflow =
            open
                ? "hidden"
                : "";

        if (
            open &&
            header
        ) {
            header.style.transform =
                "translateY(0)";
        }

    }


    if (
        menuToggle &&
        mainNav
    ) {

        menuToggle.addEventListener(
            "click",
            () => {

                setMobileMenu(
                    !mobileMenuOpen
                );

                /* The nav comes before the toggle in the DOM, so Tab
                   would skip the open menu without this. */

                const firstLink =
                    mainNav.querySelector("a");

                if (
                    mobileMenuOpen &&
                    firstLink
                ) {

                    firstLink.focus({
                        preventScroll: true
                    });

                }

            }
        );


        mainNav
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        setMobileMenu(false);

                    }
                );

            });


        /* Tabbing past the header closes the menu that covers the page. */

        if (header) {

            header.addEventListener(
                "focusout",
                event => {

                    if (
                        mobileMenuOpen &&
                        event.relatedTarget &&
                        !header.contains(event.relatedTarget)
                    ) {

                        setMobileMenu(false);

                    }

                }
            );

        }


        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape" &&
                    mobileMenuOpen
                ) {

                    setMobileMenu(false);

                    menuToggle.focus();

                }

            }
        );


        document.addEventListener(
            "click",
            event => {

                if (
                    mobileMenuOpen &&
                    !mainNav.contains(event.target) &&
                    !menuToggle.contains(event.target)
                ) {

                    setMobileMenu(false);

                }

            }
        );

    }


    /* =====================================================
       RESIZE SAFETY
       ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 1100 &&
                mobileMenuOpen
            ) {

                setMobileMenu(false);

            }

        }
    );


    /* =====================================================
       SUBTLE PROJECT PARALLAX
       ===================================================== */

    /* Parallax writes the individual `translate` property, while the
       scroll reveal animates `transform` with a 0.9s transition. The two
       compose instead of overwriting each other, and the parallax is not
       slowed down by the reveal transition. */

    const projectShowcase =
        document.querySelector(
            ".project-showcase"
        );


    window.addEventListener(
        "scroll",
        () => {

            if (!projectShowcase) {
                return;
            }


            if (
                window.innerWidth < 800 ||
                prefersReducedMotion()
            ) {

                projectShowcase.style.translate = "";

                return;

            }


            const rect =
                projectShowcase
                    .getBoundingClientRect();


            const viewportHeight =
                window.innerHeight;


            if (
                rect.bottom < 0 ||
                rect.top > viewportHeight
            ) {
                return;
            }


            const progress =
                (
                    viewportHeight -
                    rect.top
                ) /
                (
                    viewportHeight +
                    rect.height
                );


            const movement =
                (progress - 0.5) * 24;


            projectShowcase.style.translate =
                `0 ${movement}px`;

        },

        {
            passive: true
        }
    );


    /* =====================================================
       CONTACT FORM — FORMSPREE
       ===================================================== */

    const projectInquiryForm =
        document.getElementById(
            "projectInquiryForm"
        );


    if (projectInquiryForm) {

        const formMessage =
            document.getElementById(
                "formMessage"
            );


        const submitButton =
            projectInquiryForm.querySelector(
                ".form-submit"
            );


        const submitText =
            submitButton
                ? submitButton.querySelector(
                    "[data-i18n='formSubmit']"
                )
                : null;


        /* state: "success" | "error" | null, in the page language. */

        function showFormMessage(state) {

            if (!formMessage) {
                return;
            }

            formMessage.classList.remove(
                "is-success",
                "is-error"
            );

            if (!state) {

                formMessage.textContent = "";

                return;

            }

            const key =
                state === "success"
                    ? "formSuccess"
                    : "formError";

            formMessage.textContent =
                strings()[key];

            formMessage.classList.add(
                "is-" + state
            );

            formMessage.scrollIntoView({
                behavior:
                    prefersReducedMotion()
                        ? "auto"
                        : "smooth",
                block: "center"
            });

        }


        projectInquiryForm.addEventListener(
            "submit",
            async event => {

                event.preventDefault();

                showFormMessage(null);


                if (submitButton) {

                    submitButton.disabled = true;

                    submitButton.setAttribute(
                        "aria-busy",
                        "true"
                    );

                }


                if (submitText) {

                    submitText.textContent =
                        strings().formSending;

                }


                try {

                    const response =
                        await fetch(
                            projectInquiryForm.action,
                            {
                                method: "POST",

                                body:
                                    new FormData(
                                        projectInquiryForm
                                    ),

                                headers: {
                                    Accept:
                                        "application/json"
                                }
                            }
                        );


                    if (!response.ok) {

                        throw new Error(
                            "Form submission failed."
                        );

                    }


                    projectInquiryForm.reset();

                    showFormMessage("success");

                } catch (error) {

                    console.error(
                        "Contact form error:",
                        error
                    );

                    showFormMessage("error");

                } finally {

                    if (submitButton) {

                        submitButton.disabled = false;

                        submitButton.removeAttribute(
                            "aria-busy"
                        );

                    }


                    if (submitText) {

                        submitText.textContent =
                            strings().formSubmit;

                    }

                }

            }
        );

    }

});
