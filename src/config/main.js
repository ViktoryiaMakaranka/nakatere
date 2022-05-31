export default {
  header: {
    bgImageUrl: require('@/assets/header/main.jpg'),
    title: 'АРЕНДА КАТЕРОВ В САНКТ-ПЕТЕРБУРГЕ',
    description: 'Наша компания всегда готова организовать для Вас лучшую водную прогулку, так как мы - эксперты в сфере водного туризма и имеем многолетний опыт работы. Только у нас Вы сможете взять в аренду как катер с капитаном для традиционного катания, так и без капитана для самостоятельного управления.',
    links: [{
      linkText: 'Прогулка с капитаном',
      linkUrl: '/about'
    }, {
      linkText: 'Аренда катера без капитана',
      linkUrl: '/about'
    }]
  },
  infoBlocks: {
    items: [
      { text: 'У нас Вы можете в удобное для вас время забронировать прогулку на катере, воспользовавшись актуальным расписанием на сайте, а билет и чек мгновенно придет Вам на почту. Оформляя заказ онлайн, Вы потратите намного меньше времени и сил по сравнению с бронированием по телефону.', title: 'ОНЛАЙН РАСПИСАНИЕ И ЭЛЕКТРОННЫЙ БИЛЕТ', icon: 'mdi-remote-desktop' },
      { text: 'Бронируя катер у нас, Вы можете быть точно уверены в том, что катание состоится, катер будет подан вовремя и без задержек. Мы подходим к записи гостей с особой ответственностью, поэтому работаем организовано и с энтузиазмом.', title: 'ГАРАНТИЯ БРОНИРОВАНИЯ', icon: 'mdi-shield-check-outline' },
      { text: 'Мы работаем только на собственных катерах и тщательно следим за тем, чтобы каждый наш катер был в идеальном техническом состоянии. Ежегодно мы обновляем парк катеров, чтобы Вы катались на самых лучших и современных моделях.', title: 'СОБСВЕННЫЙ ФЛОТ КАТЕРОВ', icon: 'mdi-ferry' },
      { text: 'В случае дождя или ветра более 8 м/с Вы можете перенести свое бронирование на другой более комфортный день, а тем, кому погодные ненастья не страшны, мы предоставим прочные плащи-дождевики с капюшоном и теплые пледы.', title: 'ЗАЩИТИМ ОТ НЕПОГОДЫ', icon: 'mdi-umbrella-outline' }
    ],
    columns: 4
  },
  youtubeVideo: {
    title: 'Посмотрите как мы работаем:',
    videoUrl: 'https://www.youtube.com/embed/FrOiCr6KqOg'
  },
  filteredCards: {
    bgImageUrl: require('@/assets/filters-bg.jpg'),
    title: 'ВЫБЕРЕТЕ СВОЮ ПРОГУЛКУ НА КАТЕРЕ',
    items: [
      {
        id: 1,
        tags: ['С капитаном'],
        title: 'АРЕНДА НЕБОЛЬШОГО КАТЕРА «ТОЛСТЫЙ» ДЛЯ ПРОГУЛОК ПО РЕКАМ И КАНАЛАМ',
        withCapitan: true,
        time: 'от 1 часа',
        schedule: { from: '9:00', to: '23:45' },
        capacity: { people: { to: 3 } },
        excursionInfo: 'Невка, Нева, Финский залив, канал Грибоедова, р. Фонтанка, Мойка, Крюков канал, Зимняя канавка',
        price: '5000 ₽',
        link: '/about',
        imageLabel: { text: 'C капитаном', color: '#fcb813' }
      },
      {
        id: 2,
        tags: ['С капитаном'],
        title: 'ПРОГУЛКА НА СПОРТИВНОМ КАТЕРЕ «СТРЕМИТЕЛЬНЫЙ» ПО НЕВЕ, КАНАЛАМ И ФИНСКОМУ ЗАЛИВУ',
        withCapitan: true,
        time: 'от 1 часа',
        schedule: { from: '9:00', to: '23:45' },
        capacity: { people: { to: 7 } },
        excursionInfo: 'Невка, Нева, Финский залив, р. Фонтанка, Мойка, Крюков канал, Зимняя канавка',
        price: '9000 ₽',
        link: '/link',
        imageLabel: { text: 'C капитаном', color: '#fcb813' } // { text: 'Права ГИМС', color: '#ff1744' }
      },
      {
        id: 3,
        tags: ['С капитаном'],
        title: 'КРУИЗ НА ЯХТЕ «ВАЛЬЯЖНАЯ» ДЛЯ ОТДЫХА БИЗНЕС-КЛАССА',
        withCapitan: true,
        time: 'от 1 часа',
        schedule: { from: '9:00', to: '23:45' },
        capacity: { people: { to: 9 } },
        excursionInfo: 'Невка, Нева, Финский залив, каналы.Возможность входа в каналы зависит от уровня воды',
        price: '13000 ₽',
        link: '/link',
        imageLabel: { text: 'C капитаном', color: '#fcb813' } 
      },
      {
        id: 4,
        tags: ['С капитаном', 'Развод мостов'],
        title: 'НОЧНАЯ ПОГУЛКА НА КАТЕРЕ С КАПИТАНОМ ПОД РАЗВОДНЫМИ МОСТАМИ',
        withCapitan: true,
        time: 'от 2 часов',
        schedule: { from: '23:55', to: '01:55' },
        capacity: { people: { from: 3, to: 9, message: 'в зависимости от катера' } },
        wayInfo: 'Финский залив, Нева, развод 3 мостов',
        price: 'от 10000 ₽',
        link: '/link',
        imageLabel: { text: 'C капитаном', color: '#fcb813' }
      },
      {
        id: 5,
        tags: ['Без капитана'],
        title: 'САМОСТОЯТЕЛЬНОЕ КАТАНИЕ НА КАТЕРЕ «ШУСТРЫЙ»',
        withCapitan: false,
        mins: 60,
        schedule: { from: '9:00', to: '23:00' },
        capacity: { people: { to: 4 }, weight: '300 кг' },
        excursionInfo: 'Малая, Средняя, Большая Невка и Финский залив',
        driverLicanse: false,
        price: '5990 ₽',
        link: '/link',
        imageLabel: { text: 'Без прав', color: '#00c853' }
      },
      {
        id: 6,
        tags: ['Без капитана'],
        title: 'НОЧНАЯ ПРОГУЛКА НА КАТЕРЕ «ШУСТРЫЙ» БЕЗ КАПИТАНА',
        withCapitan: false,
        mins: 120,
        schedule: { from: '23:55', to: '1:55' },
        capacity: { people: { to: 4 }, weight: '300 кг' },
        excursionInfo: 'Малая, Средняя, Большая Невка, р. Ждановка',
        driverLicanse: false,
        price: '9990 ₽',
        link: '/link',
        imageLabel: { text: 'Без прав', color: '#00c853' }
      },
      {
        id: 7,
        tags: ['С капитаном', 'Экскурсии'],
        title: 'ОБЗОРНАЯ ЭКСКУРСИЯ НА КАТЕРЕ ПО РЕКАМ И КАНАЛАМ, ФИНСКОМУ ЗАЛИВУ',
        withCapitan: true,
        time: '2 часа',
        schedule: { from: '9:00', to: '23:00' },
        capacity: { people: { from: 6, to: 8, message: 'в зависимости от катера' } },
        additionalInfo: [{ label: 'В стоимость входит', text: 'профессиональный гид'}],
        price: 'от 20000 ₽',
        link: '/link',
        imageLabel: { text: 'C капитаном', color: '#fcb813' }
      },
      {
        id: 8,
        tags: ['С капитаном', 'Экскурсии'],
        title: 'МОРСКОЙ КРУИЗ НА КАТЕРЕ ПО ФОРТАМ КРОНШТАДТА',
        withCapitan: true,
        time: '7 часов',
        distance: '80 км',
        schedule: { at: '10:00 и 11:00' },
        capacity: { people: { to: 9 } },
        additionalInfo: [{ label: 'Катера для тура', text: 'яхта Вальяжная'}],
        price: '60000 ₽',
        link: '/link',
        imageLabel: { text: 'C капитаном', color: '#fcb813' }
      },
      {
        id: 9,
        tags: ['С капитаном', 'Экскурсии'],
        title: 'ТУР НА КАТЕРЕ В КРЕПОСТЬ ОРЕШЕК',
        withCapitan: true,
        time: '9 часов',
        distance: '140 км',
        schedule: { at: '10:00' },
        capacity: { people: { to: 9 } },
        additionalInfo: [{ label: 'Катера для тура', text: 'яхта Вальяжная' }],
        price: '90000 ₽',
        link: '/link',
        imageLabel: { text: 'C капитаном', color: '#fcb813' }
      },
      {
        id: 10,
        tags: ['С капитаном', 'На салют'],
        title: 'САЛЮТ 9 МАЯ С БОРТА КАТЕРА',
        withCapitan: true,
        time: 'от 2 часов',
        schedule: { from: '21:00', to: '23:00' },
        capacity: { people: { from: 3, to: 9, message: 'в зависимости от катера' } },
        additionalInfo: [{ label: 'Доступные катера', text: 'Толстый, Стремительный, Вальяжная' }],
        price: 'от 10000 ₽',
        link: '/link',
        imageLabel: { text: 'C капитаном', color: '#fcb813' }
      },
      {
        id: 11,
        tags: ['С капитаном', 'На салют'],
        title: 'САЛЮТ В ДЕНЬ ГОРОДА СПБ',
        withCapitan: true,
        time: 'от 2 часов',
        schedule: { from: '21:00', to: '23:00' },
        capacity: { people: { from: 3, to: 9, message: 'в зависимости от катера' } },
        additionalInfo: [{ label: 'Доступные катера', text: 'Толстый, Стремительный, Вальяжная' }],
        price: 'от 10000 ₽',
        link: '/link',
        imageLabel: { text: 'C капитаном', color: '#fcb813' }
      },
      {
        id: 12,
        tags: ['С капитаном', 'Экскурсии'],
        title: 'АЛЫЕ ПАРУСА',
        withCapitan: true,
        time: 'от 3 часов',
        schedule: { from: '23:00', to: '02:00' },
        capacity: { people: { from: 3, to: 9, message: 'в зависимости от катера' } },
        additionalInfo: [{ label: 'Доступные катера', text: 'Толстый, Стремительный, Вальяжная' }],
        price: 'от 15000 ₽',
        link: '/link',
        imageLabel: { text: 'C капитаном', color: '#fcb813' }
      },
      {
        id: 13,
        tags: ['С капитаном', 'Экскурсии'],
        title: 'ПРОГУЛКА НА КАТЕРЕ ВДОЛЬ ВОЕННЫХ КОРАБЛЕЙ В ДЕНЬ ВМФ',
        withCapitan: true,
        time: 'от 1 часа',
        schedule: { prefix: 'с 25 июля по 5 августа', from: '09:00', to: '23:45' },
        capacity: { people: { from: 3, to: 9, message: 'в зависимости от катера' } },
        additionalInfo: [{ label: 'Доступные катера', text: 'Толстый, Стремительный, Вальяжная' }],
        price: 'от 5000 ₽',
        link: '/link',
        imageLabel: { text: 'C капитаном', color: '#fcb813' }
      },
      {
        id: 14,
        tags: ['С капитаном', 'На салют'],
        title: 'ПРОСМОТР САЛЮТА В ДЕНЬ ВМФ С КАТЕРА',
        withCapitan: true,
        time: 'от 2 часов',
        schedule: { from: '21:00', to: '23:00' },
        capacity: { people: { from: 3, to: 9, message: 'в зависимости от катера' } },
        additionalInfo: [{ label: 'Доступные катера', text: 'Толстый, Стремительный, Вальяжная' }],
        price: 'от 10000 ₽',
        link: '/link',
        imageLabel: { text: 'C капитаном', color: '#fcb813' }
      },
      {
        id: 15,
        tags: ['С капитаном'],
        title: 'ДЕНЬ РОЖДЕНИЕ НА КАТЕРЕ',
        withCapitan: true,
        time: 'от 1 часа',
        capacity: { people: { from: 3, to: 9, message: 'в зависимости от катера' } },
        additionalInfo: [{ label: 'Доступные катера', text: 'Толстый, Стремительный, Вальяжная' }, { label: 'Возьмите на борт', text: 'разрешен алкоголь и закуски' }],
        price: 'от 5000 ₽',
        link: '/link',
        imageLabel: { text: 'C капитаном', color: '#fcb813' }
      },
      {
        id: 16,
        tags: ['С капитаном', 'Без капитана'],
        title: 'СВИДАНИЕ НА КАТЕРЕ',
        withCapitan: [{ label: 'Катер Шустрый', value: false }, { label: 'Катер Толстый', value: true }, { label: 'Катер Стремительный', value: true }, { label: 'Яхта Вальяжная', value: true }],
        time: 'от 1 часа',
        price: 'от 5000 ₽',
        link: '/link'
      },

    ]
  },
  infoLines: {
    title: 'Почему компания На Катере?',
    itemsRight: [
      {
        title: 'Собственный флот катеров',
        description: 'Гарантия лучшей цены без комиссии'
      },
      {
        title: 'Новые и ухоженные катера',
        description: 'Мы работаем только на той технике, которая не старше двух лет'
      },
      {
        title: 'Чистое время катания',
        description: 'Во время аренды не входит инструктаж и организационные моменты, мы работаем по-честному'
      },
      {
        title: 'Гарантия Вашего бронирования',
        description: 'Вы можете быть уверены, что катание состоится'
      },
      {
        title: 'Моментальное бронирование',
        description: 'В любое удобное для Вас время'
      },
      {
        title: 'Твёрдая и единая цена',
        description: 'Вне зависимости от праздников и спроса'
      }
    ],
    itemsLeft: [
      {
        title: 'Онлайн-расписание',
        description: 'На сайте всегда опубликовано актуальное онлайн-расписание, где Вы можете оформить заказ в один клик'
      },
      {
        title: 'Мы ценим Ваше время',
        description: 'У нас отсутствуют задержки и очереди'
      },
      {
        title: 'Профессиональные',
        description: 'У нас работают профессиональные капитаны и инструктора, с ними хоть на край света'
      },
      {
        title: 'Приветливый персонал',
        description: 'Обратитесь к нам, и мы с радостью ответим на все Ваши вопросы'
      },
      {
        title: 'Удобная локация',
        description: 'Удобная локация причала в центре города'
      }
    ]
  }
}