import { ImageRequireSource } from 'react-native';

export interface BookData {
  title: string;
  date: string;
  image: ImageRequireSource;
}

export default {
  new: [
    {
      title: 'mina 7月号',
      date: '2018.5.15',
      image: require('./images/dummy/cover-1.png')
    },
    {
      title: 'non-no 5月号',
      date: '2018.5.15',
      image: require('./images/dummy/cover-3.png')
    },
    {
      title: 'GISELe 6月号',
      date: '2018.5.15',
      image: require('./images/dummy/cover-33.png')
    },
    {
      title: '&Premium 7月号',
      date: '2018.5.15',
      image: require('./images/dummy/cover-15.png')
    },
    {
      title: 'Hanako 6月12日号',
      date: '2018.5.15',
      image: require('./images/dummy/cover-13.png')
    },
    {
      title: 'FRaU 7月号',
      date: '2018.5.15',
      image: require('./images/dummy/cover-20.png')
    },
  ],
  lifeStyle: [
    {
      title: 'mina 7月号',
      date: '2018.5.15',
      image: require('./images/dummy/cover-1.png')
    },
    {
      title: 'non-no 5月号',
      date: '2018.5.15',
      image: require('./images/dummy/cover-3.png')
    },
    {
      title: 'GISELe 6月号',
      date: '2018.5.15',
      image: require('./images/dummy/cover-33.png')
    },
    {
      title: '&Premium 7月号',
      date: '2018.5.15',
      image: require('./images/dummy/cover-15.png')
    },
    {
      title: 'Hanako 6月12日号',
      date: '2018.5.15',
      image: require('./images/dummy/cover-13.png')
    },
    {
      title: 'FRaU 7月号',
      date: '2018.5.15',
      image: require('./images/dummy/cover-20.png')
    },
  ]
};
