import React from 'react'

import { backgroundIds } from '../../../gameItems/components/Background/backgroundsMap'
import { WindowModal, Button } from '../../../gameItems/components'

const WelcomeWindow4 = ({
  isOpen,
  enterGame,
  setBackgroundId,
  setShowWelcomeWindow4,
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
          Welcome to the Taiko Layerverse
        </h2>
        <p style={{ lineHeight: '30px', color: '#16DC8C' }}>
          In the neon-lit shadows of the metaverse, the Taiko testnet, known as Sepolia,
          emerges, beckoning developers to unleash their creations. Here, the Type 1 ZK-EVM, a
          mirror of the Ethereum realm, welcomes all with open arms. Your familiar Ethereum tools
          and smart contracts find solace in this cybernetic domain.
        </p>
        <p style={{ lineHeight: '30px', color: '#16DC8C' }}>
          Seek the Faucets, where the dance of sample ERC20 tokens unfolds, awaiting your command.
          For ETH, venture through the Sepolia ETH faucets or find guidance within the depths of
          Taiko's Discord, where comrades await.
        </p>

        <p style={{ lineHeight: '30px', color: '#16DC8C' }}>
          Fear not the boundaries, for a Bridge connects the assets, seamlessly traversing between
          testnet L2 and L1, defying the limitations of reality.
        </p>

        <p style={{ lineHeight: '30px', color: '#16DC8C' }}>
          In the heart of this digital haven, the Swap app resides, an ethereal reflection of
          Uniswap V2, ready to facilitate the exchanges that shape the future of value.
        </p>

        <p style={{ lineHeight: '30px', color: '#16DC8C' }}>
          Welcome, intrepid developer, to Taiko, where innovation knows no bounds. Embrace the
          tools, ignite your imagination, and transcend the limits of possibility.
        </p>

        <div style={{ float: 'left', width: '100%', padding: '0 20%' }}>
          <Button
            style={{ marginTop: 20 }}
            className="is-warning"
            onClick={() => {
              audio.click.play()
              setBackgroundId(backgroundIds.CitySkylineInsideNight)
              enterGame()
            }}
          >
            Let's deploy on Taiko
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
              setShowWelcomeWindow4(false)
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

export default WelcomeWindow4
