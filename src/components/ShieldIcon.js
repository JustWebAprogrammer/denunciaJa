import React from 'react';
import { View } from 'react-native';

// Escudo SVG simplificado como View do React Native
// Não precisamos de biblioteca SVG extra para isto
export default function ShieldIcon({ size = 28, color = '#FFFFFF' }) {
  const scale = size / 28;
  
  return (
    <View
      style={{
        width: size,
        height: size * 1.1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Escudo simplificado com emoji + styling */}
      <View
        style={{
          width: size * 0.85,
          height: size,
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: size * 0.15,
          borderBottomLeftRadius: size * 0.4,
          borderBottomRightRadius: size * 0.4,
          borderTopLeftRadius: size * 0.15,
          borderTopRightRadius: size * 0.15,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: 'rgba(255,255,255,0.4)',
        }}
      >
        <View
          style={{
            width: 4 * scale,
            height: 12 * scale,
            backgroundColor: color,
            borderRadius: 2 * scale,
            marginBottom: 2 * scale,
          }}
        />
        <View
          style={{
            width: 6 * scale,
            height: 6 * scale,
            backgroundColor: color,
            borderRadius: 3 * scale,
          }}
        />
      </View>
    </View>
  );
}