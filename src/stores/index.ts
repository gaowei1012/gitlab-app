import { ProjectStore } from './projects';
import { LoadingStore } from './loading';

export type RootStore = {
  projectStoreInstance: ProjectStore;
  loadingInstance: LoadingStore;
};

const rootStore = {
  projectStoreInstance: new ProjectStore(),
  loadingInstance: new LoadingStore(),
};

export default rootStore;
