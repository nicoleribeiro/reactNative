import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#FFF'
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    color: '#99211B'
  },
  containerInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 5,
    backgroundColor: '#FFF'
  },
  label: {
    fontWeight: 'bold'
  },
  input: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#AB9898',
    flex: 1
  },
  containerButton: {
    flexDirection: 'row'
  }
})

export { styles }