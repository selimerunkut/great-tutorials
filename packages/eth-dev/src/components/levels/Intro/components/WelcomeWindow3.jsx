import React from 'react'

import { backgroundIds } from '../../../gameItems/components/Background/backgroundsMap'
import { WindowModal, Button } from '../../../gameItems/components'

const WelcomeWindow3 = ({
  isOpen,
  enterGame,
  setBackgroundId,
  setShowWelcomeWindow3,
  setShowFactionSupportOverviewWindow
}) => {
  const initHeight = window.innerHeight * 0.9
  const initWidth = window.innerWidth * 0.8

  const audio = {
    soundtrack: new Audio('./assets/sounds/mixkit-game-level-music-689.wav'),
    click: new Audio(
      './assets/sounds/mixkit-quick-positive-video-game-notification-interface-265.wav'
    )
  }

  return (
    <WindowModal
      // place window in center of screen
      initTop={window.innerHeight / 2 - initHeight / 2}
      initLeft={window.innerWidth / 2 - initWidth / 2}
      initHeight={initHeight}
      initWidth={initWidth}
      backgroundPath="./assets/items/window.png"
      dragAreaHeightPercent={12}
      windowTitle="Harberger Tax"
      isOpen={isOpen}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <div
        className="content"
        style={{
          float: 'left',
          width: '100%',
          height: '100%',
          overflowY: 'auto',
          overflowX: 'hidden',
          fontSize: '12px',
          lineHeight: '25px'
        }}
      >
        <h2 style={{ textAlign: 'center', marginTop: 20, marginBottom: 20, color: '#16DC8C' }}>
          Unlimited Token gift from BeautyChain
        </h2>
        <p style={{ lineHeight: '30px', color: '#16DC8C' }}>
          In a cyberpunk world of decentralized economies, BeautyChain's team was rocked by an
          unexpected revelation. On April 22nd, the dark underbelly of the system exposed itself.
          Attackers, exploiting a hidden vulnerability, triggered an integer overflow, granting them
          an unimaginable hoard of 10^58 BEC tokens.
        </p>
        <p style={{ lineHeight: '30px', color: '#16DC8C' }}>
          The team, thrust into chaos, analyzed the buggy contract—a twisted mutation of the
          standard EIP20 token. The flaw, glaringly evident within the batchTransfer() function, led
          to this disastrous breach. Now, amidst the neon-lit shadows, they raced against time,
          seeked justice and redemption, hoping to reclaim what was stolen from the depths of their
          cryptographic labyrinth.
        </p>

        <div style={{ float: 'left', width: '100%', padding: '0 20%' }}>
          <Button
            style={{ marginTop: 20 }}
            className="is-warning"
            onClick={() => {
              audio.click.play()
              setBackgroundId(backgroundIds.NiftyShop)
              enterGame()
            }}
          >
            Let's create some art
          </Button>
          <div
            style={{
              float: 'left',
              width: '100%',
              marginTop: 15,
              marginBottom: 15,
              textAlign: 'center'
            }}
          >
            {/* or */}
          </div>
          <Button
            className="is-warning"
            onClick={() => {
              audio.click.play()
              setShowWelcomeWindow3(false)
            }}
          >
            Back
          </Button>
          {/*           <Button
            className='is-warning'
            onClick={() => {
              audio.click.play()
              enterGame(true)
              setBackgroundId(backgroundIds.CityOutskirts)
              setShowFactionSupportOverviewWindow(true)
            }}
          >
            Pick Level
          </Button> */}
        </div>
      </div>
    </WindowModal>
  )
}

export default WelcomeWindow3
