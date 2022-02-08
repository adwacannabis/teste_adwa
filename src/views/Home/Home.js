
import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList, Image, Text, TextInput, View, ImageBackground, TouchableOpacity, StatusBar} from 'react-native';
import styles from './style';



const Home = ({navigation}) => {
    const [pokemons, setPokemons] = useState([]); //os estados das duas variáveis começam vazios
    const [numCols, setColumnNo] = useState(0);
    const [searchfield, setSearchfield] = useState('');
    
    numCols => setColumnNo(2);
    

    useEffect(() => { //executa uma função sempre que o componente renderizar
        buscaPokemons();
   }, []);

   const buscaPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
      .then(response => response.json()) //converte a resposta para json
      .then(pokemons => setPokemons(pokemons.results)); //guarda os resultados dentro de pokemons      
  };

  function mostraPokemon(item) { //pega o nome e a url de um pokemon e cria o card para ele na flatlist
      
    const{name,url} =item.item
    
    return (              
        <TouchableOpacity activeOpacity={0.9} style={styles.gridButton}
                              onPress={() =>navigation.navigate('InfoPokemon', {pokemon: name})}>
                <StatusBar backgroundColor="#dd1b18" barStyle="light-content"/>
             

                <View style={[styles.grid, {backgroundColor: '#dd1b18'}]}>
                    <Image
                        resizeMode="contain"
                        style={{flex:1, width: 150, height: 100}}
                        source={{
                        uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                            name
                        }.png`,
                        }}
                    />
                    <Text style={styles.fonte}>{name}</Text>
                    
                </View>
        </TouchableOpacity>
        
        
    )

}


  
   return (
    <ImageBackground source={require('../../../assets/bg.png')} style={{flex: 1}}>
         <View style={styles.header}>
                        <Text style={styles.presentationFont}>PokeDex</Text>
                        <View style={styles.containerHeader}>                            
                            <Text style={styles.search}>Buscar: </Text>
                            <TextInput style={styles.input} placeholder="Digite o nome"  onChangeText={value => setSearchfield(value)}/>
                        </View>
                    </View>
                    
        <SafeAreaView style={{flex:1, padding:8}}>   
            <FlatList                
                numColumns={2}
                refreshing={true}
                data={pokemons
                    .filter(pokemon =>
                      pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
                    )}         
                keyExtractor={(pokemon)=> pokemon.name}                                       
                extraData={numCols}
                contentContainerStlyle={{flexGrow: 1}} //preencher toda a tela
                renderItem={mostraPokemon}
                style={{marginBottom: '2%'}}
            />                  
           
        </SafeAreaView>
              
    </ImageBackground>
        
    );
}


export default Home;

