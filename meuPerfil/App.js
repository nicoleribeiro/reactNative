import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  containerLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50
  },
  frame: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(100, 100, 100, .1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInfos: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 30,
    paddingBottom: 5,
    marginBottom: 10,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  text: {
    fontSize: 16,
    color: '#333'
  }
})
 
const App = () => {
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
        <Text style={styles.text}>{char} Nicole Ribeiro</Text>
        <Text style={styles.text}>{char} 20 anos</Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Formação</Text>
        <Text style={styles.text}>{char} Sistemas para Internet - FIAP</Text>
        <Text style={styles.text}>{char} Técnico em Desenvolvimento de Sistemas - ETEC</Text>
        <Text style={styles.text}>{char} Técnico em Administração - ETEC</Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Experiência</Text>
        <Text style={styles.text}>{char} Analista de Sistemas</Text>
        <Text style={styles.text}>{char} Jovem aprendiz</Text>
      </View>
    </ScrollView>
  )
}
 
export default App;