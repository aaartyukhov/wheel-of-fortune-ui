import { Link } from '@alfalab/core-components-link';

import backpack from '../images/presents/backpack.png';
import hoodies from '../images/presents/hoodies.png';
import rug from '../images/presents/rug.png';
import thermos from '../images/presents/thermos.png';
import socks from '../images/presents/socks.png';
import powerBank from '../images/presents/power-bank.png';
import slippers from '../images/presents/slippers.png';
import wiki from '../images/presents/wiki.png';
import endOfWork from '../images/presents/end-of-work.png';
import dinner from '../images/presents/dinner.png';
import placeOfTop from '../images/presents/place-of-top.png';
import businessTrip from '../images/presents/business-trip.png';
import сoffeeTime from '../images/presents/сoffee-time.png';
import skyEng from '../images/presents/sky-eng.png';
import hugs from '../images/presents/hugs.png';

const PRESENTS = {
  backpack: {
    name: 'backpack',
    label: 'Альфа-рюкзак',
    img: backpack,
    getFootnote: () => 'Для получения напиши\nна почту Кириленко Арине',
  },
  hoodies: {
    name: 'hoodies',
    label: 'Альфа-толстовка',
    img: hoodies,
    getFootnote: () => 'Для получения напиши\nна почту Кириленко Арине',
  },
  rug: {
    name: 'rug',
    label: 'Альфа-плед',
    img: rug,
    getFootnote: () => 'Для получения напиши\nна почту Кириленко Арине',
  },
  thermos: {
    name: 'thermos',
    label: 'Альфа-термос',
    img: thermos,
    getFootnote: () => 'Для получения напиши\nна почту Кириленко Арине',
  },
  socks: {
    name: 'socks',
    label: 'Альфа-носки',
    img: socks,
    getFootnote: () => 'Для получения напиши\nна почту Кириленко Арине',
  },
  powerBank: {
    name: 'powerBank',
    label: 'Альфа-powerbank',
    img: powerBank,
    getFootnote: () => 'Для получения напиши\nна почту Кириленко Арине',
  },
  slippers: {
    name: 'slippers',
    label: 'Альфа-тапки',
    img: slippers,
    getFootnote: () => 'Для получения напиши\nна почту Кириленко Арине',
  },
  placeOfTop: {
    name: 'placeOfTop',
    label: '1 день на рабочем\nместе любого ТОПа',
    img: placeOfTop,
    getFootnote: () => 'Обратись к выбранному ТОПу\nдля\u00A0получения подарка',
  },
  dinner: {
    name: 'dinner',
    label: 'продление обеда\nна\u00A01\u00A0час',
    img: dinner,
    getFootnote: () => 'Обратись к своему руководителю\nдля\u00A0получения подарка',
  },
  endOfWork: {
    name: 'endOfWork',
    label: 'закончить работу\nраньше на\u00A01\u00A0час',
    img: endOfWork,
    getFootnote: () => 'Обратись к своему руководителю\nдля\u00A0получения подарка',
  },
  businessTrip: {
    name: 'businessTrip',
    label: 'командировка по\u00A0обмену\nопытом на\u00A01\u00A0день',
    img: businessTrip,
    getFootnote: () => 'Обратись к своему руководителю\nдля\u00A0получения подарка',
  },
  сoffeeTime: {
    name: 'сoffeeTime',
    label: 'кофе-пауза\nс\u00A0любым ТОПом',
    img: сoffeeTime,
    getFootnote: () => 'Обратись к выбранному ТОПу\nдля\u00A0получения подарка',
  },
  wiki: {
    name: 'wiki',
    label: 'сертификат на онлайн-тренажеры для мозга Викиум',
    img: wiki,
    getFootnote: () => 'Для получения напиши\nна почту Кириленко Арине',
  },
  skyEngBox: {
    name: 'skyEngBox',
    label: 'EnglishBox от\u00A0SkyEng',
    img: skyEng,
    getFootnote: () => (
      <>
        {'Пройти обучение можно '}
        <Link view="default" rel="noopener" target="_blank" href="https://go.skyeng.ru/englishbox_adults/alfaleasing">
          здесь
        </Link>
      </>
    ),
  },
  skyEngBusinessEnglish: {
    name: 'skyEngBusinessEnglish',
    label: 'курс по бизнес английскому от\u00A0SkyEng',
    img: skyEng,
    getFootnote: () => (
      <>
        {'Пройти обучение можно '}
        <Link view="default" rel="noopener" target="_blank" href="https://corporate.skyeng.ru/business-course/registration?utm_source=b2b-special-mechanics&utm_medium=b2b_kam&utm_campaign=b2b-mechanics&product=business_special_project&utm_term=25_01_2024&company=alfaleasing&manager=goryachko&utm_page=crm2_2021-03-11_604a193270933&workflow=b2b&source_type=corporate">
          здесь
        </Link>
      </>
    ),
  },
  skyEngSkyrocket: {
    name: 'skyEngSkyrocket',
    label: 'Skyrocket: курс по продуктивности и карьерному росту',
    img: skyEng,
    getFootnote: () => (
      <>
        {'Пройти обучение можно '}
        <Link view="default" rel="noopener" target="_blank" href="https://corporate.skyeng.ru/skyrocket?utm_source=b2b-special-mechanics&utm_medium=b2b_kam&utm_campaign=b2b-mechanics&product=type-skyeng_course%7Cname-skyrocket&utm_term=25_01_2024&company=alfaleasing&manager=goryachko&utm_page=crm2_2021-03-11_604a193270933&workflow=b2b&source_type=corporate">
          здесь
        </Link>
      </>
    ),
  },
  skyEngSpeakingClub: {
    name: 'skyEngSpeakingClub',
    label: 'доступ на 3 месяца к разговорным клубам английского',
    img: skyEng,
    getFootnote: () => (
      <>
        {'Получить доступ можно '}
        <Link view="default" rel="noopener" target="_blank" href="https://corporate.skyeng.ru/free-rk?utm_source=b2b-special-mechanics&utm_medium=b2b_kam&utm_campaign=b2b-mechanics&product=3month_free_rk&utm_term=25_01_2024&company=alfaleasing&manager=goryachko&utm_page=crm2_2021-03-11_604a193270933&workflow=b2b&source_type=corporate&utm_content=freerk">
          здесь
        </Link>
      </>
    ),
  },
  hugs: {
    name: 'hugs',
    label: 'обнимашки',
    img: hugs,
    getFootnote: () => 'Покажи скрин\nподарка коллеге',
  },
};

export default PRESENTS;
