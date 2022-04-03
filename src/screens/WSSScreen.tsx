import { KeyboardAvoidingView, Text } from 'react-native'

/* navigation */
import { AuthPage } from '@/types/navigation'
import { useNavigation } from '@react-navigation/native'

/* sunnus components */
import { WSS as styles } from '@/styles/fresh'

const WSSScreen = () => {
  const navigation = useNavigation<AuthPage<'WSSScreen'>>()

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text>Welcome to the WSS page!</Text>
      <Text>(you can navigate back by swiping in from the left)</Text>
    </KeyboardAvoidingView>
  )
}

export default WSSScreen
