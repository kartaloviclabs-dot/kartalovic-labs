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
                "Native Android apps, modern websites, digital products and SEO optimization — built around your goals.",

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

            servicesLabel: "WHAT WE DO",

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

            serviceSeoTitle: "SEO Optimization",
            serviceSeoText:
                "Technical and on-page SEO, metadata, indexing and Search Console setup, with performance improvements to help your website get discovered.",

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
                "KARTALOVIC LABS is an independent digital studio focused on Android applications, modern websites, digital products and SEO optimization. We prefer practical solutions, clear communication and real working products over unnecessary complexity.",

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

formBudgetUnder500:
    "Under €500",

formBudget5001000:
    "€500 – €1,000",

formBudget10002500:
    "€1,000 – €2,500",

formBudget25005000:
    "€2,500 – €5,000",

formBudget5000Plus:
    "€5,000+",

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
            imprint: "Imprint",

            /* META / ACCESSIBILITY / REMAINING UI */

            metaTitleHome:
                "Android App & Web Development | KARTALOVIC LABS",

            metaDescHome:
                "KARTALOVIC LABS builds native Android apps, modern websites and custom digital products. From your first idea through design, development and launch.",

            metaTitleContact:
                "Contact KARTALOVIC LABS | Discuss Your Project",

            metaDescContact:
                "Tell us about your Android app, website or digital product idea. Get an initial project discussion and guidance, free and without obligation.",

            ariaHome: "KARTALOVIC LABS home",
            ariaMainNav: "Main navigation",
            ariaFooterNav: "Footer navigation",
            ariaLanguage: "Language",
            menuOpen: "Open menu",
            menuClose: "Close menu",

            servicesHeadingDigital: "DIGITAL",
            servicesHeadingProducts: "PRODUCTS",

            statementIdea: "IDEA.",
            statementBuild: "BUILD.",
            statementLaunch: "LAUNCH.",

            retroloopImageAlt:
                "RetroLoop Android application showing gameplay, home screen and controller configuration",

            retroloopControllerTitle: "CONTROLLER",
            retroloopControllerText: "CUSTOM MAPPING",
            retroloopSaveText: "PLAY ANYTIME",
            retroloopPatchText: "BUILT IN",

            principleIdeas: "IDEAS",
            principleStrategy: "STRATEGY",
            principleDesign: "DESIGN",
            principleDevelopment: "DEVELOPMENT",
            principleLaunch: "LAUNCH",

            sideEurope: "EUROPE",
            sideAnd: "AND",
            sideBeyond: "BEYOND.",

            formSeo: "SEO optimization",
            formPrivacyLink: "Privacy policy",

            /* PORTFOLIO — OD SLOVA DO PRIČE */

            osdpLabel:
                "EDUCATIONAL WEBSITE",

            statusInDevelopment:
                "In development",

            osdpDescription:
                "An educational blog for parents and for primary and secondary school students, focused on learning, reading, writing, emotions and motivation. KARTALOVIC LABS is designing and developing the website for this separate educational brand, with a calm, readable layout and content organised by topic.",

            osdpStatusNote:
                "The website is in development. The first articles are currently being prepared.",

            visitWebsite:
                "Visit website",

            osdpImageAlt:
                "Homepage of the Od slova do priče educational blog in a browser window",

            osdpTopic1:
                "SCHOOL & EMOTIONS",

            osdpTopic2:
                "READING & WRITING",

            osdpTopic3:
                "PARENT TIPS",

            osdpTopic4:
                "MOTIVATION",

            osdpTopicLabel:
                "BLOG TOPIC",

            copyright: "© 2026 KARTALOVIC LABS. All rights reserved."
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
                "Native Android-Apps, moderne Websites, digitale Produkte und SEO-Optimierung — abgestimmt auf Ihre Ziele.",

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
                "UNSERE LEISTUNGEN",

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

            serviceSeoTitle: "SEO-Optimierung",
            serviceSeoText:
                "Technische SEO und Onpage-Optimierung, Metadaten sowie die Einrichtung von Indexierung und Search Console – ergänzt durch Performance-Verbesserungen für eine bessere Auffindbarkeit Ihrer Website.",

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
                "WIR ENTWICKELN FÜR DIE ZUKUNFT.",

            studioDescription:
                "KARTALOVIC LABS ist ein unabhängiges Digitalstudio mit Fokus auf Android-Anwendungen, moderne Websites, digitale Produkte und SEO-Optimierung. Wir setzen auf praktische Lösungen, klare Kommunikation und funktionierende Produkte statt unnötiger Komplexität.",

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

formBudgetUnder500:
    "Unter 500 €",

formBudget5001000:
    "500 € – 1.000 €",

formBudget10002500:
    "1.000 € – 2.500 €",

formBudget25005000:
    "2.500 € – 5.000 €",

formBudget5000Plus:
    "Ab 5.000 €",

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
                "Impressum",

            /* META / ACCESSIBILITY / REMAINING UI */

            metaTitleHome:
                "Android-App- & Webentwicklung | KARTALOVIC LABS",

            metaDescHome:
                "KARTALOVIC LABS entwickelt native Android-Apps, moderne Websites und individuelle digitale Produkte — von der ersten Idee über Design und Entwicklung bis zum Launch.",

            metaTitleContact:
                "Kontakt | KARTALOVIC LABS — Projekt besprechen",

            metaDescContact:
                "Erzählen Sie uns von Ihrer Idee für eine Android-App, eine Website oder ein digitales Produkt. Das erste Gespräch und eine Einschätzung sind kostenlos und unverbindlich.",

            ariaHome: "KARTALOVIC LABS Startseite",
            ariaMainNav: "Hauptnavigation",
            ariaFooterNav: "Navigation in der Fußzeile",
            ariaLanguage: "Sprache",
            menuOpen: "Menü öffnen",
            menuClose: "Menü schließen",

            servicesHeadingDigital: "DIGITALE",
            servicesHeadingProducts: "PRODUKTE",

            statementIdea: "IDEE.",
            statementBuild: "ENTWICKLUNG.",
            statementLaunch: "LAUNCH.",

            retroloopImageAlt:
                "RetroLoop Android-App mit Gameplay, Startbildschirm und Controller-Konfiguration",

            retroloopControllerTitle: "CONTROLLER",
            retroloopControllerText: "EIGENE TASTENBELEGUNG",
            retroloopSaveText: "JEDERZEIT WEITERSPIELEN",
            retroloopPatchText: "INTEGRIERT",

            principleIdeas: "IDEEN",
            principleStrategy: "STRATEGIE",
            principleDesign: "DESIGN",
            principleDevelopment: "ENTWICKLUNG",
            principleLaunch: "LAUNCH",

            sideEurope: "EUROPA",
            sideAnd: "UND",
            sideBeyond: "DARÜBER HINAUS.",

            formSeo: "SEO-Optimierung",
            formPrivacyLink: "Datenschutzerklärung",

            /* PORTFOLIO — OD SLOVA DO PRIČE */

            osdpLabel:
                "BILDUNGSWEBSITE",

            statusInDevelopment:
                "In Entwicklung",

            osdpDescription:
                "Ein Bildungsblog für Eltern sowie Schülerinnen und Schüler der Grund- und weiterführenden Schulen — mit Themen rund um Lernen, Lesen, Schreiben, Emotionen und Motivation. KARTALOVIC LABS gestaltet und entwickelt die Website für diese eigenständige Bildungsmarke: ruhig, gut lesbar und klar nach Themen gegliedert.",

            osdpStatusNote:
                "Die Website befindet sich in Entwicklung. Die ersten Artikel werden derzeit vorbereitet.",

            visitWebsite:
                "Website besuchen",

            osdpImageAlt:
                "Startseite des Bildungsblogs „Od slova do priče“ in einem Browserfenster",

            osdpTopic1:
                "SCHULE & EMOTIONEN",

            osdpTopic2:
                "LESEN & SCHREIBEN",

            osdpTopic3:
                "TIPPS FÜR ELTERN",

            osdpTopic4:
                "MOTIVATION",

            osdpTopicLabel:
                "BLOGTHEMA",

            copyright: "© 2026 KARTALOVIC LABS. Alle Rechte vorbehalten."
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
                "Android aplikacije, moderni web sajtovi, digitalni proizvodi i SEO optimizacija — prema vašim ciljevima.",

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
                "SVE UNAPRED",

            ideaLine3:
                "ISPLANIRANO.",

            ideaText1:
                "Imate ideju za aplikaciju, web sajt ili digitalni proizvod? Dovoljna je jednostavna poruka da započnemo razgovor.",

            ideaText2:
                "Recite nam šta želite postići. Pomoći ćemo vam da razumete šta je moguće, kako bi projekat mogao biti realizovan, šta je potrebno i koji bi bili naredni koraci.",

            ideaFree:
                "Početni razgovor, procena i informacije o projektu su besplatni — bez obaveze da nastavite saradnju sa nama.",

            servicesLabel:
                "ŠTA RADIMO",

            servicesIntro:
                "Digitalna rešenja razvijena prema ideji, korisnicima i stvarnoj svrsi proizvoda.",

            serviceAndroidTitle:
                "Android razvoj",

            serviceAndroidText:
                "Native Android aplikacije razvijene modernim tehnologijama i prilagođene stvarnim potrebama projekta.",

            serviceWebTitle:
                "Web razvoj",

            serviceWebText:
                "Moderni i responzivni web sajtovi koji profesionalno predstavljaju vaš posao i pretvaraju posetioce u stvarne upite.",

            serviceProductTitle:
                "Digitalni proizvodi",

            serviceProductText:
                "Od početne ideje do funkcionalnog digitalnog proizvoda — planiranje, dizajn, razvoj i lansiranje.",

            serviceSeoTitle: "SEO optimizacija",
            serviceSeoText:
                "Tehnički i on-page SEO, metapodaci, podešavanje indeksiranja i Search Console-a, uz poboljšanja performansi koja pomažu da korisnici lakše pronađu vaš sajt.",

            proofLabel:
                "NAŠ PRISTUP",

            proofLine1:
                "MANJE PRIČE.",

            proofLine2:
                "VIŠE STVARANJA.",

            proofText:
                "Verujemo da kvalitetan rad najbolje govori sam za sebe. Umesto da vam pričamo šta možemo napraviti, radije ćemo vam pokazati.",

            featuredProject:
                "IZDVOJENI PROJEKAT",

            retroloopDescription:
                "Native Android aplikacija za retro gaming, razvijena od temelja sa sopstvenim interfejsom, podrškom za kontrolere, save state sistemom, bibliotekama igara i native emulator integracijom.",

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
                "KARTALOVIC LABS je nezavisni digitalni studio fokusiran na Android aplikacije, moderne web sajtove, digitalne proizvode i SEO optimizaciju. Biramo praktična rešenja, jasnu komunikaciju i proizvode koji stvarno rade, bez nepotrebnog komplikovanja.",

            workTogether:
                "ZAPOČNIMO RAZGOVOR",

            contactLine1:
                "IMATE IDEJU?",

            contactLine2:
                "ISPRIČAJTE NAM",

            contactLine3:
                "O NJOJ.",

            contactDescription:
                "Ne morate imati tehničku specifikaciju niti gotov plan. Jednostavno nam svojim rečima opišite šta želite napraviti.",

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
                "Ne morate imati gotov plan, tehničku specifikaciju niti znanje programiranja. Svojim rečima nam opišite šta želite napraviti.",

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
                "Početni razgovor, procena projekta i osnovne informacije su besplatni — bez obaveze da nastavite saradnju sa nama.",

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
                "Još ne znam",

            formBudget:
    "Okvirni budžet",

formBudgetOptional:
    "Opciono",

formBudgetUnder500:
    "Do 500 €",

formBudget5001000:
    "500 € – 1.000 €",

formBudget10002500:
    "1.000 € – 2.500 €",

formBudget25005000:
    "2.500 € – 5.000 €",

formBudget5000Plus:
    "5.000 €+",

formBudgetUnknown:
    "Još ne znam",

            formMessage:
                "Opišite svoju ideju",

            formMessagePlaceholder:
                "Opišite svoju ideju svojim rečima. Nije vam potrebno tehničko znanje.",

            formHelper:
                "Tehničko znanje nije potrebno. Dovoljan je jednostavan opis vaše ideje.",

            formSubmit:
                "Pošaljite upit",

            formPrivacy:
                "Vaši podaci će biti korišćeni samo za odgovor na vaš upit.",

            formSending:
                "Šalje se...",

            formSuccess:
                "Hvala. Vaš upit je uspešno poslat. Javićemo vam se uskoro.",

            formError:
                "Došlo je do greške pri slanju. Pokušajte ponovo ili nam pišite direktno na kartaloviclabs@gmail.com.",

            contactFinalSmall:
                "KARTALOVIC LABS",

            contactFinalLine1:
                "VAŠA IDEJA MOŽE BITI",

            contactFinalLine2:
                "NAŠ SLEDEĆI PROJEKAT.",

            privacy:
                "Privatnost",

            imprint:
                "Impresum",

            /* META / ACCESSIBILITY / REMAINING UI */

            metaTitleHome:
                "Razvoj Android aplikacija i web sajtova | KARTALOVIC LABS",

            metaDescHome:
                "KARTALOVIC LABS razvija native Android aplikacije, moderne web sajtove i digitalne proizvode po meri — od prve ideje, preko dizajna i razvoja, do lansiranja.",

            metaTitleContact:
                "Kontakt | KARTALOVIC LABS — razgovarajmo o projektu",

            metaDescContact:
                "Opišite nam svoju ideju za Android aplikaciju, web sajt ili digitalni proizvod. Početni razgovor i procena su besplatni i bez obaveze.",

            ariaHome: "KARTALOVIC LABS početna",
            ariaMainNav: "Glavna navigacija",
            ariaFooterNav: "Navigacija u podnožju",
            ariaLanguage: "Jezik",
            menuOpen: "Otvori meni",
            menuClose: "Zatvori meni",

            servicesHeadingDigital: "DIGITALNI",
            servicesHeadingProducts: "PROIZVODI",

            statementIdea: "IDEJA.",
            statementBuild: "RAZVOJ.",
            statementLaunch: "LANSIRANJE.",

            retroloopImageAlt:
                "RetroLoop Android aplikacija: igra, početni ekran i podešavanje kontrolera",

            retroloopControllerTitle: "KONTROLERI",
            retroloopControllerText: "PRILAGOĐENO MAPIRANJE",
            retroloopSaveText: "IGRAJTE BILO KADA",
            retroloopPatchText: "UGRAĐENO",

            principleIdeas: "IDEJE",
            principleStrategy: "STRATEGIJA",
            principleDesign: "DIZAJN",
            principleDevelopment: "RAZVOJ",
            principleLaunch: "LANSIRANJE",

            sideEurope: "EVROPA",
            sideAnd: "I",
            sideBeyond: "ŠIRE.",

            formSeo: "SEO optimizacija",
            formPrivacyLink: "Politika privatnosti",

            /* PORTFOLIO — OD SLOVA DO PRIČE */

            osdpLabel:
                "EDUKATIVNI WEB SAJT",

            statusInDevelopment:
                "U razvoju",

            osdpDescription:
                "Edukativni blog za roditelje i učenike osnovnih i srednjih škola, posvećen učenju, čitanju, pisanju, emocijama i motivaciji. KARTALOVIC LABS dizajnira i razvija sajt za ovaj zaseban edukativni brend — miran, čitljiv dizajn i sadržaj jasno organizovan po temama.",

            osdpStatusNote:
                "Sajt je u razvoju. Prvi članci su trenutno u pripremi.",

            visitWebsite:
                "Posetite sajt",

            osdpImageAlt:
                "Početna strana edukativnog bloga „Od slova do priče“ u prozoru pregledača",

            osdpTopic1:
                "ŠKOLA I EMOCIJE",

            osdpTopic2:
                "ČITANJE I PISANJE",

            osdpTopic3:
                "SAVETI RODITELJIMA",

            osdpTopic4:
                "MOTIVACIJA",

            osdpTopicLabel:
                "TEMA BLOGA",

            copyright: "© 2026 KARTALOVIC LABS. Sva prava zadržana."
        }
    };


    /* =====================================================
       LANGUAGE SYSTEM
       ===================================================== */

    const SUPPORTED_LANGUAGES =
        ["en", "de", "sr"];

    const LANGUAGE_STORAGE_KEY =
        "kartalovicLabsLanguage";


    /* Attributes translated from data-i18n-* keys */

    const translatedAttributes = {
        "data-i18n-placeholder": "placeholder",
        "data-i18n-aria-label": "aria-label",
        "data-i18n-alt": "alt",
        "data-i18n-content": "content"
    };


    const languageButtons =
        document.querySelectorAll(".lang-btn");


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
            /* Language still applies for this page view. */
        }

    }


    let currentLanguage =
        readStoredLanguage() || "en";


    function setLanguage(language) {

        if (!isSupportedLanguage(language)) {
            language = "en";
        }

        const selected =
            translations[language];


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


        /* PLACEHOLDERS, ARIA LABELS, ALT TEXT, META CONTENT */

        Object
            .entries(translatedAttributes)
            .forEach(([sourceAttribute, attribute]) => {

                document
                    .querySelectorAll(`[${sourceAttribute}]`)
                    .forEach(element => {

                        const key =
                            element.getAttribute(sourceAttribute);

                        if (selected[key]) {

                            element.setAttribute(
                                attribute,
                                selected[key]
                            );

                        }

                    });

            });


        /* ACTIVE LANGUAGE BUTTON */

        languageButtons.forEach(button => {

            const isActive =
                button.dataset.lang === language;

            button.classList.toggle(
                "active",
                isActive
            );

            button.setAttribute(
                "aria-pressed",
                String(isActive)
            );

        });


        updateMenuToggleLabel();


        /* HTML LANGUAGE */

        document.documentElement.lang =
            language === "sr"
                ? "sr-Latn"
                : language;


        /* SAVE LANGUAGE */

        storeLanguage(language);

    }


    /* Reads the toggle state from the DOM so it can run before the
       mobile menu section below is initialised. */

    function updateMenuToggleLabel() {

        const toggle =
            document.querySelector(".menu-toggle");

        if (!toggle) {
            return;
        }

        const selected =
            translations[currentLanguage];

        const isOpen =
            toggle.getAttribute("aria-expanded") === "true";

        toggle.setAttribute(
            "aria-label",
            isOpen
                ? selected.menuClose
                : selected.menuOpen
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

    const projectShowcase =
        document.querySelector(
            ".project-showcase"
        );


    window.addEventListener(
        "scroll",
        () => {

            if (
                !projectShowcase ||
                window.innerWidth < 800 ||
                prefersReducedMotion()
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


        /* state: "success" | "error" | null. The message keeps its
           data-i18n key, so switching language re-translates it. */

        function showFormMessage(state) {

            if (!formMessage) {
                return;
            }

            formMessage.classList.remove(
                "is-success",
                "is-error"
            );

            if (!state) {

                formMessage.removeAttribute("data-i18n");

                formMessage.textContent = "";

                return;

            }

            const key =
                state === "success"
                    ? "formSuccess"
                    : "formError";

            formMessage.setAttribute(
                "data-i18n",
                key
            );

            formMessage.textContent =
                translations[currentLanguage][key];

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
                        translations[currentLanguage].formSending;

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
                            translations[currentLanguage].formSubmit;

                    }

                }

            }
        );

    }

});
