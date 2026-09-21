/* =========================================================
   KARTALOVIC LABS
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       TRANSLATIONS
       ===================================================== */

    const translations = {

        /* =========================
           ENGLISH
           ========================= */

        en: {
            navWork: "Work",
            navServices: "Services",
            navStudio: "Studio",
            navContact: "Contact",

            letsBuild: "Let's build",
            tellIdea: "Tell us your idea",
            shareIdea: "Share your idea",

            heroEyebrow: "FROM IDEA TO WORKING PRODUCT",
            heroLine1: "WE TURN IDEAS",
            heroLine2: "INTO DIGITAL",
            heroLine3: "PRODUCTS.",

            heroDescription:
                "Native Android apps, modern websites and custom digital solutions — from the first idea to a working product.",

            startProject: "Start a project",
            exploreWork: "Explore our work",
            scroll: "SCROLL",

            ideaLabel: "START WITH AN IDEA",
            ideaLine1: "YOU DON'T NEED",
            ideaLine2: "TO HAVE IT ALL",
            ideaLine3: "FIGURED OUT.",

            ideaText1:
                "Have an idea for an app, website or digital product? A simple message is enough to get started.",

            ideaText2:
                "Tell us what you want to achieve. We'll help you understand what's possible, how the project could be built, what it would require and what the next steps should be.",

            ideaFree:
                "The initial project discussion, guidance and information are free — with no obligation to continue.",

            servicesLabel: "WHAT WE BUILD",

            servicesIntro:
                "Focused digital solutions built around the idea, the users and the real purpose of the product.",

            serviceAndroidTitle: "Android Development",
            serviceAndroidText:
                "Native Android applications built with modern technologies and designed around real product needs.",

            serviceWebTitle: "Web Development",
            serviceWebText:
                "Modern responsive websites designed to present your business clearly and turn visitors into real inquiries.",

            serviceProductTitle: "Digital Products",
            serviceProductText:
                "From an early concept to a working digital product — planning, design, development and launch.",

            proofLabel: "OUR APPROACH",
            proofLine1: "LESS TALK.",
            proofLine2: "MORE BUILDING.",

            proofText:
                "We believe good work should speak for itself. Instead of telling you what we can build, we'd rather show you.",

            featuredProject: "FEATURED PROJECT",

            retroloopDescription:
                "A native Android retro-gaming application built from the ground up with a custom interface, controller support, save states, game libraries and native emulation integration.",

            viewProject: "View project",

            studioLabel: "KARTALOVIC LABS",

            studioLine1: "WE DON'T BUILD",
            studioLine2: "JUST TO SHIP.",
            studioLine3: "WE BUILD TO LAST.",

            studioDescription:
                "KARTALOVIC LABS is an independent digital studio focused on Android applications, modern websites and digital products. We prefer practical solutions, clear communication and real working products over unnecessary complexity.",

            workTogether: "START A CONVERSATION",

            contactLine1: "HAVE AN IDEA?",
            contactLine2: "TELL US ABOUT",
            contactLine3: "IT.",

            contactDescription:
                "You don't need a technical specification or a finished plan. Tell us in your own words what you want to create.",

            contactNote:
                "Initial discussion and project guidance are free. No obligation to continue.",

            /* CONTACT PAGE */

            backHome: "Back to home",

            contactPageEyebrow:
                "START WITH AN IDEA",

            contactPageLine1:
                "TELL US ABOUT",

            contactPageLine2:
                "YOUR IDEA.",

            contactPageIntro:
                "You don't need a finished plan, technical specification or programming knowledge. Tell us what you want to create in your own words.",

            contactProcessLabel:
                "HOW IT WORKS",

            contactProcessLine1:
                "A SIMPLE",

            contactProcessLine2:
                "FIRST STEP.",

            contactProcessIntro:
                "A short message is enough to start. We'll take it from there together.",

            contactStep1Title:
                "Share the idea",

            contactStep1Text:
                "Tell us what you want to build and what you want it to achieve.",

            contactStep2Title:
                "We review it",

            contactStep2Text:
                "We'll look at what is possible, what the project needs and how it could be approached.",

            contactStep3Title:
                "You decide",

            contactStep3Text:
                "We'll explain the possible next steps. You decide whether you want to continue.",

            contactFree:
                "The initial discussion, project assessment and basic guidance are free — with no obligation to continue.",

            preferEmail:
                "Prefer email?",

            formHeader:
                "PROJECT INQUIRY",

            formName:
                "Your name",

            formNamePlaceholder:
                "Name",

            formEmail:
                "Email",

            formEmailPlaceholder:
                "you@email.com",

            formProjectType:
                "What do you need?",

            formSelect:
                "Select project type",

            formAndroid:
                "Android application",

            formWebsite:
                "Website",

            formDigitalProduct:
                "Digital product",

            formNotSure:
                "I'm not sure yet",

            formBudget:
                "Approximate budget",

            formBudgetOptional:
                "Optional",

            formBudgetUnknown:
                "I don't know yet",

            formMessage:
                "Tell us about your idea",

            formMessagePlaceholder:
                "Describe your idea in your own words. You don't need any technical knowledge.",

            formHelper:
                "No technical knowledge required. A simple description of your idea is enough.",

            formSubmit:
                "Send inquiry",

            formPrivacy:
                "Your information will only be used to respond to your inquiry.",

            formSending:
                "Sending...",

            formSuccess:
                "Thank you. Your inquiry has been sent successfully. We'll get back to you soon.",

            formError:
                "Something went wrong. Please try again or email us directly at kartaloviclabs@gmail.com.",

            contactFinalSmall:
                "KARTALOVIC LABS",

            contactFinalLine1:
                "YOUR IDEA COULD BE",

            contactFinalLine2:
                "THE NEXT PROJECT.",

            privacy: "Privacy",
            imprint: "Imprint"
        },


        /* =========================
           DEUTSCH
           ========================= */

        de: {
            navWork: "Projekte",
            navServices: "Leistungen",
            navStudio: "Studio",
            navContact: "Kontakt",

            letsBuild: "Projekt starten",
            tellIdea: "Erzählen Sie uns von Ihrer Idee",
            shareIdea: "Idee senden",

            heroEyebrow:
                "VON DER IDEE ZUM FUNKTIONIERENDEN PRODUKT",

            heroLine1:
                "WIR MACHEN AUS IDEEN",

            heroLine2:
                "DIGITALE",

            heroLine3:
                "PRODUKTE.",

            heroDescription:
                "Native Android-Apps, moderne Websites und individuelle digitale Lösungen — von der ersten Idee bis zum funktionierenden Produkt.",

            startProject:
                "Projekt starten",

            exploreWork:
                "Unsere Projekte ansehen",

            scroll:
                "WEITER",

            ideaLabel:
                "ALLES BEGINNT MIT EINER IDEE",

            ideaLine1:
                "SIE MÜSSEN NOCH",

            ideaLine2:
                "NICHT ALLES",

            ideaLine3:
                "GEPLANT HABEN.",

            ideaText1:
                "Sie haben eine Idee für eine App, eine Website oder ein digitales Produkt? Eine einfache Nachricht reicht aus, um zu beginnen.",

            ideaText2:
                "Erzählen Sie uns, was Sie erreichen möchten. Wir erklären Ihnen, was möglich ist, wie das Projekt umgesetzt werden könnte, was dafür benötigt wird und welche nächsten Schritte sinnvoll sind.",

            ideaFree:
                "Das erste Projektgespräch, unsere Einschätzung und grundlegende Informationen sind kostenlos — ohne Verpflichtung zur weiteren Zusammenarbeit.",

            servicesLabel:
                "WAS WIR ENTWICKELN",

            servicesIntro:
                "Digitale Lösungen, die sich an der Idee, den Nutzern und dem tatsächlichen Zweck des Produkts orientieren.",

            serviceAndroidTitle:
                "Android-Entwicklung",

            serviceAndroidText:
                "Native Android-Anwendungen mit modernen Technologien — entwickelt für reale Anforderungen und konkrete Produktziele.",

            serviceWebTitle:
                "Webentwicklung",

            serviceWebText:
                "Moderne responsive Websites, die Ihr Unternehmen professionell präsentieren und Besucher zu echten Anfragen führen.",

            serviceProductTitle:
                "Digitale Produkte",

            serviceProductText:
                "Von der ersten Idee bis zum funktionierenden digitalen Produkt — Planung, Design, Entwicklung und Launch.",

            proofLabel:
                "UNSER ANSATZ",

            proofLine1:
                "WENIGER REDEN.",

            proofLine2:
                "MEHR MACHEN.",

            proofText:
                "Wir glauben, dass gute Arbeit für sich selbst sprechen sollte. Anstatt Ihnen nur zu erzählen, was wir entwickeln können, zeigen wir es lieber.",

            featuredProject:
                "AUSGEWÄHLTES PROJEKT",

            retroloopDescription:
                "Eine native Android-Anwendung für Retro-Gaming, von Grund auf entwickelt — mit eigener Benutzeroberfläche, Controller-Unterstützung, Save States, Spielebibliotheken und nativer Emulator-Integration.",

            viewProject:
                "Projekt ansehen",

            studioLabel:
                "KARTALOVIC LABS",

            studioLine1:
                "WIR ENTWICKELN NICHT",

            studioLine2:
                "NUR FÜR DEN LAUNCH.",

            studioLine3:
                "WIR ENTWICKELN FÜR DAUER.",

            studioDescription:
                "KARTALOVIC LABS ist ein unabhängiges Digitalstudio mit Fokus auf Android-Anwendungen, moderne Websites und digitale Produkte. Wir setzen auf praktische Lösungen, klare Kommunikation und funktionierende Produkte statt unnötiger Komplexität.",

            workTogether:
                "LASSEN SIE UNS REDEN",

            contactLine1:
                "SIE HABEN EINE IDEE?",

            contactLine2:
                "ERZÄHLEN SIE UNS",

            contactLine3:
                "DAVON.",

            contactDescription:
                "Sie benötigen weder eine technische Spezifikation noch einen fertigen Plan. Beschreiben Sie uns einfach mit Ihren eigenen Worten, was Sie umsetzen möchten.",

            contactNote:
                "Das erste Gespräch und die grundlegende Projektberatung sind kostenlos. Ohne Verpflichtung zur weiteren Zusammenarbeit.",

            /* CONTACT PAGE */

            backHome:
                "Zurück zur Startseite",

            contactPageEyebrow:
                "STARTEN SIE MIT EINER IDEE",

            contactPageLine1:
                "ERZÄHLEN SIE UNS VON",

            contactPageLine2:
                "IHRER IDEE.",

            contactPageIntro:
                "Sie benötigen weder einen fertigen Plan noch eine technische Spezifikation oder Programmierkenntnisse. Beschreiben Sie uns einfach mit Ihren eigenen Worten, was Sie umsetzen möchten.",

            contactProcessLabel:
                "SO FUNKTIONIERT ES",

            contactProcessLine1:
                "EIN EINFACHER",

            contactProcessLine2:
                "ERSTER SCHRITT.",

            contactProcessIntro:
                "Eine kurze Nachricht reicht für den Anfang. Die nächsten Schritte besprechen wir gemeinsam.",

            contactStep1Title:
                "Idee senden",

            contactStep1Text:
                "Beschreiben Sie, was Sie entwickeln möchten und welches Ziel Sie damit erreichen wollen.",

            contactStep2Title:
                "Wir prüfen die Idee",

            contactStep2Text:
                "Wir prüfen, was möglich ist, was das Projekt benötigt und wie es sinnvoll umgesetzt werden könnte.",

            contactStep3Title:
                "Sie entscheiden",

            contactStep3Text:
                "Wir erklären Ihnen die möglichen nächsten Schritte. Sie entscheiden, ob Sie weitermachen möchten.",

            contactFree:
                "Das erste Gespräch, die Projekteinschätzung und grundlegende Beratung sind kostenlos — ohne Verpflichtung zur weiteren Zusammenarbeit.",

            preferEmail:
                "Lieber per E-Mail?",

            formHeader:
                "PROJEKTANFRAGE",

            formName:
                "Ihr Name",

            formNamePlaceholder:
                "Name",

            formEmail:
                "E-Mail",

            formEmailPlaceholder:
                "ihre@email.de",

            formProjectType:
                "Was benötigen Sie?",

            formSelect:
                "Projektart auswählen",

            formAndroid:
                "Android-App",

            formWebsite:
                "Website",

            formDigitalProduct:
                "Digitales Produkt",

            formNotSure:
                "Ich bin noch nicht sicher",

            formBudget:
                "Ungefähres Budget",

            formBudgetOptional:
                "Optional",

            formBudgetUnknown:
                "Ich weiß es noch nicht",

            formMessage:
                "Erzählen Sie uns von Ihrer Idee",

            formMessagePlaceholder:
                "Beschreiben Sie Ihre Idee mit Ihren eigenen Worten. Technische Kenntnisse sind nicht erforderlich.",

            formHelper:
                "Keine technischen Kenntnisse erforderlich. Eine einfache Beschreibung Ihrer Idee reicht aus.",

            formSubmit:
                "Anfrage senden",

            formPrivacy:
                "Ihre Angaben werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet.",

            formSending:
                "Wird gesendet...",

            formSuccess:
                "Vielen Dank. Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns so bald wie möglich bei Ihnen.",

            formError:
                "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an kartaloviclabs@gmail.com.",

            contactFinalSmall:
                "KARTALOVIC LABS",

            contactFinalLine1:
                "IHRE IDEE KÖNNTE",

            contactFinalLine2:
                "DAS NÄCHSTE PROJEKT SEIN.",

            privacy:
                "Datenschutz",

            imprint:
                "Impressum"
        },


        /* =========================
           SRPSKI
           ========================= */

        sr: {
            navWork: "Projekti",
            navServices: "Usluge",
            navStudio: "Studio",
            navContact: "Kontakt",

            letsBuild:
                "Pokreni projekat",

            tellIdea:
                "Ispričajte nam svoju ideju",

            shareIdea:
                "Pošaljite ideju",

            heroEyebrow:
                "OD IDEJE DO GOTOVOG PROIZVODA",

            heroLine1:
                "PRETVARAMO IDEJE",

            heroLine2:
                "U DIGITALNE",

            heroLine3:
                "PROIZVODE.",

            heroDescription:
                "Android aplikacije, moderni web sajtovi i digitalna rješenja — od prve ideje do gotovog proizvoda.",

            startProject:
                "Pokreni projekat",

            exploreWork:
                "Pogledajte naš rad",

            scroll:
                "DALJE",

            ideaLabel:
                "POČNITE OD IDEJE",

            ideaLine1:
                "NE MORATE IMATI",

            ideaLine2:
                "SVE UNAPRIJED",

            ideaLine3:
                "ISPLANIRANO.",

            ideaText1:
                "Imate ideju za aplikaciju, web sajt ili digitalni proizvod? Dovoljna je jednostavna poruka da započnemo razgovor.",

            ideaText2:
                "Recite nam šta želite postići. Pomoći ćemo vam da razumijete šta je moguće, kako bi projekat mogao biti realizovan, šta je potrebno i koji bi bili naredni koraci.",

            ideaFree:
                "Početni razgovor, procjena i informacije o projektu su besplatni — bez obaveze da nastavite saradnju sa nama.",

            servicesLabel:
                "ŠTA RADIMO",

            servicesIntro:
                "Digitalna rješenja razvijena prema ideji, korisnicima i stvarnoj svrsi proizvoda.",

            serviceAndroidTitle:
                "Android razvoj",

            serviceAndroidText:
                "Native Android aplikacije razvijene modernim tehnologijama i prilagođene stvarnim potrebama projekta.",

            serviceWebTitle:
                "Web razvoj",

            serviceWebText:
                "Moderni i responzivni web sajtovi koji profesionalno predstavljaju vaš posao i pretvaraju posjetioce u stvarne upite.",

            serviceProductTitle:
                "Digitalni proizvodi",

            serviceProductText:
                "Od početne ideje do funkcionalnog digitalnog proizvoda — planiranje, dizajn, razvoj i lansiranje.",

            proofLabel:
                "NAŠ PRISTUP",

            proofLine1:
                "MANJE PRIČE.",

            proofLine2:
                "VIŠE STVARANJA.",

            proofText:
                "Vjerujemo da kvalitetan rad najbolje govori sam za sebe. Umjesto da vam pričamo šta možemo napraviti, radije ćemo vam pokazati.",

            featuredProject:
                "IZDVOJENI PROJEKAT",

            retroloopDescription:
                "Native Android aplikacija za retro gaming, razvijena od temelja sa vlastitim interfejsom, podrškom za kontrolere, save state sistemom, bibliotekama igara i native emulator integracijom.",

            viewProject:
                "Pogledajte projekat",

            studioLabel:
                "KARTALOVIC LABS",

            studioLine1:
                "NE GRADIMO",

            studioLine2:
                "SAMO DA ZAVRŠIMO.",

            studioLine3:
                "GRADIMO DA TRAJE.",

            studioDescription:
                "KARTALOVIC LABS je nezavisni digitalni studio fokusiran na Android aplikacije, moderne web sajtove i digitalne proizvode. Biramo praktična rješenja, jasnu komunikaciju i proizvode koji stvarno rade, bez nepotrebnog komplikovanja.",

            workTogether:
                "ZAPOČNIMO RAZGOVOR",

            contactLine1:
                "IMATE IDEJU?",

            contactLine2:
                "ISPRIČAJTE NAM",

            contactLine3:
                "O NJOJ.",

            contactDescription:
                "Ne morate imati tehničku specifikaciju niti gotov plan. Jednostavno nam svojim riječima opišite šta želite napraviti.",

            contactNote:
                "Početni razgovor i osnovne informacije o projektu su besplatni. Bez obaveze da nastavite saradnju sa nama.",

            /* CONTACT PAGE */

            backHome:
                "Nazad na početnu",

            contactPageEyebrow:
                "POČNITE OD IDEJE",

            contactPageLine1:
                "ISPRIČAJTE NAM",

            contactPageLine2:
                "SVOJU IDEJU.",

            contactPageIntro:
                "Ne morate imati gotov plan, tehničku specifikaciju niti znanje programiranja. Svojim riječima nam opišite šta želite napraviti.",

            contactProcessLabel:
                "KAKO FUNKCIONIŠE",

            contactProcessLine1:
                "JEDNOSTAVAN",

            contactProcessLine2:
                "PRVI KORAK.",

            contactProcessIntro:
                "Dovoljna je kratka poruka za početak. Ostale korake možemo proći zajedno.",

            contactStep1Title:
                "Pošaljite ideju",

            contactStep1Text:
                "Opišite šta želite napraviti i šta želite postići tim projektom.",

            contactStep2Title:
                "Mi je pregledamo",

            contactStep2Text:
                "Pogledaćemo šta je moguće, šta je projektu potrebno i kako bi mogao biti realizovan.",

            contactStep3Title:
                "Vi odlučujete",

            contactStep3Text:
                "Objasnićemo moguće naredne korake. Vi odlučujete da li želite nastaviti.",

            contactFree:
                "Početni razgovor, procjena projekta i osnovne informacije su besplatni — bez obaveze da nastavite saradnju sa nama.",

            preferEmail:
                "Više volite email?",

            formHeader:
                "UPIT ZA PROJEKAT",

            formName:
                "Vaše ime",

            formNamePlaceholder:
                "Ime",

            formEmail:
                "Email",

            formEmailPlaceholder:
                "vas@email.com",

            formProjectType:
                "Šta vam je potrebno?",

            formSelect:
                "Izaberite vrstu projekta",

            formAndroid:
                "Android aplikacija",

            formWebsite:
                "Web sajt",

            formDigitalProduct:
                "Digitalni proizvod",

            formNotSure:
                "Još nisam siguran",

            formBudget:
                "Okvirni budžet",

            formBudgetOptional:
                "Opciono",

            formBudgetUnknown:
                "Još ne znam",

            formMessage:
                "Opišite svoju ideju",

            formMessagePlaceholder:
                "Opišite svoju ideju svojim riječima. Nije vam potrebno tehničko znanje.",

            formHelper:
                "Tehničko znanje nije potrebno. Dovoljan je jednostavan opis vaše ideje.",

            formSubmit:
                "Pošaljite upit",

            formPrivacy:
                "Vaši podaci će biti korišteni samo za odgovor na vaš upit.",

            formSending:
                "Šalje se...",

            formSuccess:
                "Hvala. Vaš upit je uspješno poslan. Javićemo vam se uskoro.",

            formError:
                "Došlo je do greške pri slanju. Pokušajte ponovo ili nam pišite direktno na kartaloviclabs@gmail.com.",

            contactFinalSmall:
                "KARTALOVIC LABS",

            contactFinalLine1:
                "VAŠA IDEJA MOŽE BITI",

            contactFinalLine2:
                "NAŠ SLJEDEĆI PROJEKAT.",

            privacy:
                "Privatnost",

            imprint:
                "Impresum"
        }
    };


    /* =====================================================
       LANGUAGE SYSTEM
       ===================================================== */

    const languageButtons =
        document.querySelectorAll(".lang-btn");


    let currentLanguage =
        localStorage.getItem(
            "kartalovicLabsLanguage"
        ) || "en";


    function setLanguage(language) {

        const selected =
            translations[language] || translations.en;


        currentLanguage = language;


        /* NORMAL TEXT */

        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.dataset.i18n;

                if (selected[key]) {

                    element.textContent =
                        selected[key];

                }

            });


        /* INPUT / TEXTAREA PLACEHOLDERS */

        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach(element => {

                const key =
                    element.dataset.i18nPlaceholder;

                if (selected[key]) {

                    element.placeholder =
                        selected[key];

                }

            });


        /* ACTIVE LANGUAGE BUTTON */

        languageButtons.forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.lang === language
            );

        });


        /* HTML LANGUAGE */

        document.documentElement.lang =
            language === "sr"
                ? "sr-Latn"
                : language;


        /* SAVE LANGUAGE */

        localStorage.setItem(
            "kartalovicLabsLanguage",
            language
        );

    }


    languageButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                setLanguage(
                    button.dataset.lang
                );

            }
        );

    });


    setLanguage(currentLanguage);


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


    if (heroContent) {

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


    if (heroVisual) {

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
                currentScroll > 300
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


    if (
        menuToggle &&
        mainNav
    ) {

        menuToggle.addEventListener(
            "click",
            () => {

                mobileMenuOpen =
                    !mobileMenuOpen;


                if (mobileMenuOpen) {

                    mainNav.style.display =
                        "flex";

                    mainNav.style.position =
                        "fixed";

                    mainNav.style.inset =
                        "80px 0 auto 0";

                    mainNav.style.padding =
                        "40px 25px";

                    mainNav.style.background =
                        "rgba(5,7,10,.97)";

                    mainNav.style.flexDirection =
                        "column";

                    mainNav.style.alignItems =
                        "flex-start";

                    mainNav.style.gap =
                        "28px";

                    mainNav.style.borderBottom =
                        "1px solid rgba(255,255,255,.08)";


                    document.body.style.overflow =
                        "hidden";

                } else {

                    mainNav.removeAttribute(
                        "style"
                    );

                    document.body.style.overflow =
                        "";

                }

            }
        );


        mainNav
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        if (
                            window.innerWidth <=
                            1100
                        ) {

                            mobileMenuOpen =
                                false;

                            mainNav.removeAttribute(
                                "style"
                            );

                            document.body.style.overflow =
                                "";

                        }

                    }
                );

            });

    }


    /* =====================================================
       RESIZE SAFETY
       ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth >
                1100 &&
                mainNav
            ) {

                mobileMenuOpen =
                    false;

                mainNav.removeAttribute(
                    "style"
                );

                document.body.style.overflow =
                    "";

            }

        }
    );


    /* =====================================================
       SUBTLE PROJECT PARALLAX
       ===================================================== */

    const projectShowcase =
        document.querySelector(
            ".project-showcase"
        );


    window.addEventListener(
        "scroll",
        () => {

            if (
                !projectShowcase ||
                window.innerWidth < 800
            ) {
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


            projectShowcase.style.transform =
                `translateY(${movement}px)`;

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


        projectInquiryForm.addEventListener(
            "submit",
            async event => {

                event.preventDefault();


                const language =
                    translations[currentLanguage]
                        ? currentLanguage
                        : "en";


                const selected =
                    translations[language];


                if (formMessage) {

                    formMessage.textContent = "";

                    formMessage.style.color = "";

                }


                if (submitButton) {

                    submitButton.disabled = true;

                    submitButton.style.opacity = "0.65";

                    submitButton.style.cursor = "wait";

                }


                if (submitText) {

                    submitText.textContent =
                        selected.formSending;

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


                    if (formMessage) {

                        formMessage.textContent =
                            selected.formSuccess;

                        formMessage.style.color =
                            "#8ee6a4";

                    }


                } catch (error) {

                    console.error(
                        "Contact form error:",
                        error
                    );


                    if (formMessage) {

                        formMessage.textContent =
                            selected.formError;

                        formMessage.style.color =
                            "#ff8f8f";

                    }

                } finally {

                    if (submitButton) {

                        submitButton.disabled = false;

                        submitButton.style.opacity = "";

                        submitButton.style.cursor = "";

                    }


                    if (submitText) {

                        submitText.textContent =
                            selected.formSubmit;

                    }

                }

            }
        );

    }

});