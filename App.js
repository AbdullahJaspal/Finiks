import React from 'react';
import {ToastProvider} from 'react-native-toast-notifications';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import MainNavigation from './src/navigation/mainNav';
import {store, persister} from './src/redux/store';
export default App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <ToastProvider>
          <MainNavigation />
        </ToastProvider>
      </PersistGate>
    </Provider>
  );
};
