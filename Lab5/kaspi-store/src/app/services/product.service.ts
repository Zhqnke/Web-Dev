import { Injectable } from '@angular/core';
import { ProductInfo } from '../model/product-info';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected productList : ProductInfo[] = [
    {
      id : 1 , 
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: `
        4G (LTE): Да 
        Стандарт: GSM 850/900/1800/1900, 3G, 4G LTE, 5G 
        Операционная система:iOS 15 
        SIM-картаnano:SIM + eSIM 
        Материал :металл и стекло 
        Поддержка 5G : Да 
        Технология NFC : Да 
        Цвет :черный 
      `,
      photoURL: ['assets/first.jpg'],
      rating : 5.0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      category : 'smartphones',
      like : false , 
      available : true , 
    },
    {
      id : 2 , 
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      description: `                
        4G (LTE)Да
        СтандартGSM 850/900/1800/1900, 3G, 4G LTE, 5G
        Операционная системаiOS 18
        SIM-картаnano SIM + eSIM
        Материалметалл и стекло
        Поддержка 5GДа
        Технология NFCДа
        Цветчерный
      `,
      photoURL: ['assets/second.jpg'],
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      category: 'smartphones', 
      like : false , 
      available : true ,
    },
    {
      id : 3,  
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. ',
      photoURL: ['assets/third.jpg'],
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000', 
      category : 'smartphones',
      like : false , 
      available : true ,
    },
    {
      id : 4, 
      name: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3',
      description: `
      Максимальная частота процессора3400.0 МГц
      ПроцессорApple M2
      Базовая частота процессора2000.0 МГц
      Количество ядер процессора8 ядер
      `,
      photoURL: ['assets/fouth.jpg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
      category : 'laptops',
      like : false , 
      available : true ,
    },
    {
      id : 5 , 
      name: 'Ноутбук ThundeRobot 911 X Wild Hunter G2 Pro 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro /',
      description: `      
        Максимальная частота процессора4400.0 МГц
        ПроцессорIntel Core i5-12450H
        Базовая частота процессора2000.0 МГц
        Количество ядер процессора8 ядер
        Объем кэша L312 Мб`
      ,
      photoURL: ['assets/fifth.jpg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2l-15-6-16-gb-ssd-512-gb-win-11-pro-jt009500e-116983567/?c=750000000', 
      category : 'laptops',
      like : false , 
      available : true ,
    },
    {
      id : 6 , 
      name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63',
      description: `
        Максимальная частота процессора3200.0 МГц
        ПроцессорApple M1
        Базовая частота процессора2999.0 МГц
        Количество ядер процессора8 ядер
      `
      ,
      photoURL: ['assets/sixth.jpg'],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?c=750000000', 
      category: 'laptops',
      like : false , 
      available : true ,
    },
    {
      id : 7, 
      name: 'Электрочайник BEREKE BR-810 серый',
      description: `
        Безопасностьблокировка крышки, блокировка включения без воды, отключение при закипании, защита от перегрева, Автоотключение при закипании, отключение при снятии с подставки
        Фильтр от накипиНет
        ДисплейНет
        Индикатор включенияДа
        Управление со смартфонаНет
        Длина сетевого шнура1.0 м
        Размеры (ШхВхГ)18х24х18
        Вес0.6 кг
      `,
      photoURL: ['assets/seventh.jpg'],
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
      category : 'tech-things',
      like : false , 
      available : true ,
    },
    {
      id : 8 , 
      name: 'Электрочайник Yingzheng ZY-305 черный',
      description: `      
        БезопасностьАвтоотключение при закипании
        Фильтр от накипиНет
        ДисплейНет
        ПодсветкаДа
        Индикатор включенияДа
        Длина сетевого шнура0.7 м
        Размеры (ШхВхГ)210x180x230 мм
        Вес1.25 кг
      `,
      photoURL: ['assets/eight.jpg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-305-chernyi-112526442/?c=750000000', 
      category : 'tech-things',
      like : false , 
      available : true ,
    },
    {
      id : 9 , 
      name: 'Электрочайник ZY-303 черный, серебристый',
      description: `      
        Безопасностьотключение при закипании, Автоотключение при закипании, отключение при снятии с подставки
        Фильтр от накипиНет
        Двойные стенкиДа
        ДисплейНет
        ПодсветкаДа
        Индикатор включенияДа
        Вес1.0 кг
      `,
      photoURL: ['assets/nineth.jpg'],
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/kingston-sdcs2-64gb-64-gb-100081475/?c=750000000', 
      category: 'tech-things',
      like : false , 
      available : true ,
    },
    {
      id : 10 , 
      name: 'Микрофон OEM K8 Lightning',
      description: `      
        Типдинамический
        Конструкцияпетличный (клипса)
        Назначениеуниверсальный
        Тип подключениябеспроводной
        Чувствительность36.0 дБ
        РадиосистемаНет
      `,
      photoURL: ['assets/ten.jpg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/oem-k8-lightning-117372435/?c=750000000',
      category : 'microphones',
      like : false , 
      available : true ,
    },
    {
      id : 11 , 
      name: 'Микрофон Fifine AM8',
      description: `      
        Типдинамический
        Конструкциянастольный
        Назначениедля компьютера
        Тип подключенияпроводной
        Диапазон воспроизводимых частот50-16000
        Чувствительность50.0 дБ
        РадиосистемаНет
      `,
      photoURL: ['assets/eleven.jpg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/fifine-am8-110695025/?c=750000000',
      category : 'microphones',
      like : false , 
      available : true ,
    },
    {
      id : 12 ,
      name: 'Микрофон K9 Type-C',
      description: `      
        Типконденсаторный
        Конструкцияпетличный (клипса)
        Назначениеуниверсальный, для групповых записей, для конференций
        Тип подключениябеспроводной
        РадиосистемаНет
      `,
      photoURL: ['assets/twelve.jpg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/k9-type-c-110103161/?c=750000000',
      category : 'microphones',
      like : false , 
      available : true ,
    },
  ]; 

  constructor() { }

  getAllProducts() : ProductInfo[] {
    return this.productList; 
  }
  getProductsById(id : Number): ProductInfo | undefined {
    return this.productList.find(product => product.id === id ); 
  }

}
