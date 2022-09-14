import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../InformacoesUsuario/styles";
import shimmerGif from '../../assets/shimmer.gif';

export function InformacoesUsuarioShimmerEffect() {

  return (
    <View style={styles.container}>
      <Image source={shimmerGif} style={[styles.foto, { overlayColor: '#FFF'}]} />
      <View style={styles.informacoes}>
      <Image source={shimmerGif} style={{width: 100, height: 25, marginBottom: 10}} />
      <Image source={shimmerGif} style={{width: 150, height: 15}} />
      </View>
    </View> 
  );
}