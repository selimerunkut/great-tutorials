import React, { useEffect } from 'react'


import { Link } from 'react-router-dom'

import { routesMap } from '../../../../../routes'
import { enrichDialog } from '../../../../../helpers'
import { SpeakerLeft, SpeakerRight, Button } from '../../../../gameItems/components'

import { DIALOG_PART_ID as CREATE_ATTESTATION } from './CreateAttestation'
import { DIALOG_PART_ID as CREATE_A_SCHEMA } from './CreateASchema'
import { DIALOG_PART_ID as PolygoneID } from '../../../polygon-id/dialog/dialogParts/Start.jsx'

export const LEVEL_ID = 'Intro'
export const DIALOG_PART_ID = `${LEVEL_ID}/FirstContact`


  const showWelcomeWindow = localStorage.getItem('Intro-showWelcomeWindow')
  const showWelcomeWindow2 = localStorage.getItem('Intro-showWelcomeWindow2')
  

console.log("showWelcomeWindow", showWelcomeWindow)
console.log("showWelcomeWindow2", showWelcomeWindow2)

const _dialog = [
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">Hello old friend.</SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">Nice to see you here</SpeakerLeft>
    ),
    choices: null
  },
  /*   {
    dialog: () => (
      <SpeakerLeft pathToAvatar='./assets/punk_anon.png'>
        What have you been up to all this time?
      </SpeakerLeft>
    ),
    choices: null
  }, */
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">What do you want to do?</SpeakerLeft>
    ),
    choices: ({ jumpToDialogPath }) => {
      
      console.log("showWelcomeWindow", showWelcomeWindow)

      return (
        <>
        {showWelcomeWindow === 'true' && (
          <Button
            className="is-warning"
            onClick={() =>
              jumpToDialogPath({
                dialogPathId: CREATE_ATTESTATION
              })
            }
          >
            Create Attestation
          </Button>
        )}
{/*           <Button
            className="is-warning"
            onClick={() =>
              jumpToDialogPath({
                dialogPathId: CREATE_A_SCHEMA
              })
            }
          >
            Create a Schema
          </Button>  */}
          {showWelcomeWindow2 === 'true' && (
          <Button
            className="is-warning"
            onClick={() =>
              jumpToDialogPath({
                dialogPathId: PolygoneID
              })
            }
          >
            Create Polygon ID
          </Button> 
          )}
        </>
      )
    }
  }
]


const enrichedDialog = enrichDialog(_dialog, DIALOG_PART_ID)

export default enrichedDialog
