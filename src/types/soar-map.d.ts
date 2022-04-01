import { SOARPageProps } from '@/types/navigation'

/* Map and SOAR */

export type MapButtonProps = {
  style?: any
  icon: any
  onPress: any
  activated?: any
}

export type MapProps = {
  // getCurrentLocation: any
  mapRef: any
  navigation: SOARPageProps
  displayLocations: any
}

export type SafeDivProps = {
  style?: any
  children?: any
}

type soarPoint = Array<{
  id: string
  google_map_pin_url: string
  latitude: number
  longitude: number
}>

export type ADMINLocations = {
  medicPoints: soarPoint
  waterPoints: soarPoint
}

export type SOARContextProps = {
  loadingState: [boolean, Dispatch<SetStateAction<boolean>>]
  scanningState: [boolean, Dispatch<SetStateAction<boolean>>]
  locationState: [Array<any>, Dispatch<SetStateAction<Array<any>>>]
  filteredState: [any, Dispatch<SetStateAction<any>>]
  QRState: [string, Dispatch<SetStateAction<string>>]
}
