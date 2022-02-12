import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

window.__MAP__ = {
  zoom: 13,
  center: {
    position: '48.4038907,35.0435772',
    icon: 'https://stroimsokolinyjpark.ru/wp-content/uploads/2022/02/logo.svg',
  },
  markers: [
    {
      id: 1,
      name: 'Магазины',
      menuIcon:
        'https://stroimsokolinyjpark.ru/wp-content/uploads/2022/02/shop.svg',
      mapIcon:
        'https://stroimsokolinyjpark.ru/wp-content/uploads/2022/02/shop-pin.svg',
      color: '#ff005c',
      points: [
        {
          id: 1,
          title: 'Средняя общеобразовательная школа № 36',
          position: '48.4038907,35.0435772',
        },
        {
          id: 2,
          title: 'Многопрофильная гимназия № 13',
          position: '48.4038907,35.0435772',
        },
      ],
    },
    {
      id: 2,
      name: 'Детские сады',
      menuIcon:
        'https://stroimsokolinyjpark.ru/wp-content/uploads/2022/02/ic-kid.svg',
      mapIcon:
        'https://stroimsokolinyjpark.ru/wp-content/uploads/2022/02/pin-ic-kid.svg',
      color: '#00963f',
      points: [
        { id: 1, title: 'Детский сад', position: '48.404308,35.0312256' },
      ],
    },
    {
      id: 3,
      name: 'Поликлиники',
      menuIcon:
        'https://stroimsokolinyjpark.ru/wp-content/uploads/2022/02/ic-medicine.svg',
      mapIcon:
        'https://stroimsokolinyjpark.ru/wp-content/uploads/2022/02/pin-medicine.svg',
      color: '#2329d6',
      points: [
        { id: 1, title: 'Поликлиника 7', position: '48.4115284,35.0301173,13' },
      ],
    },
    {
      id: 4,
      name: 'Школы',
      menuIcon:
        'https://stroimsokolinyjpark.ru/wp-content/uploads/2022/02/ic-school.svg',
      mapIcon:
        'https://stroimsokolinyjpark.ru/wp-content/uploads/2022/02/pin-school.svg',
      color: '#a154ee',
      points: [
        {
          id: 1,
          title: 'Интеллектуальная школа',
          position: '48.4115284,35.0301173',
        },
        { id: 2, title: 'ДЦП Шкоал', position: '48.4115284,35.0301173,13' },
      ],
    },
    {
      id: 5,
      name: 'Фитнес-клубы',
      menuIcon:
        'https://stroimsokolinyjpark.ru/wp-content/uploads/2022/02/ic-fitness.svg',
      mapIcon:
        'https://stroimsokolinyjpark.ru/wp-content/uploads/2022/02/pin-fitness.svg',
      color: '#eea054',
      points: [
        { id: 1, title: 'Мистер мускул', position: '48.4115284,35.0301173' },
        { id: 2, title: 'Мускул', position: '48.3944687,35.0215442' },
      ],
    },
  ],
}

ReactDOM.render(<App {...window.__MAP__} />, document.getElementById('root'))
