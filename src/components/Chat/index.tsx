'use client'
import Image from 'next/image'
import {
  ChatHeader,
  ChatMessagesWrapper,
  BotMessage,
  UserMessage,
  CloseButton,
  LogosWrapper,
  BotMessageWrap,
  UserMessageWrap,
  UserInputWrapper,
  StyledForm,
  StyledUserInput,
  StyledInputButton,
  ChatBubble,
  MainChatContainer,
  Container,
  StyledTextareaAutosize,
} from './styles'
import { useState, useEffect } from 'react'
import Messages from '../../services/json/Messages.json'
import axios from 'axios'
import { v4 as uuid } from 'uuid'

const useSessionID = () => {
  const [firstSessionID, setFirstSessionID] = useState('')

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('firstSessionID')
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    const storedSessionID = localStorage.getItem('firstSessionID')

    if (!storedSessionID) {
      const newSessionID = uuid()
      setFirstSessionID(newSessionID)
      localStorage.setItem('firstSessionID', newSessionID)
    } else {
      setFirstSessionID(storedSessionID)
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  return firstSessionID
}

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false)
  const [userInput, setUserInput] = useState('')

  const sessionID = useSessionID()

  const handleChatOpen = () => {
    setIsOpen(true)
    console.log(sessionID)
  }

  const handleChatClose = () => {
    setIsOpen(false)
  }

  const isMessageEmpty = () => userInput === '' || userInput.trim() === ''

  const enviarDados = async (mensagem: string, sessionId: string) => {
    if (isMessageEmpty()) {
      return
    }
    const response = await axios.post('/api/mensagensService', {
      message: mensagem,
      sessionId: sessionID,
    })

    const resposta = response.data
    return resposta
  }

  return (
    <>
      <Container>
        <MainChatContainer isOpen={isOpen}>
          <ChatHeader>
            <LogosWrapper>
              <Image
                src={'/images/logo-fepam.svg'}
                alt={''}
                width={91}
                height={28}
                draggable={false}
              ></Image>
              <Image
                src={'/images/logo-unipam.svg'}
                alt={''}
                width={108}
                height={28}
                draggable={false}
              ></Image>
            </LogosWrapper>
            <CloseButton onClick={handleChatClose}>
              <Image
                src={'/images/closebtn.svg'}
                alt={'x'}
                width={15}
                height={15}
              ></Image>
            </CloseButton>
          </ChatHeader>
          <ChatMessagesWrapper>
            {Messages.map((message, index) => {
              if (message.sender === 'Bot') {
                return (
                  <BotMessageWrap key={index}>
                    <Image
                      src={'/images/icon.svg'}
                      alt={''}
                      width={30}
                      height={30}
                      draggable={false}
                    />
                    <BotMessage>{message.text}</BotMessage>
                  </BotMessageWrap>
                )
              } else if (message.sender === 'User') {
                return (
                  <UserMessageWrap key={index}>
                    <UserMessage>{message.text}</UserMessage>
                  </UserMessageWrap>
                )
              }
              return null
            })}
          </ChatMessagesWrapper>
          <UserInputWrapper>
            <StyledForm action='' id='userInputForm'>
              <StyledTextareaAutosize
                placeholder='Digite sua dúvida aqui...'
                maxLength={300}
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
              />
              <StyledInputButton onClick={() => enviarDados(userInput, sessionID)}>
                <Image src='/images/arrow.svg' alt='' width={25} height={25} />
              </StyledInputButton>
            </StyledForm>
          </UserInputWrapper>
        </MainChatContainer>
        {!isOpen ? (
          <ChatBubble onClick={handleChatOpen}>
            <Image src={'/images/ChatAlt2.svg'} alt={''} width={35} height={35}></Image>
          </ChatBubble>
        ) : (
          <></>
        )}
      </Container>
    </>
  )
}
