import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import DerivWS from './utils/DerivWS';
import { storeAuthTokens } from './utils/derivAuth';

export default function App() {
  useEffect(() => {
    const appId = 'YOUR_APP_ID';
    const ws = new DerivWS(appId);
    ws.setGlobalHandler((data) => console.log('Global message:', data));
    storeAuthTokens([{ account: 'demo', token: 'YOUR_TOKEN', currency: 'USD' }]);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Deriv WS Test App</Text>
    </View>
  );
    }
