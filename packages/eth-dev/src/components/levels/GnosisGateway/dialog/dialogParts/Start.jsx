import React from 'react'
import { Link } from 'react-router-dom'

import { routesMap } from '../../../../../routes'
import { enrichDialog } from '../../../../../helpers'
import { SpeakerLeft, SpeakerRight, Button } from '../../../../gameItems/components'

export const DIALOG_PART_ID = 'GNOSISGATEWAY'

const explorerUrl = 'https://blockscout.com/gnosis/chiado/'
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
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">I'm in a bit of a pickle atm.</SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        As you might have guessed there aren't that many people left that can write in the language
        of old.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">Not since you left anyway ...</SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        I found this guy a couple of months back that showed some promise.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Well you probably know where this is going. He built us a contract that we started using a
        while ago.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        It was going great at the beginning, but as it turned out, the moron made a rather silly
        mistake.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        I not 100% sure, but as I understand it for some reason he limited the amount of tokens that
        we could mint from the contract.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        He mumbled something about a hostile majority? I don't know man, this is your domain.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        The thing is, we need to be able to issue more tokens. The current situation in the city
        demands it.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        I would also like to know whether his concerns are valid… but we'll discuss that another
        time.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Can I ask you a favour? Could you take a look and let me know what you think? Maybe you can
        find a way how to we could issue more tokens?
      </SpeakerLeft>
    ),
    choices: ({ continueDialog, setContractWindowVisibility, setExplanationWindowVisibility }) => (
      <Button
        className="is-warning"
        onClick={() => {
          setContractWindowVisibility(true)
          setExplanationWindowVisibility(true)
          continueDialog()
        }}
      >
        Show Contract
      </Button>
    )
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Im sure these old documentations will come in handy ...
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Are you ready to deploy the contract, rock Gnosis Chain!
        Just follow the instructions at the ERC20 Exploit Window
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Did you deploy it with hardhat? Awesome!
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        You can check here if your contract was deployed to Gnosis. Just copy paste the contract
        address here from the command line output
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
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        I knew you still had it in you!
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Let's head back to your workstation.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        You can start another journey if you want
      </SpeakerLeft>
    ),
    choices: ({ continueDialog }) => (
      <Link to={routesMap.Intro.path}>
        <Button
          className="is-warning"
          onClick={() => {
            localStorage.clear()
            //refresh()
          }}
        >
          Back to Workstation
        </Button>
      </Link>
    )
  }
]

const enrichedDialog = enrichDialog(_dialog, DIALOG_PART_ID)

export default enrichedDialog
