import React, { useEffect, useState } from 'react'
import useLLM from 'usellm'
import $ from 'jquery'
import { Button, SpeakerLeft, SpeakerRight } from '.'
import Dialog from '../../levels/Intro/dialog'

const ChatGPTDialog = ({
  dialogPathsVisibleToUser,
  currentDialogIndex,
  setCurrentDialogIndex,
  continueDialog,
  jumpToDialogPath,
  levelDialog,
  ...parentProps
}) => {
  const scrollToBottom = _elementSelector => {
    let elementSelector = `#terminalDialogContainer .content`
    if (_elementSelector) elementSelector = _elementSelector
    const { scrollHeight } = $(elementSelector)[0]
    $(elementSelector).animate({ scrollTop: scrollHeight }, 'slow')
  }
  const llm = useLLM({ serviceUrl: 'https://usellm.org/api/llm' })
  const [result, setResult] = useState('')
  const [userInput, setUserInput] = useState('')

  async function handleClick() {
    try {
      await llm.chat({
        messages: [{ role: 'user', content: userInput }],
        stream: true,
        onStream: ({ message }) => setResult(message.content)
      })
    } catch (error) {
      console.error('Something went wrong!', error)
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [currentDialogIndex])

  return (
    <div
      id="terminalDialogContainer"
      style={{
        marginLeft: '-20%',
        overflow: 'scroll',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '66%',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-end',
        marginTop: '46.5%',
        paddingLeft: '10%',
        paddingRight: '20%',
        zIndex: '1000'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          placeContent: 'flex-end',
          overflow: 'auto',
          // for firefox
          minHeight: 0
        }}
      >
        <div
          className="content"
          style={{
            float: 'left',
            width: '100%',
            overflowY: 'auto',
            overflowX: 'hidden'
          }}
        ></div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 10,
          paddingTop: 0
        }}
      >
        <>
          <div style={{ overflow: 'auto', zIndex: '1000' }}>
            <SpeakerLeft pathToAvatar="./assets/dogGPT.png">
              Howdy, this is DogGPT!
            </SpeakerLeft>
            <SpeakerLeft pathToAvatar="./assets/dogGPT.png">
              Ask me anything about the tutorials
            </SpeakerLeft>

            {result && userInput && (
              <SpeakerRight pathToAvatar="./assets/punk5950.png">{userInput}</SpeakerRight>
            )}
            {result && <SpeakerLeft pathToAvatar="./assets/punk_anon.png">{result}</SpeakerLeft>}
            <input
              type="text"
              placeholder="Ask me anything"
              style={{ color: 'black', width: '100%', height: '60px', textOverflow: 'ellipsis' }}
              value={userInput}
              onChange={e => {
                setUserInput(e.target.value)
              }}
            />
            <button
              style={{ color: 'black', margin: '20px' }}
              onClick={() => {
                handleClick()
              }}
            >
              Submit
            </button>
          </div>
        </>
      </div>
    </div>
  )
}

export default ChatGPTDialog
