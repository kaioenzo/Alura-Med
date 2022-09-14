import { View, FlatList, Image } from "react-native";
import styles from './styles';
import React, {useEffect, useRef, useState} from "react";

export function Carrossel( {data, intervalo} ){
  const carrosselRef = useRef();
  const [indice, setIndice] = useState(0);
  
  function alteraPosicaoCarrosel(){
    if (indice < data.length - 1) {
        setIndice(indice + 1);
    }else {
      setIndice(0);
    }
  }

  useEffect(() => {
    carrosselRef.current.scrollToIndex({ index: indice })
    
    //A cada determinado algo é executado
    const intervaloCarrossel = setInterval(() => {
      alteraPosicaoCarrosel();
    }, intervalo)
    //Limpa o intervalo
    return () => clearInterval(intervaloCarrossel);
    
  }, [indice])
  


    return (
        <View style={styles.container}>
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({ item, index }) => (
                <Image
                  source={item.imagem}
                  // O atributo index do render item é passado para o componente, e é verificado se o último elemento está sendo exibido, para garantir que haja uma melhor exibição visual do componente
                  style={[
                    styles.image,
                    index == data.length - 1 ? {marginRight: 200} : null ]}
                  resizeMode="contain"
                />
                )
              }
              ref={carrosselRef}
            />
        </View>
    )
}