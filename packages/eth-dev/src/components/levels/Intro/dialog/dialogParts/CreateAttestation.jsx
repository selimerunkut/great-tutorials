import React from 'react'
import { Link } from 'react-router-dom'

import { routesMap } from '../../../../../routes'
import { enrichDialog } from '../../../../../helpers'
import { SpeakerLeft, SpeakerRight, Button } from '../../../../gameItems/components'

export const LEVEL_ID = 'Intro'
export const DIALOG_PART_ID = `${LEVEL_ID}/BuildDapps`

const _dialog = [
  {
    dialog: () => (
      <SpeakerRight pathToAvatar='./assets/punk5950.png'>
        I want to make an attestation!
      </SpeakerRight>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar='./assets/punk_anon.png'>
        I’ll introduce you to the schemas and attestations.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar='./assets/punk_anon.png'>
        Well, you can go to <a href="https://easscan.org/attestation/create" target="_blank">easscan</a> and we can open it here
      </SpeakerLeft>
    ),
    choices: ({continueDialog}) => (
      <Link to={routesMap.SetupLocalNetwork.path}>
        <Button className='is-warning'>Open EAS Page</Button>
      </Link>
    )
  }

  /*
  {
    dialog: () => <SpeakerRight pathToAvatar='./assets/punk5950.png'>I'm in!</SpeakerRight>,
    choices: null
  },
  {
    dialog: () => <SpeakerLeft pathToAvatar='./assets/punk_anon.png'>Good</SpeakerLeft>,
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar='./assets/punk_anon.png'>I already have a job for you</SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar='./assets/punk_anon.png'>
        Only if you are interested ofc ...
      </SpeakerLeft>
    ),
    choices: () => {
      <Link to={routesMap.Challenge0SimpleNFT.path}>
        <Button className='is-warning'>Drive into the city</Button>
      </Link>
    )
  }
  */
]

const enrichedDialog = enrichDialog(_dialog, DIALOG_PART_ID)

export default enrichedDialog
