import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

const BADGE_COLORS = {
  crime: { bg: '#FCEBEB', text: '#791F1F' },
  catastrofe: { bg: '#FFF4E0', text: '#7A4A00' },
  residuos: { bg: '#E6F1FB', text: '#0C447C' },
  infraestrutura: { bg: '#EAF3DE', text: '#27500A' },
  violencia: { bg: '#FBEAF0', text: '#72243E' },
  outros: { bg: '#F1EFE8', text: '#444441' },
};

const DOT_COLORS = {
  crime: '#C0281C',
  catastrofe: '#F5A623',
  residuos: '#185FA5',
  infraestrutura: '#4A8C1F',
  violencia: '#72243E',
  outros: '#888888',
};

const CATEGORY_LABELS = {
  crime: 'Crime',
  catastrofe: 'Catástrofe',
  residuos: 'Resíduos',
  infraestrutura: 'Infraestrutura',
  violencia: 'Violência',
  outros: 'Outros',
};

export default function AlertCard({ alert, onPress }) {
  const badge = BADGE_COLORS[alert.category] || BADGE_COLORS.outros;
  const dotColor = DOT_COLORS[alert.category] || DOT_COLORS.outros;
  const label = CATEGORY_LABELS[alert.category] || 'Outros';

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress && onPress(alert)}>
      <View style={styles.row}>
        <View style={[styles.dot, { backgroundColor: dotColor }]} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{alert.title}</Text>
          <View style={styles.meta}>
            <View style={[styles.badge, { backgroundColor: badge.bg }]}>
              <Text style={[styles.badgeText, { color: badge.text }]}>{label}</Text>
            </View>
            <Text style={styles.separator}>·</Text>
            <Text style={styles.time}>{alert.time}</Text>
            <Text style={styles.separator}>·</Text>
            <Text style={styles.location}>{alert.location}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 10,
    marginBottom: 8,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 4,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.textPrimary,
    lineHeight: 16,
    marginBottom: 4,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  badge: {
    fontSize: 9,
    fontWeight: '700',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: '700',
  },
  separator: {
    fontSize: 10,
    color: COLORS.textSecondary,
    opacity: 0.4,
  },
  time: {
    fontSize: 10,
    color: COLORS.textSecondary,
  },
  location: {
    fontSize: 10,
    color: COLORS.textSecondary,
  },
});