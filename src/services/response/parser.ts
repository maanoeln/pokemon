import { AxiosResponse } from 'axios';

export function parseResponseData(response: AxiosResponse) {
  return response.data;
}
