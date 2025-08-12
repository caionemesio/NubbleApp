// src/config/ReactotronConfig.js

import Reactotron from 'reactotron-react-native';

// Apenas executa o Reactotron em ambiente de desenvolvimento
if (__DEV__) {
  const tron = Reactotron.configure() // Usa as configurações padrão (host do localhost)
    .useReactNative() // Adiciona os plugins padrões do React Native
    .connect(); // Estabelece a conexão

  // Limpa a timeline a cada reload no ambiente de dev
  tron.clear();

  // Torna o `tron` acessível globalmente para facilitar o uso
  console.tron = tron;
}
