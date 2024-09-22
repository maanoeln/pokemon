import { api } from '@/services/api';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

interface IProps<T> {
  initialData?: T;
  params?: { [key: string]: string };
  url?: string;
}

interface IUseFetchReturn<T> {
  isLoading: boolean;
  data: T;
  error: boolean;
  setData: Dispatch<SetStateAction<T>>;
  refetch: () => void;
}

const useFetchApi = <T>({
  initialData = {} as T,
  params,
  url = 'pokemon',
}: IProps<T>): IUseFetchReturn<T> => {
  const [data, setData] = useState<T>(initialData);
  const [refetchController, setRefetchController] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getFn = () => (params ? api.get<T>(url, { params }) : api.get<T>(url));

  const refetch = useCallback(
    () => setRefetchController((current) => current + 1),
    [],
  );

  useEffect(() => {
    const handleGet = async () => {
      if (url) {
        try {
          const { data } = await getFn();
          console.log(data);
          setData(data);
        } catch (e) {
          setError(true);
          console.warn(e);
        } finally {
          setIsLoading(false);
        }
      }
    };

    handleGet();
  }, [url, refetchController]);

  const newData = data as T;

  return { isLoading, data: newData, error, setData, refetch };
};

export default useFetchApi;
