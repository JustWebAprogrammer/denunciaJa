import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { COLORS } from '../theme/colors';
import TopBar from '../components/TopBar';
import ShieldIcon from '../components/ShieldIcon';
import CategoryCard from '../components/CategoryCard';
import AlertCard from '../components/AlertCard';
import NavBar from '../components/NavBar';
import { CATEGORIES, RECENT_ALERTS, STATS } from '../data/mockData';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* TopBar vermelha com logo */}
        <TopBar showBell />

        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          {/* Saudação */}
          <View style={styles.greeting}>
            <Text style={styles.greetLabel}>Bem-vindo,</Text>
            <Text style={styles.greetName}>Cidadão de Luanda</Text>
          </View>

          {/* Botão grande "Denunciar agora" */}
          <TouchableOpacity
            style={styles.alertButton}
            onPress={() => navigation.navigate('Report')}
          >
            <View style={styles.alertButtonIcon}>
              <ShieldIcon size={32} color="#FFFFFF" />
            </View>
            <View style={styles.alertButtonText}>
              <Text style={styles.alertButtonLabel}>TOQUE PARA</Text>
              <Text style={styles.alertButtonMain}>Denunciar agora</Text>
            </View>
            <Text style={styles.alertButtonArrow}>{'>'}</Text>
          </TouchableOpacity>

          {/* Categorias */}
          <Text style={styles.sectionTitle}>Categorias</Text>
          <View style={styles.categoriesGrid}>
            {CATEGORIES.slice(0, 4).map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                onPress={() => {}}
              />
            ))}
          </View>

          {/* Estatísticas */}
          <View style={styles.statsCard}>
            <Text style={styles.statsTitle}>Estatísticas — hoje</Text>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Total de alertas</Text>
              <Text style={[styles.statValue, styles.statRed]}>{STATS.totalAlertas}</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Em análise</Text>
              <Text style={styles.statValue}>{STATS.emAnalise}</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Resolvidos</Text>
              <Text style={styles.statValue}>{STATS.resolvidos}</Text>
            </View>
            <View style={[styles.statRow, { borderBottomWidth: 0 }]}>
              <Text style={styles.statLabel}>Comunidades activas</Text>
              <Text style={styles.statValue}>{STATS.comunidadesActivas}</Text>
            </View>
          </View>

          {/* Feed de ocorrências recentes */}
          <Text style={styles.sectionTitle}>Ocorrências recentes</Text>
          {RECENT_ALERTS.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}

          <View style={{ height: 20 }} />
        </ScrollView>

        {/* NavBar inferior */}
        <NavBar
          activeTab="home"
          onTabPress={(key) => {
            if (key === 'map') navigation.navigate('Map');
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
  scroll: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 14,
  },
  // Saudação
  greeting: {
    marginBottom: 12,
  },
  greetLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  greetName: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginTop: 2,
  },
  // Botão denunciar
  alertButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 14,
  },
  alertButtonIcon: {
    width: 36,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shieldEmoji: {
    fontSize: 28,
  },
  alertButtonText: {
    flex: 1,
  },
  alertButtonLabel: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.75)',
    letterSpacing: 1,
    fontWeight: '500',
  },
  alertButtonMain: {
    fontSize: 15,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  alertButtonArrow: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.8)',
  },
  // Secções
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.textSecondary,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  // Grid de categorias
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 14,
  },
  // Estatísticas
  statsCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  statsTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.border,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  statValue: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  statRed: {
    color: COLORS.primary,
  },
});