import axios, { AxiosResponse, Method } from 'axios';
import { requestOptions, responseBody } from '@/types';
import { Navigation } from '@/utils';
import rootStore from '@/stores';

const defaultRequestOption: requestOptions = {
  showloading: false,
  throwErr: false,
  showMessage: true,
};

export function request(
  url: string,
  method: Method,
  data?: object,
  options?: requestOptions,
  atomic: boolean = true
): Promise<responseBody> {
  const { showloading } = { ...defaultRequestOption, ...options };
  console.log('url==>>', url);
  return new Promise(async (resolve, reject) => {
    let body = method === 'get' ? 'params' : 'data';
    if (showloading) {
      rootStore.loadingInstance.showLoading(true);
    }
    axios({
      url,
      method,
      [body]: data === null ? '' : data,
      headers: {
        'Content-Type': 'application/json',
        // 'PRIVATE-TOKEN': 'ftK-xJTXLaFTXsPXSUay',
        cookie:
          'sidebar_collapsed=false; hide_auto_devops_implicitly_enabled_banner_21=false; remember_user_token=eyJfcmFpbHMiOnsibWVzc2FnZSI6Ilcxc3hYU3dpSkRKaEpERXdKR3d6U1RoSlZsYzJVSEJ6VG1WSVJYVldTakU0ZGk0aUxDSXhOalk0TWpZMk9ERTBMakU0TnpJME56VWlYUT09IiwiZXhwIjoiMjAyMi0xMS0yNlQxNToyNjo1NC4xODdaIiwicHVyIjoiY29va2llLnJlbWVtYmVyX3VzZXJfdG9rZW4ifX0%3D--4bbb6a69266af164c80f095e6310f06c360a2443; _gitlab_session=00d92eed27338e8f37040164074f939d; event_filter=all',
      },
    })
      .then((response: AxiosResponse<responseBody>) => {
        console.log('response', response);

        if (atomic) {
          // rootStore.loadingInstance.showLoading(false);
        }
        if (response.status === 200) {
          resolve(response.data);
        } else {
          throw response.data;
        }
      })
      .catch((err: any) => {
        reject(err);
        if (err.statusCode !== 200) {
          Navigation.navigate('login');
        }
      });
  });
}
