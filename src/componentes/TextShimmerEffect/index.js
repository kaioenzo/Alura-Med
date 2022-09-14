import React from "react";
import { Image } from "react-native";
import shimmerGif from '../../assets/shimmer.gif';

export function TextShimmerEffect() {

  return (
      <Image source={shimmerGif} style={{width: 50, height: 15, marginVertical: 10}} />
  );
}