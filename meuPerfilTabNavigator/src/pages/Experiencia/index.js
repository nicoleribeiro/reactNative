import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { styles } from "../../../styles"
 
const Experiencia = () => {
  const char = '-'

  return(
    <ScrollView>
      <View style={styles.containerLogo}>
        <View style={styles.frame}>
          <Image 
            source={{ uri: 'https://www.stoodi.com.br/wp-content/uploads/2020/07/lua.jpg' }}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Experiência</Text>
        <Text style={styles.text}>{char} Analista de Sistemas</Text>
        <Text style={styles.text}>{char} Estágio em Análise e Desenvolvimento</Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Projetos</Text>
        <Text style={styles.text}>{char} Redesign e Manutenção de ERP Financeiro</Text>
      </View>
    </ScrollView>
  )
}
 
export default Experiencia;