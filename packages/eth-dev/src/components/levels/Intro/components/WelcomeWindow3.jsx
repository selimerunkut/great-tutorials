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
          Welcome to the World of Harberger
        </h2>
        <p style={{ lineHeight: '30px', color: '#16DC8C' }}>
          In the neon-lit recesses of the sprawling digital expanse, Harberger emerges as a coveted
          anomaly—a perpetually available digital masterpiece. A sinister dance ensues as the buyer,
          driven by desire, sets the price of acquisition. This eternal auction sustains the artist
          through a 5% patronage, a pact intertwined with their chosen price. A digital steward
          looms, ready to reclaim the art if the patronage falters.
        </p>
        <p style={{ lineHeight: '30px', color: '#16DC8C' }}>
          Enabled by Gnosis, scarcity reigns over this digital enigma. Ether and a browser unlock
          the gateway to ownership, revealing the masterpiece across all screens.
        </p>

        <p style={{ lineHeight: '30px', color: '#16DC8C' }}>
          Yet, heed this warning amidst the cybernetic undercurrents: the unchained smart contracts
          bear untamed risks.
        </p>

        <p style={{ lineHeight: '30px', color: '#16DC8C' }}>
          Within this cryptic creation, questions emerge, piercing the fabric of our existence. Does
          this digital property paradigm reshape the bond between collector, patron, and artist? Can
          accessible patronage forge new realms of revenue? Does this system sustainably fund
          creativity's embers? Does the perpetual auction transform the art-artist dynamic? Does the
          art's ever-changing hands amplify its value—financially and artistically? Does the
          ever-on-sale art illuminate the hidden commodification of our online lives?
        </p>

        <p style={{ lineHeight: '30px', color: '#16DC8C' }}>
          Harberger's cyberpunk tale unravels, weaving a narrative that blurs the boundaries of art
          and commerce, leaving us to grapple with our own reflection in the neon-lit abyss.
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
