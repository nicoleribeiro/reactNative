import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { styles } from "../../../styles"
 
const Formacao = () => {
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
        <Text style={styles.title}>Formação</Text>
        <Text style={styles.text}>{char} Sistemas para Internet - FIAP</Text>
        <Text style={styles.text}>{char} Técnico em Desenvolvimento de Sistemas - ETEC</Text>
        <Text style={styles.text}>{char} Técnico em Administração - ETEC</Text>
      </View>
    </ScrollView>
  )
}
 
export default Formacao;