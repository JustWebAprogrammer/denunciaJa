import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export default function StepIndicator({ currentStep = 1, totalSteps = 3 }) {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }, (_, i) => {
        const stepNum = i + 1;
        const isDone = stepNum < currentStep;
        const isActive = stepNum === currentStep;

        return (
          <React.Fragment key={stepNum}>
            {/* Número do passo */}
            <View
              style={[
                styles.circle,
                isDone && styles.circleDone,
                isActive && styles.circleActive,
              ]}
            >
              <Text
                style={[
                  styles.circleText,
                  (isDone || isActive) && styles.circleTextWhite,
                ]}
              >
                {stepNum}
              </Text>
            </View>

            {/* Linha entre passos */}
            {stepNum < totalSteps && (
              <View
                style={[
                  styles.line,
                  isDone && styles.lineDone,
                ]}
              />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleDone: {
    backgroundColor: COLORS.primary,
  },
  circleActive: {
    backgroundColor: COLORS.black,
  },
  circleText: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.textSecondary,
  },
  circleTextWhite: {
    color: '#FFFFFF',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
    marginHorizontal: 4,
  },
  lineDone: {
    backgroundColor: COLORS.primary,
  },
});