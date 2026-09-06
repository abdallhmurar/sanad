import { Image, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { space } from '../../lib/theme'
import { Button } from '../../components/ui'

const welcomeBackground = require('../../../assets/images/1.png')

/** Native: no video pipeline set up yet, so this keeps the existing static-image background. */
export function WelcomeScreen() {
  const { t } = useTranslation()
  const insets = useSafeAreaInsets()
  const router = useRouter()
  return (
    <View style={styles.welcomeBg}>
      <Image
        source={welcomeBackground}
        resizeMode="cover"
        // The plain 1.png export is at @2x-ish pixel dimensions with no
        // density suffix, so Metro reports its intrinsic size as if it
        // were 1x - explicit width/height (not just absoluteFill's inset
        // properties) are needed to make the image actually fill and
        // center-crop within its container instead of rendering at native
        // pixel size and overflowing.
        style={[StyleSheet.absoluteFill, { width: '100%', height: '100%' }]}
      />
      <View style={[styles.welcomeActions, { paddingBottom: Math.max(insets.bottom, space.lg) }]}>
        <Button label={t('welcome.createAccount')} size="lg" onPress={() => router.push('/signup')} />
        <Button label={t('welcome.haveAccount')} variant="secondary" size="lg" onPress={() => router.push('/login')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  welcomeBg: { flex: 1, justifyContent: 'flex-end', overflow: 'hidden' },
  welcomeActions: { paddingHorizontal: space.xl, paddingTop: space.lg, gap: space.md }
})
