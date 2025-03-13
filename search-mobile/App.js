import { Text } from 'react-native';
import { styles } from "./styles.js";
import Button from './src/components/button/button.jsx';

export default function App() {
  return (
    <>
    
      <Text style={styles.textos}>Hello World!</Text>

      <Button texto="Salvar"/>
      </>
  );
}


// Aula encerrada em 1:15:35 - Iniciando conceito de Icons - Aula #02