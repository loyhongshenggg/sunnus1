import { StyleSheet } from 'react-native'

const sideButton = {
  size: 56,
  color: '#fff',
}

const map = StyleSheet.create({
  /* ==========
   * containers
   * ==========
   */
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  overlap: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  timerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    // backgroundColor: '#bbf7d0',
    // opacity: 0.7,
  },
  mapTopContainer: {
    flex: 1,
    alignItems: 'flex-end',
    // backgroundColor: '#bbf7d0',
    // opacity: 0.7,
  },
  mapBottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: '#93c5fd',
    // opacity: 0.6,
  },
  mapRightContainer: {
    alignItems: 'flex-end',
  },
  mapLeftContainer: {
    flex: 1,
  },
  mapUIContainer: {
    /* take % of screen's dimensions and center it */
    width: '90%',
    height: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',

    display: 'flex',
    flexDirection: 'column',
  },
  /* ===========
   * text fields
   * ===========
   */
  timerText: {
    fontSize: 36,
    fontWeight: '600',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  flex1: {
    flex: 1,
  },

  mapSideButton: {
    marginTop: 14,
    width: sideButton.size,
    height: sideButton.size,
    backgroundColor: sideButton.color,
    borderRadius: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#282828',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
})

export default map