import { Tabs } from 'expo-router'
import { House, UsersThree, ClockCounterClockwise, UserCircle } from 'phosphor-react-native'
import { useTranslation } from 'react-i18next'
import { useSanadTheme } from '../../src/lib/theme'
import { TabBar } from '../../src/components/TabBar'

export default function TabsLayout() {
  const theme = useSanadTheme()
  const { t } = useTranslation()
  return (
    <Tabs
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: theme.colors.background },
        tabBarHideOnKeyboard: true
      }}>
      <Tabs.Screen name="index" options={{ title: t('navigation.home'), tabBarIcon: ({ color, focused }) => <House size={24} color={typeof color === 'string' ? color : theme.colors.textMuted} weight={focused ? 'fill' : 'regular'} /> }} />
      <Tabs.Screen name="community" options={{ title: t('navigation.perks'), tabBarIcon: ({ color, focused }) => <UsersThree size={24} color={typeof color === 'string' ? color : theme.colors.textMuted} weight={focused ? 'fill' : 'regular'} /> }} />
      <Tabs.Screen name="activity" options={{ title: t('navigation.activity'), tabBarIcon: ({ color, focused }) => <ClockCounterClockwise size={24} color={typeof color === 'string' ? color : theme.colors.textMuted} weight={focused ? 'fill' : 'regular'} /> }} />
      <Tabs.Screen name="account" options={{ title: t('navigation.account'), tabBarIcon: ({ color, focused }) => <UserCircle size={24} color={typeof color === 'string' ? color : theme.colors.textMuted} weight={focused ? 'fill' : 'regular'} /> }} />
    </Tabs>
  )
}
