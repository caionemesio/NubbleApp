
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';



function App(): React.JSX.Element {


  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
      <Text preset="headingLarge" italic bold >CoffStack</Text>
      <Button loading title='Entrar'/>
    </SafeAreaView>
    </ThemeProvider>
  );
}


export default App;
