import React from 'react'
import { Link } from 'react-router-dom'

import { routesMap } from '../../../../../routes'
import { enrichDialog } from '../../../../../helpers'
import { SpeakerLeft, SpeakerRight, Button } from '../../../../gameItems/components'
import { backgroundIds } from '../../../../gameItems/components/Background/backgroundsMap'

export const LEVEL_ID = 'PolygoneID'
export const DIALOG_PART_ID = `${LEVEL_ID}/Start`
const refresh = () => window.location.reload(true)

const sucessHTML1 = '<div style="float: left; width: 100%; margin-top: 15px; padding-left: 60px; position: relative;"><img src="./assets/punk_anon.png" alt="avatar" class="background-image" style="position: absolute; left: 0px; bottom: 8px; min-width: 60px; transform: scaleX(1);"><div class="nes-balloon from-left" style="width: calc(100% - 15px); padding: 6px; font-size: 12px; line-height: 25px; color: rgb(33, 37, 41);"><div style="padding-left: 8px; overflow-wrap: break-word;"><a href="https://gnosisscan.io/address/'
const sucessHTML2 = '">Vaild Contract</a></div></div></div>'

const failedHTML = '<div style="float: left; width: 100%; margin-top: 15px; padding-left: 60px; position: relative;"><img src="./assets/punk_anon.png" alt="avatar" class="background-image" style="position: absolute; left: 0px; bottom: 8px; min-width: 60px; transform: scaleX(1);"><div class="nes-balloon from-left" style="width: calc(100% - 15px); padding: 6px; font-size: 12px; line-height: 25px; color: rgb(33, 37, 41);"><div style="padding-left: 8px; overflow-wrap: break-word;">Invaild Contract</div></div></div>'

const getData = async val => {
  try {
    const res = await fetch(
      `https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=${val}&apikey=${process.env.ETHERSCAN_APIKEY}`
    )

    let response = await res.json()

    console.log(response.status)
    if (response.status == 1) {

      console.log('hello')
      const range = document.createRange();
      range.selectNode(document.body);

      const fragment = range.createContextualFragment(sucessHTML1+val+sucessHTML2);

      const element = fragment.firstChild;
      document.getElementById('dialogContent').appendChild(element)

    } else if (response.status == 0) {
      const range = document.createRange();
      range.selectNode(document.body);
      const fragment = range.createContextualFragment(failedHTML);

      const element = fragment.firstChild;
      document.getElementById('dialogContent').appendChild(element)
    }
  } catch (e) {
    console.log(e)
  }
}

const _dialog = [
  {
    dialog: () => (
      <SpeakerRight pathToAvatar="./assets/punk5950.png">
        I want to prove myself; I want a Polygone ID!
      </SpeakerRight>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Well, you can go to{' '}
        <a href="https://platform-test.polygonid.com/sign-in" target="_blank">
          Polygon ID Page
        </a>{' '}
        as it won't open here
      </SpeakerLeft>
    ),
    choices: null
    /*  ({continueDialog, setBackgroundId}) => (
      <Link to={routesMap.SetupLocalNetwork2.path}>
        <Button className='is-warning' 
                onClick={() => {
                  setBackgroundId(backgroundIds.HackerSpaceCorner)
                  continueDialog()
                }}
        >Open Polygon ID Page</Button>
      </Link> 
    ) */
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Please input your wallet address.
        <input
          placeholder="input your wallet address"
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
        Surrender your email and password. A confirmation email should materialize in your inbox, go
        confirm it then.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Once your email is confirmed, you can claim your organization by entering your details. Your
        Display name, which will be visible to everyone and Legal Name and Organization logo
        (optional), which are only visible to you.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Now you will land on the Polygon ID platform. Where you have Dashboard, Claiming,
        Verifications and Connections sections.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Begin your journey within the labyrinthine confines of Create Schema, an altar to the
        manifestation of identity-related information.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        First give your Schema a name or choose from existing Schemas that will have data attributes
        Name, Type and Description(optional).
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Optionally should the flow of time demand, wield the power to designate a mandatory claim of
        expiration date.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Next, you have two options to click. One is just Save and the second is Save&Issue Claim.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        If you click Save&Issue Claim, the claim can be offered to users. In this case, choose the
        attribute 1 as Start Date. This is because attribute 1 was set to have date as the data type
        as in the previous step. The claim expiration date is optional for you to choose, based on
        the previous step.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Clicking the Issue icon will generate a claim offer link. You can simply copy the offer link
        and share it ahead.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Clicking done leads you back to the Claims section. In this case, you are seeing offered
        claims other than claim schemas.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Clicking the entire row in offered claims will open up a side panel containing a metadata
        ofo the offered claim.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        You can click the link and open the offer in a new browser tab. There you will see the logo
        and the name of the organization that is offering the claim, QR code, and the information of
        the claim itself.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        End users, armed with their pre-set Polygon ID wallets, must scan the code to unlock its
        secrets.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        A symbiotic link forms with the organization upon scanning the QR code, enabling the sharing
        of the public key.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        The platform page refreshes, demanding a second QR scan to seize the coveted claims.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Once the initial connection is established, subsequent offers require a solitary QR scan.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Now the step of establishing a connection with the organization only has been done once. If
        you are offered another claim after you have already received the first one, you will only
        have to scan the QR code once.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        Upon scanning the first QR, a push notification materializes, revealing the beckoning claims
        for your acceptance.
      </SpeakerLeft>
    ),
    choices: null
  },
  {
    dialog: () => (
      <SpeakerLeft pathToAvatar="./assets/punk_anon.png">
        With schema creation and claim offerings concluded, the process reaches its grand finale.
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

export default enrichedDialog;
