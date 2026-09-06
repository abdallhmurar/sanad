import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { space } from '../../lib/theme'
import { Button } from '../../components/ui'

type Locale = 'ar' | 'he' | 'en'

// Metro needs static string literals to resolve requires - can't build the
// path from the current language at runtime, so each language's video is
// required separately here and looked up below.
function assetUri(asset: unknown): string {
  return typeof asset === 'string' ? asset : (asset as { uri: string }).uri
}
const VIDEO_BY_LOCALE: Record<Locale, string> = {
  ar: assetUri(require('./welcome-video-ar.mp4')),
  he: assetUri(require('./welcome-video-he.mp4')),
  en: assetUri(require('./welcome-video-en.mp4'))
}

/** Web: real DOM video background, one per language (each has its own baked-in text already). */
export function WelcomeScreen() {
  const { t, i18n } = useTranslation()
  const insets = useSafeAreaInsets()
  const router = useRouter()
  const locale: Locale = i18n.language.startsWith('he') ? 'he' : i18n.language.startsWith('en') ? 'en' : 'ar'
  const videoUri = VIDEO_BY_LOCALE[locale] ?? VIDEO_BY_LOCALE.ar

  return (
    <View style={styles.welcomeBg}>
      <video
        key={locale}
        src={videoUri}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
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
