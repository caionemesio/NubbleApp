// src/config/ReactotronConfig.js

import Reactotron from 'reactotron-react-native';

// Apenas executa o Reactotron em ambiente de desenvolvimento
if (__DEV__) {
  const tron = Reactotron.configure({
    host: 'localhost',
    port: 9090,
  }) // Configura o host e porta
    .useReactNative() // Adiciona os plugins padrões do React Native
    .connect(); // Estabelece a conexão

  // Limpa a timeline a cada reload no ambiente de dev
  tron.clear();

  // Torna o `tron` acessível globalmente para facilitar o uso
  console.tron = tron;
}
