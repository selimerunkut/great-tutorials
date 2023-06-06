import React from 'react'
import Typist from 'react-typist'

import { Button, CodeContainer, WindowModal } from '../../../gameItems/components'

const PolygonIDWebsiteWindow = ({
  isOpen,
  continueDialog,
  setInitChainInstructionsWindowVisibility
}) => {
  return (
    <WindowModal
      initTop={window.innerHeight * 0.02}
      initLeft={window.innerWidth / 2}
      initHeight={window.innerHeight * 0.8}
      initWidth={(window.innerWidth / 2) * 0.95}
      backgroundPath='./assets/items/window.png'
      dragAreaHeightPercent={12}
      windowTitle='Polygon ID Website'
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
          overflowX: 'hidden'
        }}
      >
        <div
          style={{
            marginTop: '1%',
            marginBottom: '5%',
            color: '#16DC8C',
            fontFamily: 'Roboto, Arial, Helvetica Neue, Helvetica, sans-serif',
            fontSize: 16
          }}
        >
        </div>
        <div>
          {/* <iframe src="https://platform-test.polygonid.com/sign-in" width={600} height={500}></iframe> */}
          </div>


        {/*
        <div
          style={{
            padding: '10px 50px',
            color: '#16DC8C'
          }}
        >
          <Typist cursor={{ show: false }} avgTypingDelay={50} loop>
            Scanning for local network ...
          </Typist>
        </div>
        */}
        {/*
        <Button
          className='is-warning'
          onClick={() => {
            continueDialog()
            setInitChainInstructionsWindowVisibility(false)
          }}
        >
          Done
        </Button>
      */}
      </div>
    </WindowModal>
  )
}

export default PolygonIDWebsiteWindow
