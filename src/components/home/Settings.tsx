import { Text, View, TouchableOpacity } from 'react-native'
import { Modal } from 'react-native-paper'
import { AuthenticatedPages, AuthPage } from '@/types/navigation'
import { UseState } from '@/types/SOAR'
import { home as styles } from '@/styles/fresh'
import { auth } from '@/sunnus/firebase'
import { Auth } from 'firebase/auth'
import { ButtonRed } from '@/components/Buttons'

const DevButton = ({ onPress, children, containerStyle, textStyle }: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.devButton, containerStyle]}
    >
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  )
}

const Settings = ({
  showSettingsState,
  navigation,
  logoutHandler,
}: {
  showSettingsState: UseState<boolean>
  navigation: AuthPage<'HomeScreen'>
  logoutHandler: (auth: Auth) => void
}) => {
  const [showSettings, setShowSettings] = showSettingsState
  function go(target: keyof AuthenticatedPages) {
    navigation.navigate(target)
    setShowSettings(false)
  }
  return (
    <Modal
      visible={showSettings}
      dismissable={true}
      onDismiss={() => setShowSettings(false)}
    >
      <View style={styles.modalContainer}>
        <DevButton
          onPress={() => go('GeneratorScreen')}
          textStyle={styles.GenerateQRbuttonText}
          containerStyle={styles.GenerateQRbutton}
        >
          Generate QR
        </DevButton>
        <DevButton
          onPress={() => go('DEVScreen')}
          textStyle={styles.DEVbuttonText}
          containerStyle={styles.DEVbutton}
        >
          Development
        </DevButton>
        <View style={{ height: 24 }} />
        <ButtonRed onPress={() => logoutHandler(auth)}>Logout</ButtonRed>
      </View>
    </Modal>
  )
}

export default Settings