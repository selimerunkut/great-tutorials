import React from 'react'
import { enrichDialog } from '../../../../../helpers'
import { SpeakerLeft, SpeakerRight, Button } from '../../../../gameItems/components'

export const DIALOG_PART_ID = 'TAIKO'
const explorerUrl = 'https://explorer.test.taiko.xyz/'
const sucessHTML1 = `<div style="float: left; width: 100%; margin-top: 15px; padding-left: 60px; position: relative;"><img src="./assets/punk_anon.png" alt="avatar" class="background-image" style="position: absolute; left: 0px; bottom: 8px; min-width: 60px; transform: scaleX(1);"><div class="nes-balloon from-left" style="width: calc(100% - 15px); padding: 6px; font-size: 12px; line-height: 25px; color: rgb(33, 37, 41);"><div style="padding-left: 8px; overflow-wrap: break-word;"><a href="${explorerUrl}address/`

const sucessHTML2 = '" target="_blank">Vaild Contract</a></div></div></div>'

const failedHTML =
  '<div style="float: left; width: 100%; margin-top: 15px; padding-left: 60px; position: relative;"><img src="./assets/punk_anon.png" alt="avatar" class="background-image" style="position: absolute; left: 0px; bottom: 8px; min-width: 60px; transform: scaleX(1);"><div class="nes-balloon from-left" style="width: calc(100% - 15px); padding: 6px; font-size: 12px; line-height: 25px; color: rgb(33, 37, 41);"><div style="padding-left: 8px; overflow-wrap: break-word;">Invaild Contract</div></div></div>'

const getData = async val => {
  try {
    const res = await fetch(`${explorerUrl}api?module=token&action=getToken&contractaddress=${val}`)

    let response = await res.json()

    console.log(response.status)
    if (response.status == 1) {
      console.log('hello')
      const range = document.createRange()
      range.selectNode(document.body)

      const fragment = range.createContextualFragment(sucessHTML1 + val + sucessHTML2)

      const element = fragment.firstChild
      document.getElementById('dialogContent').appendChild(element)
    } else if (response.status == 0) {
      const range = document.createRange()
      range.selectNode(document.body)
      const fragment = range.createContextualFragment(failedHTML)

      const element = fragment.firstChild
      document.getElementById('dialogContent').appendChild(element)
    }
  } catch (e) {
    console.log(e)
  }
}

const _dialog = [
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        You already did setup the Test Network?{' '}
        <a href="https://chainlist.org/?search=taiko&testnets=true" target="_blank">
          Chainlist: Add Taiko to Metamask
        </a>
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        You got some Test Tokens?{' '}
        <a href="https://www.infura.io/faucet/sepolia" target="_blank">
          Infura: Sepolia faucet
        </a>
      </SpeakerLeft>
    ),
    choices: null
  },

  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Are you ready to deploy Contract, let’s go!
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">What do you think?</SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Here is a contract just for Taiko:
      </SpeakerLeft>
    ),
    choices: ({ continueDialog, setContractWindowVisibility }) => (
      <Button
        className="is-warning"
        onClick={() => {
          setContractWindowVisibility(true)
          continueDialog()
        }}
      >
        Open Documentation
      </Button>
    )
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">What do you think?</SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        We have some more documentation that goes with this. Here, take a look.
      </SpeakerLeft>
    ),
    choices: ({ continueDialog, setExplanationWindowVisibility }) => (
      <Button
        className="is-warning"
        onClick={() => {
          setExplanationWindowVisibility(true)
          continueDialog()
        }}
      >
        Open Documentation
      </Button>
    )
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        You can check if your contract was deployed to Taiko Blockchain.
        <input
          placeholder="input the contract address"
          onChange={val => {
            getData(val.target.value)
          }}
          style={{ width: '100%' }}
        />
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">Everything went well? Great!</SpeakerLeft>
    ),
    choices: null
  }
]

const enrichedDialog = enrichDialog(_dialog, DIALOG_PART_ID)

export default enrichedDialog
