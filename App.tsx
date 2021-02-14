import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';

import Routes from './src/routes';

const fonts = {
  'Ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
  'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const loadFonts = async () => {
    await Font.loadAsync(fonts);
    setLoading(false);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (loading) return <View />;
  return <Routes />;
};

export default App;
