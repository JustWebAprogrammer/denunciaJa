import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';
import ShieldIcon from './ShieldIcon';

export default function TopBar({ title, subtitle, showBack = false, onBack, showBell = false }) {
  return (
    <View style={styles.container}>
      {showBack && (
        <TouchableOpacity style={styles.backBtn} onPress={onBack}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
      )}

      {!showBack && (
        <View style={styles.brand}>
          <ShieldIcon size={28} color="#FFFFFF" />
          <View>
            <Text style={styles.brandName}>
              Denuncie <Text style={styles.brandNameLight}>Já</Text>
            </Text>
          </View>
        </View>
      )}

      {showBack && (
        <View style={styles.backTitle}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      )}

      {showBell && (
        <TouchableOpacity style={styles.bellBtn}>
          <Text style={styles.bellIcon}>N</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 14,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  brandName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: -0.3,
  },
  brandNameLight: {
    opacity: 0.7,
    fontWeight: '400',
  },
  backBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  backTitle: {
    marginLeft: 12,
    flex: 1,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 10,
    marginTop: 2,
  },
  bellBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  bellIcon: {
    fontSize: 16,
  },
});