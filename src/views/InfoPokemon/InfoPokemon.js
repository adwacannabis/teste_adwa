import React, {useState, useEffect} from 'react';
import { View, Text, Image,  ScrollView, ActivityIndicator, StatusBar} from 'react-native';
import styles from './style'

const InfoPokemon = ({route}) => {   
    const [infoPokemon, setInfoPokemon] = useState([]);

    useEffect(() => {
        buscaInfoPokemon();
      }, []);

    const buscaInfoPokemon = () => {    
       fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemon}`)
       .then(res => res.json())
       .then(infoPokemon => setInfoPokemon(infoPokemon))
       //console.log(infoPokemon)
    };  


return infoPokemon.name ? (
  <View style={{flex: 1, backgroundColor: '#dd1b18'}}> 
    <ScrollView>
        <StatusBar backgroundColor={'#dd1b18'} barStyle="light-content" />
        <View style={styles.container}>            
            <View style={[styles.box1, {backgroundColor: '#dd1b18'}]}>  
            {/* Imagem*/}          
              <Image
                style={styles.imagem}
                source={{
                  uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                    infoPokemon.name
                  }.png`,
                }}
              />    
            </View>
            <View style={[styles.box2, {backgroundColor: 'white'}]}>
                {/* Nome*/}
                <Text style={[styles.titulo, {color: '#dd1b18'}]}>Name</Text>
                <Text style={styles.descricao}>{infoPokemon.name}</Text>

                {/* Tipo*/}
                <Text style={[styles.titulo, {color: '#dd1b18'}]}>Type</Text>
                <Text style={styles.descricao}>{infoPokemon.types.map((item, index) => { return (<Text key={index}>{item.type.name+' | '}</Text>)})}</Text>

                {/* Características físicas*/}
                <Text style={[styles.titulo, {color: '#dd1b18'}]}>Physical</Text>
                <Text style={styles.descricao}>{'Height =  '+infoPokemon.height}</Text>    
                <Text style={styles.descricao}>{'Weight =  '+infoPokemon.weight}</Text>           


                {/* Habilidades*/}
                <Text style={[styles.titulo, {color: '#dd1b18'}]}>Abilities</Text>  
                <Text style={styles.descricao}>{infoPokemon.abilities.map((item, index) => { return (<Text key={index}>{item.ability.name+' | '}</Text>)})}</Text>
                
                
                        
                            
            </View>
        </View>
    </ScrollView>
</View>
  ) : (
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color="#E63F34" />
    </View>
  );
};

export default InfoPokemon;

