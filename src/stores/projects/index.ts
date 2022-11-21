import { makeObservable, observable, toJS } from 'mobx';
import { ProjectsRrquest } from '@/services/apis';

export class ProjectStore {
  project_list: any[] = [];
  constructor() {
    makeObservable(this, {
      project_list: observable,
    });
  }

  // 获取项目列表
  async request_project_list() {
    this.project_list = (await ProjectsRrquest.get_project_list()) as any;
  }

  // 获取项目详情
  async request_project_byId(project_id: number) {
    const projectRes = await ProjectsRrquest.get_project_id(project_id);
    console.log('projectRes', projectRes);
  }

  get_project_list_state() {
    return toJS(this.project_list);
  }
}
