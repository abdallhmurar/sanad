import { ActionCard } from '../v2'

const illustration = require('../../../assets/images/help-hands-illustration.png')
const fullCard = require('../../../assets/images/help-hands.png')

type Locale = 'ar' | 'he' | 'en'

type Props = {
  locale?: Locale
  title: string
  description: string
  onPress: () => void
}

/** Native: no video pipeline set up yet, so this keeps the existing static-image ActionCard unchanged (locale unused here). */
export default function WantToHelpCard({ title, description, onPress }: Props) {
  return (
    <ActionCard
      illustration={illustration}
      fullCard={fullCard}
      tone="community"
      title={title}
      description={description}
      onPress={onPress}
    />
  )
}
