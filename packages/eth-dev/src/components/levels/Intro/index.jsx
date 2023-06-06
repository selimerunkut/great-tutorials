import React, { useEffect } from 'react'
import { useLocalStorage } from 'react-use'
import { backgroundIds } from '../../gameItems/components/Background/backgroundsMap'
import {
  Background,
  MonologWindow,
  MonologDialogContainer,
  Terminal,
  TerminalDialogContainer,
  Button
} from '../../gameItems/components'

import { WelcomeWindow, WelcomeWindow2 } from './components'
import levelDialog from './dialog'
import { DIALOG_PART_ID as INITIAL_DIALOG_PART_ID } from './dialog/dialogParts/StartMonolog'

export const LEVEL_ID = 'Intro'

const IntroLevel = () => {
  // --------------------------------
  // set initial level background
  const [backgroundId, setBackgroundId] = useLocalStorage(
    `${LEVEL_ID}-backgroundId`,
    backgroundIds.Workstation
  )

  // set initial dialog index
  const [currentDialogIndex, setCurrentDialogIndex] = useLocalStorage(
    `${LEVEL_ID}-currentDialogIndex`,
    0
  )
  const continueDialog = () => setCurrentDialogIndex(currentDialogIndex + 1)

  const [
    dialogPathsVisibleToUser,
    setDialogPathsVisibleToUser
  ] = useLocalStorage(`${LEVEL_ID}-dialogPathsVisibleToUser`, [INITIAL_DIALOG_PART_ID])

  const jumpToDialogPath = ({ dialogPathId }) => {
    // determine new currentDialogIndex
    let updatedCurrentDialogIndex
    levelDialog.map((dialogPart, index) => {
      if (!updatedCurrentDialogIndex && dialogPart.dialogPathId === dialogPathId) {
        updatedCurrentDialogIndex = index
      }
    })
    // add dialogPathId to dialogParts that are visible to the user
    setDialogPathsVisibleToUser([...dialogPathsVisibleToUser, dialogPathId])
    setCurrentDialogIndex(updatedCurrentDialogIndex)
  }
  // --------------------------------

  // https://mixkit.co/free-sound-effects/game/
  const audio = {
    soundtrack: new Audio('./assets/sounds/mixkit-game-level-music-689.wav'),
    click: new Audio(
      './assets/sounds/mixkit-quick-positive-video-game-notification-interface-265.wav'
    )
  }

  const [showWelcomeWindow, setShowWelcomeWindow] = useLocalStorage(
    `${LEVEL_ID}-showWelcomeWindow`,
    false
  )
  const [showWelcomeWindow2, setShowWelcomeWindow2] = useLocalStorage(
    `${LEVEL_ID}-showWelcomeWindow2`,
    false
  )
  const [showFactionSupportOverviewWindow, setShowFactionSupportOverviewWindow] = useLocalStorage(
    `${LEVEL_ID}-showFactionSupportOverviewWindow`,
    false
  )

  const [didEnterGame, setDidEnterGame] = useLocalStorage(`${LEVEL_ID}-didEnterGame`, false)
  const enterGame = () => setDidEnterGame(true)

  const [didFinishMonolog, setDidFinishMonolog] = useLocalStorage(
    `${LEVEL_ID}-didFinishMonolog`,
    false
  )
  const finishMonolog = () => setDidFinishMonolog(true)

  const removeMonologFromDialog = () => {
    const arr = dialogPathsVisibleToUser.filter(e => e !== INITIAL_DIALOG_PART_ID)
    setDialogPathsVisibleToUser(arr)
  }

  useEffect(() => {
    if (didFinishMonolog) {
      removeMonologFromDialog(levelDialog)
    }
  }, [didFinishMonolog])

  const [showTerminal, setShowTerminal] = useLocalStorage(`${LEVEL_ID}-showTerminal`, false)
  const dispalyTerminal = () => setShowTerminal(true)

  return (
    <>
      <Background backgroundId={backgroundId} />

      <div id='Intro'>
        {!showWelcomeWindow && !didEnterGame && (
          <Button
            className='is-warning'
            style={{
              position: 'absolute',
              top: '28%',
              right: '4%',
              width: '17%'
            }}
            onClick={() => {
              audio.click.play()
              setShowWelcomeWindow(true)
            }}
          >
            <span style={{ marginLeft: 5, marginRight: 5 }}>Leave your mark! (EAS)</span>
          </Button>
        )}
        {!showWelcomeWindow && !didEnterGame && (
        <Button
            className='is-warning'
            style={{
              position: 'absolute',
              top: '36%',
              right: '44.5%',
              width: '13%'
            }}
            onClick={() => {
              audio.click.play()
              setShowWelcomeWindow2(true)
            }}
          >
            <span style={{ marginLeft: 8, marginRight: 8 }}>Who are you? (Polygon ID)</span>
          </Button>
          )}
        <WelcomeWindow
          isOpen={showWelcomeWindow && !didEnterGame}
          setBackgroundId={setBackgroundId}
          enterGame={enterGame}
          setShowWelcomeWindow={setShowWelcomeWindow}
          setShowFactionSupportOverviewWindow={setShowFactionSupportOverviewWindow}
        />
        <WelcomeWindow2
          isOpen={showWelcomeWindow2 && !didEnterGame}
          setBackgroundId={setBackgroundId}
          enterGame={enterGame}
          setShowWelcomeWindow2={setShowWelcomeWindow2}
          setShowFactionSupportOverviewWindow={setShowFactionSupportOverviewWindow}
        />

        {didFinishMonolog && (
          <Terminal
            isOpen={showTerminal}
            initTop={window.innerHeight - 840}
            initLeft={10}
            showTerminal={dispalyTerminal}
            showMessageNotification={{
              delayInSeconds: showTerminal ? null : 3
            }}
          >
            <TerminalDialogContainer
              levelDialog={levelDialog}
              currentDialogIndex={currentDialogIndex}
              setCurrentDialogIndex={setCurrentDialogIndex}
              continueDialog={continueDialog}
              dialogPathsVisibleToUser={dialogPathsVisibleToUser}
              jumpToDialogPath={jumpToDialogPath}
              setBackgroundId={setBackgroundId}
              //
            />
          </Terminal>
        )}

        <MonologWindow isOpen={didEnterGame && !didFinishMonolog} finishMonolog={finishMonolog}>
          <MonologDialogContainer
            levelDialog={levelDialog}
            currentDialogIndex={currentDialogIndex}
            setCurrentDialogIndex={setCurrentDialogIndex}
            continueDialog={continueDialog}
            dialogPathsVisibleToUser={dialogPathsVisibleToUser}
            jumpToDialogPath={jumpToDialogPath}
            setBackgroundId={setBackgroundId}
            //
            setDidFinishMonolog={setDidFinishMonolog}
          />
        </MonologWindow>
      </div>
    </>
  )
}

export default IntroLevel
