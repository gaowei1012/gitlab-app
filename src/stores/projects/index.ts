import { makeObservable, observable, toJS } from 'mobx';
import { ProjectsRrquest } from '@/services/apis';

// const project = {
//   id: 0,
//   description: '',
//   name: '',
//   name_with_namespace: '',
//   path: '',
//   path_with_namespace: '',
//   created_at: '',
//   default_branch: '',
//   tag_list: [],
//   topics: [],
//   ssh_url_to_repo: '',
//   http_url_to_repo: '',
//   web_url: '',
//   readme_url: '',
//   last_activity_at: '',
//   star_count: 0, // 点赞数
// };

export class ProjectStore {
  project_list: any[] = [];
  constructor() {
    makeObservable(this, {
      project_list: observable,
    });
  }

  // 获取项目列表
  async request_project_list() {
    this.project_list = (await ProjectsRrquest.request_project_list()) as any;
  }

  get_project_list_state() {
    return toJS(this.project_list);
  }
}
