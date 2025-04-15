
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';



function App(): React.JSX.Element {


  return (
    <SafeAreaView>
      <Text preset="headingSmall" style={{fontFamily:'Satoshi-Bold'}}>CoffStack</Text>
      <Text preset="headingSmall">teste</Text>
    </SafeAreaView>
  );
}


export default App;
