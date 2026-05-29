import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

const TABS = [
  { key: 'home', label: 'Início', icon: '●' },
  { key: 'map', label: 'Mapa', icon: '●' },
  { key: 'history', label: 'Histórico', icon: '●' },
  { key: 'profile', label: 'Perfil', icon: '●' },
];

export default function NavBar({ activeTab = 'home', onTabPress }) {
  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = tab.key === activeTab;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => onTabPress && onTabPress(tab.key)}
          >
            <Text style={[styles.icon, isActive && styles.iconActive]}>
              {tab.icon}
            </Text>
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.border,
    flexDirection: 'row',
    paddingBottom: 12,
    paddingTop: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 3,
  },
  icon: {
    fontSize: 20,
    opacity: 0.5,
  },
  iconActive: {
    opacity: 1,
  },
  label: {
    fontSize: 9,
    color: COLORS.navInactive,
    fontWeight: '500',
  },
  labelActive: {
    color: COLORS.navActive,
    fontWeight: '700',
  },
});