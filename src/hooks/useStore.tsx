/*
 * @Author: mingwei
 * @Date: 2022-05-12 20:57:44
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-12 20:57:44
 * @FilePath: /dgdream/gitlab_app/src/stores/useStore.tsx
 * @Description:
 */
/*
 * @Author: mingwei
 * @Date: 2022-04-29 15:52:55
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-29 16:08:12
 * @FilePath: /notes/frontend/src/hooks/useStore.tsx
 * @Description:
 */
import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import rootStore, { RootStore } from '../stores/index';

const storeContext = React.createContext<RootStore | null>(null);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useLocalStore(() => rootStore);
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
};

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
