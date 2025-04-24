import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge" bold>
          CoffStack
        </Text>
        <Button title="Primary" disabled/>
        <Button title="Outline"   preset="primary" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
