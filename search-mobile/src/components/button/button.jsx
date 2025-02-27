import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";

function Button() {
  return <TouchableOpacity style={styles.btn}>
   <Text style={styles.texto}>Isso é um Botão</Text>
  </TouchableOpacity>;
  
}

export default Button;