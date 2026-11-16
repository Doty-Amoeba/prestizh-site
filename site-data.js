/* ============================================================================
 *  site-data.js — данные сайта (тексты, цены, контакты, цвета).
 *  Меняй тексты и цены прямо здесь, потом сохрани файл и обнови страницу (F5).
 *  index.html, styles.css и app.js трогать не нужно.
 * ==========================================================================*/

const PALETTES = {
  "nails": {
    "bg": "#fff8fb",
    "surface": "#ffffff",
    "surfaceAlt": "#fdeef5",
    "text": "#3b2b36",
    "muted": "#8a7783",
    "border": "rgba(59,43,54,0.10)",
    "primary": "#e5629b",
    "primaryDark": "#c3437a",
    "accent": "#f0a6c6",
    "gradientFrom": "#f0a6c6",
    "gradientTo": "#a78bfa"
  }
};

const EASY = {
  "mode": "light",
  "heroStyle": "gradient",
  "showGallery": true,
  "showTestimonials": true,
  "showStats": true
};

const SITE = {
  "meta": {
    "title": "Салон красоты «Престиж» в Ярославле — Трефолева, 21А",
    "description": "Стрижки, окрашивание, маникюр, педикюр, косметология, эпиляция и массаж в центре Ярославля. 4,4 ★ — средняя оценка гостей. Пн–Сб с 09:00 до 21:00, запись онлайн в Telegram.",
    "emoji": "П"
  },
  "brand": {
    "name": "Престиж",
    "logoEmoji": "П",
    "slogan": "салон красоты · Ярославль"
  },
  "nav": [
    {
      "text": "Услуги",
      "href": "#services"
    },
    {
      "text": "Мастера",
      "href": "#masters"
    },
    {
      "text": "Работы",
      "href": "#gallery"
    },
    {
      "text": "Отзывы",
      "href": "#reviews"
    },
    {
      "text": "Контакты",
      "href": "#contacts"
    }
  ],
  "hero": {
    "badge": "Ярославль · ул. Трефолева, 21А · 250 м от площади Волкова",
    "title": "Красота начинается\nс заботы о себе",
    "subtitle": "Стрижки и окрашивание, маникюр и педикюр, ресницы, брови, косметология, эпиляция и массаж — всё в одном салоне в самом центре города. Пн–Сб с 09:00 до 21:00.",
    "primaryButton": {
      "text": "Записаться",
      "href": "#booking"
    },
    "secondaryButton": {
      "text": "Услуги и цены",
      "href": "#services"
    },
    "cardImage": "",
    "cardEmoji": "<svg viewBox='0 0 24 24' width='72' height='72' fill='none' stroke='#ffffff' stroke-width='1.1' stroke-linejoin='round' aria-hidden='true'><path d='M12 3.4l2.1 6.2 6.2 2.1-6.2 2.1L12 20l-2.1-6.2L3.7 11.7l6.2-2.1z'/><path d='M18.9 4.2l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5z' opacity='.75'/></svg>",
    "cardTitle": "Мы работаем сегодня",
    "cardNote": "Позвоните — подберём мастера и удобное время",
    "primaryButtonHref": "#booking"
  },
  "stats": [
    {
      "value": 4.4,
      "suffix": " ★",
      "label": "средняя оценка гостей",
      "decimals": 1
    },
    {
      "value": 145,
      "suffix": "",
      "label": "оценок гостей"
    },
    {
      "value": 44,
      "suffix": "",
      "label": "отзыва гостей"
    },
    {
      "value": 12,
      "suffix": " ч",
      "label": "открыты каждый день"
    }
  ],
  "about": {
    "title": "Почему в «Престиж» возвращаются",
    "subtitle": "Небольшой салон в Кировском районе, где помнят ваши пожелания — и вашу длину волос.",
    "features": [
      {
        "emoji": "<svg viewBox='0 0 24 24' width='26' height='26' fill='none' stroke='currentColor' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M4.2 5.4h15.6v10.4H9.4L4.2 19.6z'/><path d='M8 9.4h7.8M8 12.4h5.2'/></svg>",
        "title": "Мастера, которые слышат",
        "text": "Перед работой обсуждаем результат: покажем, что получится, и предложим уход дома."
      },
      {
        "emoji": "<svg viewBox='0 0 24 24' width='26' height='26' fill='none' stroke='currentColor' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><circle cx='8.3' cy='8.3' r='2.5'/><circle cx='15.7' cy='8.3' r='2.5'/><circle cx='8.3' cy='15.7' r='2.5'/><circle cx='15.7' cy='15.7' r='2.5'/></svg>",
        "title": "Всё в одном месте",
        "text": "Волосы, ногти, ресницы, брови, кожа и тело — не нужно ездить по городу за каждым делом."
      },
      {
        "emoji": "<svg viewBox='0 0 24 24' width='26' height='26' fill='none' stroke='currentColor' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M12 3.3 19 6v6.1c0 4-3 6.6-7 8-4-1.4-7-4-7-8V6z'/><path d='M9.2 12.2l1.9 1.9 3.7-3.9'/></svg>",
        "title": "Чистота и стерильность",
        "text": "Инструмент обрабатывается после каждого гостя, одноразовые материалы — по умолчанию."
      },
      {
        "emoji": "<svg viewBox='0 0 24 24' width='26' height='26' fill='none' stroke='currentColor' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M4.6 8.4h10.8v4.7a4.4 4.4 0 0 1-4.4 4.4H9a4.4 4.4 0 0 1-4.4-4.4z'/><path d='M15.4 9.7h1.7a2.4 2.4 0 0 1 0 4.8h-1.7'/><path d='M4.2 20.6h12.6'/></svg>",
        "title": "Уют и вкусный кофе",
        "text": "Гости пишут именно об этом: спокойная атмосфера, чисто, уютно и кофе в подарок ожиданию."
      }
    ]
  },
  "services": {
    "title": "Услуги и цены",
    "subtitle": "Прайс на основные услуги. Итоговую стоимость мастер подтверждает до начала работы.",
    "items": [
      {
        "emoji": "01",
        "name": "Женская стрижка",
        "price": "1 000 – 1 500 ₽",
        "time": "40–60 мин",
        "text": "Стрижка с учётом формы лица и типа волос, укладка после.",
        "badge": "Хит"
      },
      {
        "emoji": "02",
        "name": "Мужская стрижка",
        "price": "1 000 – 3 000 ₽",
        "time": "40 мин",
        "text": "Классика, фейд, моделирование бороды — по договорённости с мастером."
      },
      {
        "emoji": "03",
        "name": "Окрашивание волос",
        "price": "по длине волос",
        "time": "2–3 ч",
        "text": "Тонирование, блонд, сложные техники. Гости хвалят спасение волос после неудачных окрашиваний."
      },
      {
        "emoji": "04",
        "name": "Маникюр и покрытие гель-лаком",
        "price": "по прайсу салона",
        "time": "1–1,5 ч",
        "text": "Аппаратный маникюр, укрепление, дизайн и арт-роспись ногтей."
      },
      {
        "emoji": "05",
        "name": "Педикюр",
        "price": "по прайсу салона",
        "time": "1–1,5 ч",
        "text": "Аккуратная обработка стопы плюс покрытие — можно в паре с маникюром."
      },
      {
        "emoji": "06",
        "name": "Наращивание ресниц",
        "price": "по прайсу салона",
        "time": "1,5–2 ч",
        "text": "Классика, 2D–3D объёмы, ламинирование. Подбираем изгиб под разрез глаз."
      },
      {
        "emoji": "07",
        "name": "Брови: коррекция и окрашивание",
        "price": "по прайсу салона",
        "time": "30–45 мин",
        "text": "Форма по типу лица, окрашивание и укладка. Плюс татуаж и перманентный макияж."
      },
      {
        "emoji": "08",
        "name": "Косметология и уход за лицом",
        "price": "по прайсу салона",
        "time": "1 ч",
        "text": "Чистка, пилинг и уходовые процедуры — с оценкой состояния кожи."
      },
      {
        "emoji": "09",
        "name": "Эпиляция: воск и шугаринг",
        "price": "по зоне",
        "time": "15–60 мин",
        "text": "Восковая, энзимная депиляция, шугаринг. Также фото- и лазерная эпиляция."
      },
      {
        "emoji": "10",
        "name": "Массаж",
        "price": "по прайсу салона",
        "time": "45–60 мин",
        "text": "Расслабляющий, лимфодренажный, спортивный и антицеллюлитный — у мастера с большим стажем."
      }
    ],
    "note": "Точные цены на каждую процедуру уточняйте по телефону: +7 (4852) 64-00-15"
  },
  "masters": {
    "title": "Мастера",
    "subtitle": "Те, кого гости называют по имени в отзывах.",
    "items": [
      {
        "emoji": "А",
        "name": "Анна Наумова",
        "role": "Парикмахер-стилист",
        "text": "«Сразу поняла, какую стрижку я хочу» — из отзыва гостьи.",
        "image": ""
      },
      {
        "emoji": "Н",
        "name": "Наталья Ш.",
        "role": "Колорист",
        "text": "Спасла волосы после неудачного окрашивания в блонд. Теперь только к ней.",
        "image": ""
      },
      {
        "emoji": "Л",
        "name": "Любовь Медведева",
        "role": "Мастер массажа",
        "text": "Профессионал с огромным стажем — гости ходят годами.",
        "image": ""
      }
    ]
  },
  "gallery": {
    "title": "Работы",
    "subtitle": "Свежие фото работ, акции и свободные окна — в нашем Telegram. Подпишись, чтобы не пропустить.",
    "items": [
      {
        "emoji": "<svg viewBox='0 0 24 24' width='54' height='54' fill='none' stroke='#ffffff' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><circle cx='6.2' cy='6.2' r='2.4'/><circle cx='6.2' cy='17.8' r='2.4'/><path d='M8.2 7.8 19.4 17.6M8.2 16.2 19.4 6.4'/></svg>",
        "image": "",
        "caption": "Женская стрижка"
      },
      {
        "emoji": "<svg viewBox='0 0 24 24' width='54' height='54' fill='none' stroke='#ffffff' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M12 3.8c3.3 4 5.4 6.9 5.4 9.4A5.4 5.4 0 0 1 12 18.6a5.4 5.4 0 0 1-5.4-5.4c0-2.5 2.1-5.4 5.4-9.4z'/><path d='M9.6 13.4a2.5 2.5 0 0 0 2.4 2.4'/></svg>",
        "image": "",
        "caption": "Окрашивание в блонд"
      },
      {
        "emoji": "<svg viewBox='0 0 24 24' width='54' height='54' fill='none' stroke='#ffffff' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M9.4 9.6h5.2v9.8H9.4z'/><path d='M10.8 9.6V5.4h2.4v4.2'/><path d='M9.4 13h5.2'/></svg>",
        "image": "",
        "caption": "Маникюр с дизайном"
      },
      {
        "emoji": "<svg viewBox='0 0 24 24' width='54' height='54' fill='none' stroke='#ffffff' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M2.9 12S6.5 6.9 12 6.9 21.1 12 21.1 12 17.5 17.1 12 17.1 2.9 12 2.9 12z'/><circle cx='12' cy='12' r='2.5'/></svg>",
        "image": "",
        "caption": "Наращивание ресниц"
      },
      {
        "emoji": "<svg viewBox='0 0 24 24' width='54' height='54' fill='none' stroke='#ffffff' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M3.6 13.6c2.7-3.5 5.7-5.2 9.3-5.2 3 0 5.4 1 6.9 2.2'/><path d='M7.6 15.4c.9-.9 2-1 3.1-.4 1 .5 1.8 1.3 2.6 2.2'/><path d='M15.9 17.2c.9-.9 1.9-1.4 3-1.5'/></svg>",
        "image": "",
        "caption": "Коррекция бровей"
      },
      {
        "emoji": "<svg viewBox='0 0 24 24' width='54' height='54' fill='none' stroke='#ffffff' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M4.4 16.2c2.2-2.6 4.9-3.9 7.6-3.9s5.4 1.3 7.6 3.9'/><path d='M4.4 10.6c2.2-2.6 4.9-3.9 7.6-3.9s5.4 1.3 7.6 3.9'/></svg>",
        "image": "",
        "caption": "Массаж и уход"
      }
    ]
  },
  "testimonials": {
    "title": "Отзывы",
    "subtitle": "4,4 из 5 по 145 оценкам гостей. Цитаты — из настоящих отзывов.",
    "items": [
      {
        "name": "Гость салона",
        "stars": 5,
        "text": "Хочу оставить отзыв о мастере Анне Наумовой: приятная, вежливая и профессиональная. Сразу поняла, какую стрижку я хочу, всё сделала аккуратно и с вниманием к деталям. Обязательно приду ещё."
      },
      {
        "name": "Гость салона",
        "stars": 5,
        "text": "Красивый салон в самом центре, удобно добираться. Мастер с золотыми руками Наталья Ш. просто спасла мои волосы после неудачной окраски в блонд. Теперь только к ней!"
      },
      {
        "name": "Гость салона",
        "stars": 5,
        "text": "Хожу давно к специалисту по массажу Любовь Валентиновне. Профессионал с огромным стажем! В салоне всегда чисто и уютно, очень вкусный кофе. Много разных услуг."
      }
    ]
  },
  "contacts": {
    "title": "Как нас найти",
    "subtitle": "Центр Ярославля, Кировский район. Три минуты пешком от площади Волкова.",
    "address": "г. Ярославль, ул. Трефолева, 21А",
    "addressShort": "ул. Трефолева, 21А",
    "phone": "+7 (4852) 64-00-15",
    "phoneLink": "+74852640015",
    "email": "",
    "hours": [
      {
        "days": "Пн – Сб",
        "time": "09:00 – 21:00"
      },
      {
        "days": "Вс",
        "time": "выходной"
      }
    ],
    "map": {
      "enabled": true,
      "lat": 57.626842,
      "lon": 39.887072,
      "zoom": 16,
      "height": 420,
      "title": "Салон красоты «Престиж», Трефолева 21А"
    },
    "socials": [
      {
        "emoji": "<svg viewBox='0 0 24 24' width='17' height='17' fill='currentColor' aria-hidden='true'><path d='M21.9 4.3 18.7 19c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-4.9 8.8-8c.4-.3-.1-.5-.6-.2L6.4 12.1 1.7 10.6c-1-.3-1-1 .2-1.5l18.5-7.1c.9-.3 1.6.2 1.5 1.3z'/></svg>",
        "text": "Записаться в Telegram",
        "link": "https://t.me/"
      },
      {
        "emoji": "",
        "text": "+7 (4852) 64-00-15",
        "link": "tel:+74852640015"
      }
    ]
  },
  "booking": {
    "title": "Запишитесь на удобное время",
    "subtitle": "Выберите услугу, мастера и удобное время прямо в Telegram — бот покажет свободные окна и запишет за 30 секунд. Круглосуточно, без звонков и ожидания на линии.",
    "telegram": "https://t.me/",
    "buttonText": "Записаться в Telegram",
    "note": "Или позвоните администратору: +7 (4852) 64-00-15"
  },
  "footer": {
    "text": "© 2026 Салон красоты «Престиж», Ярославль. Красота с заботой.",
    "note": "демо-сайт, собранный конструктором landing-bot-constructor"
  },
  "animations": {
    "enabled": true,
    "style": "up",
    "distance": 40,
    "duration": 700,
    "stagger": 90,
    "parallax": true,
    "parallaxStrength": 0.15,
    "counters": true,
    "scrollProgress": true,
    "smoothScroll": true
  },
  "fonts": {
    "google": true,
    "heading": "Playfair Display",
    "body": "Manrope",
    "baseSize": 17
  },
  "shape": {
    "radius": 18,
    "buttonRadius": 999,
    "cardBorder": true
  },
  "palette": "nails",
  "colorsOverride": {
    "primary": "#c65a86",
    "primaryDark": "#9d3d64",
    "accent": "#a97a8c",
    "gradientFrom": "#e9a7c3",
    "gradientTo": "#b9a2e8"
  }
};

/* Конец данных сайта. */
