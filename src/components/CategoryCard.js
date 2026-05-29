import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export default function CategoryCard({ category, onPress }) {
  const colors = COLORS[category.colorKey] || COLORS.outros;

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.bg }]}
      onPress={() => onPress && onPress(category)}
    >
      <Text style={[styles.label, { color: colors.text }]}>{category.name}</Text>
      <Text style={[styles.count, { color: colors.count }]}>
        {category.count} alertas hoje
      </Text>
    </TouchableOpacity>
  );
}

// Versão seleccionável para o formulário de denúncia
export function CategorySelectable({ category, selected, onPress }) {
  const colors = COLORS[category.colorKey] || COLORS.outros;

  return (
    <TouchableOpacity
      style={[
        styles.selectableCard,
        { backgroundColor: colors.bg },
        selected && { borderColor: COLORS.primary, borderWidth: 1.5 },
      ]}
      onPress={() => onPress && onPress(category)}
    >
      <Text style={[styles.selectableLabel, { color: colors.text }]}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 11,
    alignItems: 'flex-start',
    gap: 4,
  },
  emoji: {
    fontSize: 18,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
  },
  count: {
    fontSize: 10,
  },
  // Selectable version
  selectableCard: {
    borderRadius: 10,
    padding: 9,
    alignItems: 'flex-start',
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  selectableEmoji: {
    fontSize: 16,
  },
  selectableLabel: {
    fontSize: 11,
    fontWeight: '700',
  },
});