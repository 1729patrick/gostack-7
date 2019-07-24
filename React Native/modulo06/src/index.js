import React from 'react';

import './config/ReactotronConfig';
import { StatusBar } from 'react-native';

import Routes from './routes';

const App = () => {
  return (
    <>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="#0c1e3f" />
    </>
  );
};

export default App;
