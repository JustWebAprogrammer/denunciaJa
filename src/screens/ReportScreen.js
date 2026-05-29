import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { COLORS } from '../theme/colors';
import TopBar from '../components/TopBar';
import ShieldIcon from '../components/ShieldIcon';
import StepIndicator from '../components/StepIndicator';
import { CategorySelectable } from '../components/CategoryCard';
import { CATEGORIES } from '../data/mockData';

export default function ReportScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [description, setDescription] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);

  const handleSubmit = () => {
    if (!selectedCategory) {
      Alert.alert('Atenção', 'Por favor, selecione uma categoria.');
      return;
    }
    Alert.alert(
      'Denúncia enviada!',
      'A sua denúncia foi registada com sucesso. Obrigado por contribuir para a segurança de Luanda.',
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* TopBar com botão voltar */}
        <TopBar
          title="Nova denúncia"
          subtitle="Passo 1 de 3 — Tipo de ocorrência"
          showBack
          onBack={() => navigation.goBack()}
        />

        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          {/* Indicador de passos */}
          <StepIndicator currentStep={1} totalSteps={3} />

          {/* Categoria */}
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Categoria</Text>
            <View style={styles.categoriesGrid}>
              {CATEGORIES.map((cat) => (
                <View key={cat.id} style={styles.categoryWrapper}>
                  <CategorySelectable
                    category={cat}
                    selected={selectedCategory?.id === cat.id}
                    onPress={setSelectedCategory}
                  />
                </View>
              ))}
            </View>
          </View>

          {/* Descrição */}
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Descrição</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Descreva brevemente o que aconteceu..."
              placeholderTextColor={COLORS.textSecondary}
              multiline
              numberOfLines={3}
              value={description}
              onChangeText={setDescription}
            />
          </View>

          {/* Localização */}
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Localização</Text>
            <View style={styles.locationRow}>
              <View style={styles.locationDot} />
              <Text style={styles.locationText}>Mutamba, Luanda</Text>
              <View style={styles.locationBadge}>
                <Text style={styles.locationBadgeText}>GPS activo</Text>
              </View>
            </View>
          </View>

          {/* Foto / vídeo */}
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Foto / vídeo</Text>
            <View style={styles.photoRow}>
              <TouchableOpacity style={styles.photoAdd}>
                <Text style={styles.photoAddIcon}>+</Text>
              </TouchableOpacity>
              <Text style={styles.photoTip}>
                Opcional. Ajuda na verificação da ocorrência pelas autoridades.
              </Text>
            </View>
          </View>

          {/* Toggle anónimo */}
          <TouchableOpacity
            style={styles.anonymousRow}
            onPress={() => setIsAnonymous(!isAnonymous)}
          >
            <View style={[styles.toggle, isAnonymous && styles.toggleOn]}>
              <View
                style={[
                  styles.toggleKnob,
                  isAnonymous ? styles.toggleKnobRight : styles.toggleKnobLeft,
                ]}
              />
            </View>
            <View style={styles.anonymousText}>
              <Text style={styles.anonymousTitle}>Denúncia anónima</Text>
              <Text style={styles.anonymousSub}>
                A sua identidade não será partilhada
              </Text>
            </View>
          </TouchableOpacity>

          {/* Botão enviar */}
          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <ShieldIcon size={20} color="#FFFFFF" />
            <Text style={styles.submitLabel}>Enviar denúncia</Text>
          </TouchableOpacity>

          <View style={{ height: 20 }} />
        </ScrollView>
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
  // Campo
  field: {
    marginBottom: 12,
  },
  fieldLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.textSecondary,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  // Grid de categorias
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  categoryWrapper: {
    width: '48%',
  },
  // Descrição
  textArea: {
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    color: COLORS.textPrimary,
    minHeight: 70,
    textAlignVertical: 'top',
  },
  // Localização
  locationRow: {
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },
  locationText: {
    flex: 1,
    fontSize: 11,
    color: COLORS.textPrimary,
  },
  locationBadge: {
    backgroundColor: '#E1F5EE',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 10,
  },
  locationBadgeText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#085041',
  },
  // Foto
  photoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  photoAdd: {
    width: 54,
    height: 54,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoAddIcon: {
    fontSize: 22,
  },
  photoTip: {
    flex: 1,
    fontSize: 10,
    color: COLORS.textSecondary,
    lineHeight: 15,
    paddingTop: 4,
  },
  // Toggle anónimo
  anonymousRow: {
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },
  toggle: {
    width: 36,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#CCC',
    justifyContent: 'center',
    padding: 2,
  },
  toggleOn: {
    backgroundColor: COLORS.primary,
  },
  toggleKnob: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  toggleKnobRight: {
    alignSelf: 'flex-end',
  },
  toggleKnobLeft: {
    alignSelf: 'flex-start',
  },
  anonymousText: {
    flex: 1,
  },
  anonymousTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  anonymousSub: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginTop: 1,
  },
  // Botão enviar
  submitBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  submitIcon: {
    fontSize: 18,
  },
  submitLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },
});