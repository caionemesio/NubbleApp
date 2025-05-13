import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text marginBottom="s8" preset="headingLarge">
            Olá
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>
          <TextInput
            label="E-mail"
            placeholder="Digite seu Email"
            boxProps={{marginBottom: 's20'}}
          />
            <TextInput
              errorMessage="a caquita stakou"
              label="Senha"
              placeholder="digite a senha"
              RightComponent={<Icon name="eyeOn" color="gray2" />}
              boxProps={{marginBottom: 's10'}}
            />
          <Text color="primary" preset="paragraphSmall" bold>
            Esqueci minha senha
          </Text>
          <Button mt="s48" title="Entrar" />
          <Button preset="outline" mt="s12" title="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
