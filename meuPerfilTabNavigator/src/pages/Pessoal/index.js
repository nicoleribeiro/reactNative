import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { styles } from "../../../styles"
 
const Pessoal = () => {
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
        <Text style={styles.title}>Dados Pessoais</Text>
        <Text style={styles.text}>{char} Nicole Ribeiro </Text>
        <Text style={styles.text}>{char} 20 anos </Text>
      </View>
    </ScrollView>
  )
}
 
export default Pessoal;