import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from "../../../styles"
 
export default function Experiencia() {
  const navigation = useNavigation();
 return (
   <View>
     <Text>Formação</Text>
     <Button
        title="Abrir menu"
        onPress={ () => navigation.toggleDrawer() } 
      />
     <View style={styles.containerInfos}>
        <Text style={styles.title}>Experiência</Text>
        <Text style={styles.text}>{char} Analista de Sistemas</Text>
        <Text style={styles.text}>{char} Estágio em Análise e Desenvolvimento</Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Projetos</Text>
        <Text style={styles.text}>{char} Redesign e Manutenção de ERP Financeiro</Text>
      </View>
   </View>
  );
}