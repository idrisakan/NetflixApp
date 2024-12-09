import Client from './instance';

export async function getRequest(URL: string, params: object) {
  const response = Client.get(URL, {params: params});
  return response;
}
export async function postRequest(URL: string, params: object) {
  const response = Client.post(URL, {params: params});
  return response;
}
