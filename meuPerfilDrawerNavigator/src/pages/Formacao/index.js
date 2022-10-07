import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from "../../../styles"
 
export default function Formacao() {
  const navigation = useNavigation();
 return (
   <View>
     <Text>Formação</Text>
     <Button
        title="Abrir menu"
        onPress={ () => navigation.toggleDrawer() } 
      />
     <View style={styles.containerInfos}>
      <Text style={styles.title}>Formação</Text>
      <Text style={styles.text}>{char} Sistemas para Internet - FIAP</Text>
      <Text style={styles.text}>{char} Técnico em Desenvolvimento de Sistemas - ETEC</Text>
      <Text style={styles.text}>{char} Técnico em Administração - ETEC</Text>
    </View>
   </View>
  );
}