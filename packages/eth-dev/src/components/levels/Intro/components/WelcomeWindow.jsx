import React from 'react'

import { backgroundIds } from '../../../gameItems/components/Background/backgroundsMap'
import { WindowModal, Button } from '../../../gameItems/components'

const WelcomeWindow = ({
  isOpen,
  enterGame,
  setBackgroundId,
  setShowWelcomeWindow,
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
      backgroundPath='./assets/items/window.png'
      dragAreaHeightPercent={12}
      windowTitle='EAS.TUTORIAL'
      isOpen={isOpen}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <div
        className='content'
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
          Welcome to EAS, the global attestation layer for the Ethereum ecosystem!
        </h2>
        <p style={{ lineHeight: '30px', color: '#16DC8C' }}>
          You are about to enter a game which aims to prepare you to enhance global consumer safety & trustless economies using attestations. 
          It provides various applications across a range of industries and scenarios. 
          <br />
          You will take the role of a tech-savy cryptopunk Attestor, who attests to the authenticity of certain information!
        </p>
        <p style={{ lineHeight: '30px', color: '#16DC8C' }}>
          Attest to anything and everything!
        </p>
        <p style={{ lineHeight: '30px', color: '#16DC8C' }}>
          Attestations are taken from real-world examples. 
          From apps and protocols that are on chain such as  Decentralized Identifiers, Verifiable Credentials, Cryptographic Proofs, Claims & Web3 Badges or off-chain such as Passports & IDs, Social Accounts, 
          any Statements you make in some cases handling hundreds of millions of $$$.
        </p>
        <div style={{ float: 'left', width: '100%', padding: '0 20%' }}>
          <Button
            style={{ marginTop: 20 }}
            className='is-warning'
            onClick={() => {
              audio.click.play()
              setBackgroundId(backgroundIds.CityOutskirts)
              enterGame()
            }}
          >
            Start Your Attestation Journey
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

export default WelcomeWindow
