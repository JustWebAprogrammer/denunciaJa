import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { COLORS } from '../theme/colors';
import ShieldIcon from '../components/ShieldIcon';
import NavBar from '../components/NavBar';
import { MAP_PINS, FILTER_CHIPS } from '../data/mockData';

const DOT_COLORS = {
  crime: '#C0281C',
  catastrofe: '#F5A623',
  residuos: '#185FA5',
  infraestrutura: '#4A8C1F',
  violencia: '#72243E',
  outros: '#888888',
};

const BADGE_STYLES = {
  crime: { bg: '#FCEBEB', text: '#791F1F' },
  catastrofe: { bg: '#FFF4E0', text: '#7A4A00' },
  residuos: { bg: '#E6F1FB', text: '#0C447C' },
  infraestrutura: { bg: '#EAF3DE', text: '#27500A' },
};

export default function MapScreen({ navigation }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPin, setSelectedPin] = useState(null);

  const filteredPins =
    activeFilter === 'all'
      ? MAP_PINS
      : MAP_PINS.filter((p) => p.category === activeFilter);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* TopBar do mapa */}
        <View style={styles.topBar}>
          <View style={styles.brand}>
            <ShieldIcon size={22} color="#FFFFFF" />
            <Text style={styles.topBarTitle}>Mapa de alertas</Text>
          </View>
          <TouchableOpacity style={styles.cityBtn}>
            <Text style={styles.cityBtnText}>Luanda ▾</Text>
          </TouchableOpacity>
        </View>

        {/* Filtros */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterBar}
          contentContainerStyle={styles.filterContent}
        >
          {FILTER_CHIPS.map((chip) => {
            const isActive = chip.id === activeFilter;
            const chipColor = chip.colorKey ? COLORS[chip.colorKey] : null;
            return (
              <TouchableOpacity
                key={chip.id}
                style={[
                  styles.filterChip,
                  isActive && styles.filterChipActive,
                  chip.colorKey &&
                    !isActive && {
                      backgroundColor: chipColor?.bg || '#F1EFE8',
                    },
                  isActive &&
                    !chip.colorKey && { backgroundColor: COLORS.black },
                  isActive &&
                    chip.colorKey && { backgroundColor: chipColor?.text || COLORS.primary },
                ]}
                onPress={() => setActiveFilter(chip.id)}
              >
                <Text
                  style={[
                    styles.filterChipText,
                    isActive && { color: '#FFFFFF' },
                    !isActive &&
                      chip.colorKey && { color: chipColor?.text || '#444' },
                  ]}
                >
                  {chip.label} ({chip.count})
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Mapa simulado */}
        <View style={styles.mapContainer}>
          {/* Fundo do mapa com "ruas" */}
          <View style={styles.mapBg}>
            {/* Grid de ruas simuladas */}
            <View style={styles.mapGrid}>
              {[60, 120, 185, 245].map((y) => (
                <View
                  key={`h-${y}`}
                  style={[styles.roadHorizontal, { top: y }]}
                />
              ))}
              {[55, 120, 185].map((x) => (
                <View
                  key={`v-${x}`}
                  style={[styles.roadVertical, { left: x }]}
                />
              ))}
              {/* "Edifícios" */}
              {[
                { x: 20, y: 20, w: 40, h: 30 },
                { x: 70, y: 15, w: 50, h: 25 },
                { x: 130, y: 25, w: 35, h: 40 },
                { x: 20, y: 80, w: 30, h: 35 },
                { x: 60, y: 75, w: 55, h: 30 },
                { x: 130, y: 80, w: 40, h: 25 },
                { x: 20, y: 150, w: 45, h: 28 },
                { x: 80, y: 155, w: 60, h: 22 },
                { x: 155, y: 148, w: 35, h: 30 },
                { x: 30, y: 210, w: 50, h: 25 },
                { x: 95, y: 215, w: 40, h: 20 },
                { x: 150, y: 210, w: 55, h: 28 },
              ].map((b, i) => (
                <View
                  key={`b-${i}`}
                  style={[
                    styles.building,
                    {
                      left: b.x,
                      top: b.y,
                      width: b.w,
                      height: b.h,
                    },
                  ]}
                />
              ))}
            </View>

            {/* Pins */}
            {filteredPins.map((pin) => {
              const color = DOT_COLORS[pin.category] || '#888';
              const isSelected = selectedPin?.id === pin.id;
              return (
                <TouchableOpacity
                  key={pin.id}
                  style={[
                    styles.pin,
                    { left: `${pin.position.x}%`, top: `${pin.position.y}%` },
                  ]}
                  onPress={() => setSelectedPin(isSelected ? null : pin)}
                >
                  <View style={[styles.pinHead, { backgroundColor: color }]}>
                    <View style={styles.pinInner} />
                  </View>
                  <View style={[styles.pinTail, { backgroundColor: color }]} />
                </TouchableOpacity>
              );
            })}

            {/* Popup do pin selecionado */}
            {selectedPin && (
              <View
                style={[
                  styles.popup,
                  {
                    left: `${Math.min(selectedPin.position.x, 65)}%`,
                    top: `${selectedPin.position.y + 8}%`,
                  },
                ]}
              >
                <Text style={styles.popupTitle}>{selectedPin.title}</Text>
                <Text style={styles.popupMeta}>
                  {selectedPin.location} · {selectedPin.time}
                </Text>
                <View
                  style={[
                    styles.popupBadge,
                    {
                      backgroundColor:
                        BADGE_STYLES[selectedPin.category]?.bg || '#F1EFE8',
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.popupBadgeText,
                      {
                        color:
                          BADGE_STYLES[selectedPin.category]?.text || '#444',
                      },
                    ]}
                  >
                    {selectedPin.category === 'crime'
                      ? 'Crime'
                      : selectedPin.category === 'catastrofe'
                      ? 'Catástrofe'
                      : selectedPin.category === 'residuos'
                      ? 'Resíduos'
                      : 'Infraestrutura'}
                  </Text>
                </View>
              </View>
            )}

            {/* Contador */}
            <View style={styles.counter}>
              <Text style={styles.counterNum}>{filteredPins.length}</Text>
              <Text style={styles.counterLabel}>alertas</Text>
            </View>

            {/* Legenda */}
            <View style={styles.legend}>
              <View style={styles.legendRow}>
                <View style={[styles.legendDot, { backgroundColor: '#C0281C' }]} />
                <Text style={styles.legendText}>Crime</Text>
              </View>
              <View style={styles.legendRow}>
                <View style={[styles.legendDot, { backgroundColor: '#F5A623' }]} />
                <Text style={styles.legendText}>Catástrofe</Text>
              </View>
              <View style={styles.legendRow}>
                <View style={[styles.legendDot, { backgroundColor: '#185FA5' }]} />
                <Text style={styles.legendText}>Resíduos</Text>
              </View>
            </View>
          </View>
        </View>

        {/* NavBar inferior */}
        <NavBar
          activeTab="map"
          onTabPress={(key) => {
            if (key === 'home') navigation.navigate('Home');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  // TopBar
  topBar: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  topBarTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },
  cityBtn: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  cityBtnText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  // Filtros
  filterBar: {
    backgroundColor: COLORS.white,
    maxHeight: 44,
  },
  filterContent: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 6,
  },
  filterChip: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#F1EFE8',
  },
  filterChipActive: {
    backgroundColor: COLORS.black,
  },
  filterChipText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#444',
  },
  // Mapa
  mapContainer: {
    flex: 1,
  },
  mapBg: {
    flex: 1,
    backgroundColor: '#D4E4C8',
    position: 'relative',
    overflow: 'hidden',
  },
  mapGrid: {
    ...StyleSheet.absoluteFillObject,
  },
  roadHorizontal: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 2.5,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  roadVertical: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 2.5,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  building: {
    position: 'absolute',
    backgroundColor: '#BDD1B0',
    borderRadius: 3,
  },
  // Pins
  pin: {
    position: 'absolute',
    alignItems: 'center',
    transform: [{ translateX: -11 }, { translateY: -28 }],
    zIndex: 10,
  },
  pinHead: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  pinTail: {
    width: 3,
    height: 8,
    borderBottomLeftRadius: 1.5,
    borderBottomRightRadius: 1.5,
  },
  // Popup
  popup: {
    position: 'absolute',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 9,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    width: 140,
    zIndex: 20,
  },
  popupTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 2,
  },
  popupMeta: {
    fontSize: 9,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  popupBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  popupBadgeText: {
    fontSize: 9,
    fontWeight: '700',
  },
  // Contador
  counter: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
    zIndex: 15,
  },
  counterNum: {
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.primary,
  },
  counterLabel: {
    fontSize: 9,
    color: COLORS.textSecondary,
  },
  // Legenda
  legend: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 10,
    padding: 8,
    zIndex: 15,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 3,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 9,
    color: '#444',
  },
});