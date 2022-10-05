import ms from 'ms';
import { useEffect, useMemo } from 'react';
import {
  useQuery,
} from 'react-query';

const IMAGES_URL = 'https://gj4qt4qphvfglkrxutvh57jrlm0ryrqx.lambda-url.eu-west-1.on.aws/';
const data1 = { apartments: [{ name: 'apt 7', images: [{ id: '977351', date: '20190615_105021', url: 'https://i.imgur.com/9wpKT4r.jpg' }, { id: '31055', date: '20190613_145322', url: 'https://www.jamesfmackenzie.com/img/posts/equirectangular-pano.png' }, { id: '85234', date: '20190211_095514', url: 'https://c1.staticflickr.com/5/4810/45784853101_75fca223e4_k.jpg' }] }, { name: 'apt 13', images: [{ id: '4423', date: '20190522_083327', url: 'https://c1.staticflickr.com/5/4888/45267627984_0fe6f6d77d_k.jpg' }, { id: '906331', date: '20190429_185520', url: 'https://c1.staticflickr.com/5/4859/45043669035_11998fad26_k.jpg' }] }] };

const useExplorerStore = () => {
  const {
    isLoading, error, data, refetch,
  } = useQuery('apartments', () => fetch(IMAGES_URL)
    .then((res) => res.json())
    .catch(() => data1));

  useEffect(() => {
    const handle = setInterval(refetch, ms('5s'));

    return () => {
      clearInterval(handle);
    };
  });

  // eslint-disable-next-line max-len
  return useMemo(() => ({ apartments: data?.apartments, loading: isLoading, error }), [data?.apartments, error, isLoading]);
};

export { useExplorerStore };
