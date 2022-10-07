import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from "../../../styles"
 
export default function Pessoal() {
  const navigation = useNavigation();
 return (
   <View>
     <Text>Pessoal</Text>
     <Button
        title="Abrir menu"
        onPress={ () => navigation.toggleDrawer() } 
      />
     <View style={styles.containerInfos}>
      <Text style={styles.title}>Dados Pessoais</Text>
      <Text style={styles.text}>{char} Nicole Ribeiro</Text>
      <Text style={styles.text}>{char} 20 anos</Text>
    </View>
   </View>
  );
}
