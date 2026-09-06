import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { civicColors, palette } from '../lib/theme'

/** Native: no video pipeline set up yet, so this keeps a static mark + spinner (also fixes the leftover "SANAD" wordmark from before the rebrand). */
export function LaunchScreen() {
  return (
    <View style={styles.launch}>
      <View style={styles.mark}><Text style={styles.markText}>A</Text></View>
      <Text style={styles.wordmark}>AKHOO</Text>
      <ActivityIndicator color={civicColors.signalBlue} style={styles.spinner} />
    </View>
  )
}

const styles = StyleSheet.create({
  launch: { flex: 1, backgroundColor: civicColors.fog, alignItems: 'center', justifyContent: 'center' },
  mark: { width: 64, height: 64, borderRadius: 22, backgroundColor: civicColors.navy, alignItems: 'center', justifyContent: 'center' },
  markText: { color: palette.onCivic, fontFamily: 'Inter_800ExtraBold', fontSize: 30 },
  wordmark: { color: civicColors.navy, fontFamily: 'Inter_800ExtraBold', fontSize: 20, letterSpacing: 3, marginTop: 16 },
  spinner: { marginTop: 24 }
})
