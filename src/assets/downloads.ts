import { BookData } from './books';

export interface DownloadData {
  book: BookData;
  deliveryDate: string;
  endDate: string;
  size: number;
  downloaded: number;
}

const downloads: DownloadData[] = [
  {
    book: {
      title: 'mina 7月号',
      date: '2018/5/15',
      image: require('./images/dummy/cover-1.png')
    },
    deliveryDate: '2018/5/20',
    endDate: '2018/8/19',
    size: 84.74,
    downloaded: 100,
  }, {
    book: {
      title: 'non-no 5月号',
      date: '2018.5.15',
      image: require('./images/dummy/cover-3.png')
    },
    deliveryDate: '2018/5/20',
    endDate: '2018/8/19',
    size: 20.21,
    downloaded: 30,
  }, {
    book: {
      title: 'GISELe 6月号',
      date: '2018.5.15',
      image: require('./images/dummy/cover-33.png')
    },
    deliveryDate: '2018/5/20',
    endDate: '2018/8/19',
    size: 84.74,
    downloaded: 100,
  }, {
    book: {
      title: '&Premium 7月号',
      date: '2018.5.15',
      image: require('./images/dummy/cover-15.png')
    },
    deliveryDate: '2018/5/20',
    endDate: '2018/8/19',
    size: 20.21,
    downloaded: 30,
  }, {
    book: {
      title: 'Hanako 6月12日号',
      date: '2018.5.15',
      image: require('./images/dummy/cover-13.png')
    },
    deliveryDate: '2018/5/20',
    endDate: '2018/8/19',
    size: 84.74,
    downloaded: 100,
  }, {
    book: {
      title: 'FRaU 7月号',
      date: '2018.5.15',
      image: require('./images/dummy/cover-20.png')
    },
    deliveryDate: '2018/5/20',
    endDate: '2018/8/19',
    size: 20.21,
    downloaded: 30,
  },
];

export default downloads;
