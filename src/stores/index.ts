import { ProjectStore } from './projects';
import { LoadingStore } from './loading';

export type RootStore = {
  projectInstance: ProjectStore;
  loadingInstance: LoadingStore;
};

const rootStore = {
  projectInstance: new ProjectStore(),
  loadingInstance: new LoadingStore(),
};

export default rootStore;
