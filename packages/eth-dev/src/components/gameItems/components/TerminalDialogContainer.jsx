import React, { useEffect } from 'react'
import $ from 'jquery'
import { Button } from '.'

const TerminalDialogContainer = ({
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

  useEffect(() => {
    scrollToBottom()
  }, [currentDialogIndex])

  return (
    <div
      id="terminalDialogContainer"
      style={{
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
        paddingRight: '20%'
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
          id="dialogContent"
          style={{
            float: 'left',
            width: '100%',
            overflowY: 'auto',
            overflowX: 'hidden'
          }}
        >
          {levelDialog.map(
            ({ dialogPathId, dialog: dialogComponent, choices: choicesComponent }, index) => {
              const isVisible = dialogPathsVisibleToUser.includes(dialogPathId)
              const isLastVisibleDialog = index === currentDialogIndex

              if (isVisible && currentDialogIndex >= index) {
                return (
                  <>
                    {dialogComponent({
                      levelDialog,
                      isLastVisibleDialog,
                      setCurrentDialogIndex,
                      continueDialog,
                      jumpToDialogPath,
                      ...parentProps
                    })}
                  </>
                )
              }
            }
          )}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 10,
          paddingTop: 0
        }}
      >
        {levelDialog.map(
          ({ dialogPathId, dialog: dialogComponent, choices: choicesComponent }, index) => {
            const isVisible = dialogPathsVisibleToUser.includes(dialogPathId)

            const isLastVisibleDialog = index === currentDialogIndex
            if (isVisible && isLastVisibleDialog) {
              if (!choicesComponent) {
                return (
                  <Button
                    onClick={() => {
                      setCurrentDialogIndex(currentDialogIndex + 1)
                    }}
                  >
                    Continue
                  </Button>
                )
              }
              if (choicesComponent) {
                return (
                  <>
                    {choicesComponent({
                      levelDialog,
                      isLastVisibleDialog,
                      setCurrentDialogIndex,
                      continueDialog,
                      jumpToDialogPath,
                      ...parentProps
                    })}
                  </>
                )
              }
            }
          }
        )}
      </div>
    </div>
  )
}

export default TerminalDialogContainer
