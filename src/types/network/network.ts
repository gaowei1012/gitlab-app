/*
 * @Author: mingwei
 * @Date: 2022-05-15 13:08:35
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-15 13:08:36
 * @FilePath: /dgdream/gitlab_app/src/types/network/network.ts
 * @Description:
 */
export interface responseBody<T = any> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export type requestOptions = {
  showloading?: boolean;
  throwErr?: boolean;
  showMessage?: boolean;
};
