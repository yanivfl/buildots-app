import ms from 'ms';
import { useEffect, useMemo } from 'react';
import {
  useQuery,
} from 'react-query';

const APARTMENTS_URL = 'https://gj4qt4qphvfglkrxutvh57jrlm0ryrqx.lambda-url.eu-west-1.on.aws/';

const useExplorerStore = () => {
  const {
    isLoading, error, data, refetch,
  } = useQuery('apartments', () => fetch(APARTMENTS_URL)
    .then((res) => res.json()));

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
