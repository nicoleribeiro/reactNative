import React, { Component } from 'react';
import { styles } from './styles'
import {Text, View, Image, TextInput, Pressable } from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      chuteUsuario: null,
      result: null
    };

    this.setChuteUsuario = this.setChuteUsuario.bind(this);
  }

  setChuteUsuario(text){
    const value = parseInt(text)
    if(!value) return alert('Digite um valor inteiro válido')
    if(value < 0) return alert('Digite um valor maior que 0')
    if(value > 10) return alert('Digite um valor menor que 10')
    this.setState({ chuteUsuario: value })
  }

  descobrir() {
    const value = Math.floor(Math.random () * 11)
    this.setState({ result: value == this.state.chuteUsuario ? 'Acertou!!' : 'Errou :c' })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Jogo do Número Aleatório</Text>
        <View style={styles.frame}>
          <Image 
            source={{ uri: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded400/10040800/10040800-1603237067095-eb9175900d5cc.jpg' }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Digite um número entre 0 a 10"
          onChangeText={this.setChuteUsuario}
        />
        
        <Pressable onPress={() => this.descobrir()} style={[styles.button, styles.buttonBlue]}>
          <Text style={styles.buttonText}>Descobrir</Text>
        </Pressable>

        {
          this.state.result && <Text style={styles.result}> {this.state.result} </Text>
        }
      </View>
    );
  }
}
 
export default App;