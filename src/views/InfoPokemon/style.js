import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  box1: {
    alignItems: 'center',
    width: '100%', 
    flex: 1,
    marginTop: -5
  },

  box2: {
    width: '100%', 
    flex: 1,
    elevation: 5.5, 
    borderBottomWidth: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },

  imagem: {
    backgroundColor: 'transparent',
    height: 160,
    width: 160,
    marginTop: '-2%',
    marginBottom: '8%'
  },

  titulo: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: '2%',
    marginTop: '8%'
  },
 
  descricao: {
      fontSize: 18,
      color: 'grey',
      alignSelf: 'center',
      marginHorizontal: '8%'
  },

  text: {
    fontSize: 22,
    marginBottom: 15,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});