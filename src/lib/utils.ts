import { default as RNToast } from 'react-native-root-toast'

export function Toast(string: string) {
  RNToast.show(string, {
    duration: 2000,
    opacity: 0.7,
  })
}

export function capitalizeFirstLettersAndJoin(string: string) {
  var separateWord = string.split(' ')
  for (var i = 0; i < separateWord.length; i++) {
    separateWord[i] =
      separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1)
  }
  return separateWord.join('')
}
