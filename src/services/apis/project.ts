import { request } from '@/services/request';
import { NOTES_DOMAIN } from '@/services/config';

export class ProjectsRrquest {
  // 获取项目列表
  static get_project_list() {
    return request(NOTES_DOMAIN + 'projects', 'GET', {}, { showloading: true });
  }
  // 获取项目详情
  static get_project_id(project_id: number) {
    return request(NOTES_DOMAIN + `projects/${project_id}`, 'GET', {}, { showloading: true });
  }
}
