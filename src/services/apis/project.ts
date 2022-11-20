/*
 * @Author: mingwei
 * @Date: 2022-05-13 09:13:13
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-04 22:15:37
 * @FilePath: /dgdream/gitlab_app/src/services/apis/project.ts
 * @Description:
 */

import { request } from '@/services/request';
import { NOTES_DOMAIN } from '@/services/config';

export class ProjectsRrquest {
  static request_project_list() {
    return request(NOTES_DOMAIN + `projects`, 'get', {}, { showloading: true });
  }
  static request_project_id(project_id: string) {
    return request(NOTES_DOMAIN + `projects/${project_id}`, 'get', {}, { showloading: true });
  }
}
