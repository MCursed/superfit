// splide
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.gym__slider', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    pagination: false,
    gap: '20px',
    breakpoints: {
      920: {
        perPage: 2
      },
      760: {
        perPage: 1,
      },
      460: {
        arrows: false
      },

    }
  }).mount();
});


// glightbox
const lightbox = GLightbox({
  selector: '.glightbox',
  touchNavigation: true,
  loop: true,

});


// burger menu
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.mobile__inner');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  burger.classList.toggle('is-active');
  document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('.mobile__nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    burger.classList.remove('is-active');
    document.body.classList.remove('no-scroll');

  });
})

// HEADER SCROLL EFFECT
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header_active');
  } else {
    header.classList.remove('header_active');
  }
});


// LANGUAGE SWITCHER (UA / EN)
const translations = {
  ua: {
    // MENU
    menuAbout: "Про нас",
    menuFeatures: "Переваги",
    menuGallery: "Галерея",
    menuContacts: "Контакти",
    // HERO
    heroTitle: "Відкрийте для себе Superfit, де ваші прагнення перетворюються на досягнення!",

    // ABOUT
    aboutTitle: "Ласкаво Просимо До Тренажерного Залу Superfit!",
    aboutText1: "У Superfit ми прагнемо допомогти вам досягти ваших фітнес-цілей і вести більш здоровий і активний спосіб життя. Наші найсучасніші засоби, досвідчені тренери та різноманітні фітнес-програми роблять нас ідеальним місцем для любителів фітнесу будь-якого рівня.",
    aboutText2: "Наша команда сертифікованих тренерів захоплена фітнесом і віддана вашому успіху. Незалежно від того, чи ви новачок у тренуваннях, чи досвідчений спортсмен, наші тренери тут, щоб надати індивідуальні рекомендації, створити індивідуальні плани тренувань і дати цінні поради для досягнення максимальних результатів.",


    // BENEFITS
    benefitsTitle: "Наші Переваги:",
    benefitsText1: "Ми віримо, що різноманітність є ключем до підтримки мотивації та досягнення стійких результатів. Саме тому ми пропонуємо широкий вибір фітнес-програм, включаючи високоінтенсивні інтервальні тренування (HIIT), силові тренування, групові заняття фітнесом, йогу та багато іншого. Незалежно від ваших уподобань чи фітнес-цілей, у нас є програма, яка вам підійде.",
    benefitsText2: "Приєднуйтеся до спільноти однодумців, які поділяють вашу відданість фітнесу. Наш тренажерний зал — це не просто місце для тренувань, а простір для спілкування, пошуку мотивації та святкування ваших успіхів. Незалежно від того, чи ви займаєтеся на груповому занятті, чи працюєте над собою у тренажерному залі, вас завжди оточуватиме підтримуюча та надихаюча атмосфера.",
    benefitsText3: "У нас ви знайдете сучасний і добре обладнаний тренажерний зал, який задовольнить усі ваші фітнес-потреби. Від найсучасніших кардіотренажерів до повного набору вільних ваг і обладнання для силових тренувань — у нас є все необхідне для створення ефективної та збалансованої програми тренувань.",

    // GYM
    gymTitle: "Простір залу:",
    gymImg1: "Інтер'єр сучасного тренажерного залу Superfit",
    gymImg2: "Кардіо зона з біговими доріжками",
    gymImg3: "Зона силових тренажерів",
    gymImg4: "Кардіо та силова зона сучасного тренажерного залу",
    gymImg5: "Простір тренажерного залу з гантелями та тренажерами",
    gymImg6: "Люди займаються фітнесом у тренажерному залі",
    gymImg7: "Групове тренування з гантелями",
    gymImg8: "Силове тренування з гантелями та штангою",
    gymImg9: "Відпочинкова зона спортзалу",
    gymImg10: "Відвідувачі спортзалу після тренування",

    // FEATURES
    feature1Title: "Вирушайте до величі",
    feature1Text: "Ваша фітнес-мандрівка починається зараз. Відчуйте трансформацію, яку можуть принести відданість, керівництво та спільнота. Приєднуйтесь до тренажерного залу Superfit і відкрийте найкращу версію себе. Ваші цілі — наша місія, і разом ми подолаємо ваші межі та відсвяткуємо кожну перемогу.",

    feature2Title: "Нова гнучкість",
    feature2Text: "Ми розуміємо вимоги сучасного життя, тому наші плани членства розроблені так, щоб адаптуватися до вашого розкладу. Оберіть тривалість членства, яка найкраще відповідає вашим потребам, незалежно від того, чи ви налаштовані на довгостроковий результат, чи прагнете досягти короткострокової мети.",


    feature3Title: "Підживлюйте свою мотивацію",
    feature3Text: "У Superfit ви не просто відвідувач — ви частина дружньої та підтримуючої спільноти. Тренуйтеся разом з іншими любителями фітнесу, діліться історіями успіху та знаходьте натхнення в кожному тренуванні. Наш спортзал — це місце, де народжується дружба і досягаються великі цілі.",


    feature4Title: "Керівництво від професіоналів",
    feature4Text: "Наша команда досвідчених тренерів не лише володіє глибокими знаннями, а й щиро захоплюється зміною життя людей через фітнес. Незалежно від того, чи ви хочете покращити фізичну форму, підвищити витривалість або підготуватися до певного виду спорту, наші тренери створять персональну програму, яка допоможе вам досягти ваших цілей.",

    // CTA
    ctaText: "Ми розуміємо, що життя може бути насиченим, тому пропонуємо гнучкі варіанти членства. Оберіть план, який найкраще відповідає вашому розкладу, способу життя та фітнес-цілям.",

    // SIGNUP
    signupTitle: "Почніть свій шлях у Superfit",
    nameLabel: "Ім’я",
    namePlaceholder: "Ваше ім’я",
    phoneLabel: "Телефон",
    phonePlaceholder: "+38...",
    messageLabel: "Є питання? (не обов’язково)",
    messagePlaceholder: "Напишіть тут...",
    submitBtn: "Відправити",

    // FOOTER
    footerTitle: "Контакти",
    addressText: "вулиця Братиславська, 14-Б, Київ, Україна, 02166",
    phoneText: "+38 093 64 73 21",
    emailText: "info@superfit.ua",
    copyright: "© 2026 Superfit. Усі права захищені.",
    privacy: "Політика конфіденційності"
  },

  en: {
    // MENU
    menuAbout: "About",
    menuFeatures: "Features",
    menuGallery: "Gallery",
    menuContacts: "Contact",
    // HERO
    heroTitle: "Discover Superfit where your goals become achievements!",

    // ABOUT
    aboutTitle: "Welcome to Superfit Gym!",
    aboutText1: "At Superfit, we are dedicated to helping you achieve your fitness goals and live a healthier, more active lifestyle. Our state-of-the-art facilities, experienced trainers, and wide variety of fitness programs make us the perfect destination for fitness enthusiasts of all levels.",

    aboutText2: "Our team of certified trainers is passionate about fitness and committed to your success. Whether you're just starting your fitness journey or you're an experienced athlete, our trainers are here to provide personalized guidance, create customized workout plans, and offer valuable advice to help you achieve the best possible results.",

    // BENEFITS
    benefitsTitle: "Our Benefits:",
    benefitsText1: "We believe that variety is the key to staying motivated and achieving long-lasting results. That's why we offer a wide range of fitness programs, including High-Intensity Interval Training (HIIT), strength training, group fitness classes, yoga, and much more. Whatever your fitness goals or preferences may be, we have a program that's right for you.",
    benefitsText2: "Become part of a community of like-minded people who share your passion for fitness. Our gym is more than just a place to work out — it's a place to connect, stay motivated, and celebrate your achievements. Whether you're sweating through a group class or pushing your limits in the weight room, you'll always be surrounded by a supportive and inspiring atmosphere.",
    benefitsText3: "Our modern, fully equipped fitness center has everything you need to reach your goals. From state-of-the-art cardio machines to a complete selection of free weights and strength-training equipment, you'll find everything required to build an effective and well-balanced workout routine.",



    // GYM
    gymTitle: "Gym Space:",
    gymImg1: "Modern gym interior",
    gymImg2: "Cardio zone with treadmills",
    gymImg3: "Strength training area",
    gymImg4: "Modern cardio and strength zone",
    gymImg5: "Gym space with dumbbells and machines",
    gymImg6: "People working out in gym",
    gymImg7: "Group dumbbell training session",
    gymImg8: "Strength training with dumbbells and barbell",
    gymImg9: "Relax area in gym",
    gymImg10: "Gym visitors after workout",


    // FEATURES
    feature1Title: "Aim for greatness",
    feature1Text: "Your fitness journey starts today. Experience the transformation that dedication, expert guidance, and a supportive community can bring. Join Superfit Gym and discover the best version of yourself. Your goals are our mission, and together we'll push your limits and celebrate every success.",

    feature2Title: "New flexibility",
    feature2Text: "We understand the demands of modern life, which is why our membership plans are designed to fit your schedule. Choose the membership option that works best for you, whether you're committed to a long-term lifestyle change or focused on achieving a short-term fitness goal.",


    feature3Title: "Fuel your motivation",
    feature3Text: "At Superfit, you're more than just a member — you're part of a supportive fitness community. Train alongside like-minded people, share your success stories, and stay inspired every step of the way. Our gym is a place where friendships are built and goals become reality.",

    feature4Title: "Professional guidance",
    feature4Text: "Our experienced trainers are not only highly qualified but also passionate about transforming lives through fitness. Whether you're looking to improve your physique, increase endurance, or train for a specific sport, our coaches will create a personalized program to help you achieve your goals.",

    // CTA
    ctaText: "We understand that life can be busy, which is why we offer flexible membership options. Choose the plan that best fits your schedule, lifestyle, and fitness goals.",

    // SIGNUP
    signupTitle: "Start your journey at Superfit",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    phoneLabel: "Phone",
    phonePlaceholder: "+38...",
    messageLabel: "Have a question? (optional)",
    messagePlaceholder: "Write here...",
    submitBtn: "Send",

    // FOOTER
    footerTitle: "Contacts",
    addressText: "14-B Bratislavska Street, Kyiv, Ukraine, 02166",
    phoneText: "+38 093 64 73 21",
    emailText: "info@superfit.ua",
    copyright: "© 2026 Superfit. All rights reserved.",
    privacy: "Privacy Policy"
  }
};

document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll("[data-lang]");
  const textElements = document.querySelectorAll("[data-key]");
  const inputs = document.querySelectorAll("[data-placeholder]");

  function setLang(lang) {

    if (!translations[lang]) return;

    document.body.classList.add("is-changing");

    setTimeout(() => {

      // TEXT
      textElements.forEach(el => {
        const key = el.dataset.key;
        const value = translations?.[lang]?.[key];

        if (value !== undefined) {
          el.textContent = value;
        }
      });

      // PLACEHOLDER
      inputs.forEach(el => {
        const key = el.dataset.placeholder;
        const value = translations?.[lang]?.[key];

        if (value !== undefined) {
          el.setAttribute("placeholder", value);
        }
      });
      // ALT IMG
      document.querySelectorAll("[data-alt]").forEach(img => {
        const key = img.dataset.alt;
        const value = translations?.[lang]?.[key];

        if (value) {
          img.alt = value;
        }
      });

      // ACTIVE BUTTON
      buttons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
      });

      localStorage.setItem("lang", lang);

      document.documentElement.lang = lang === "ua" ? "uk" : "en";

      requestAnimationFrame(() => {
        document.body.classList.remove("is-changing");
      });

    }, 150);
  }

  // EVENTS
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
    });
  });

  // START
  const savedLang = localStorage.getItem("lang");
  setLang(savedLang === "en" || savedLang === "ua" ? savedLang : "ua");

});


 // map

const mapPreview = document.querySelector('.map-preview');

if (mapPreview) {
    mapPreview.addEventListener('click', () => {
        mapPreview.classList.add('map-open');

        mapPreview.innerHTML = `
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1069.2517715294675!2d30.532131689028986!3d50.40153354347924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf00386ab139%3A0xed66fc77f7658154!2z0JrRltC80L3QsNGC0LAgODIzICjQkNC00LzRltC90ZbRgdGC0YDQsNGG0ZbRjyk!5e0!3m2!1sde!2sua!4v1758693463204!5m2!1sde!2sua"
                width="600"
                height="450"
                style="border:0;"
                loading="lazy">
            </iframe>
        `;
    });
}