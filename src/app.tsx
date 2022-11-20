import React from 'react';
import { StoreProvider } from '@/hooks/useStore';
import DynamicTabNavigator from '@/navigation/DynamicTabNavigator';

const App: React.FC<{}> = () => {
  return (
    <StoreProvider>
      <DynamicTabNavigator />
    </StoreProvider>
  );
};

export default App;
