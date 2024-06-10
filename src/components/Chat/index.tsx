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

type Message = {
  text: string
  isUser: boolean
}

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [currentMessages, setCurrentMessages] = useState<Message[]>([])
  const [firstSessionID, setFirstSessionID] = useState('')

  const handleChatOpen = () => {
    setIsOpen(true)
    if (!firstSessionID) {
      const newSessionID = uuid()
      setFirstSessionID(newSessionID)
      localStorage.setItem('firstSessionID', newSessionID)
    }
    return firstSessionID
  }

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('firstSessionID')
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    const storedSessionID = localStorage.getItem('firstSessionID')
    if (storedSessionID) {
      setFirstSessionID(storedSessionID)
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  const handleChatClose = () => {
    setIsOpen(false)
  }

  const isMessageEmpty = () => userInput === '' || userInput.trim() === ''
  const enviarDados = async () => {
    if (isMessageEmpty()) {
      return
    }

    const response = await axios.post('/api/mensagensService', {
      message: userInput,
      sessionId: firstSessionID,
    })

    const botResponse = response.data.text
    setCurrentMessages(prevMessages => [
      ...prevMessages,
      { text: userInput, isUser: true },
      { text: botResponse, isUser: false },
    ])
    setUserInput('')
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
            {currentMessages.map((message, index) => {
              if (message.isUser == false) {
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
              } else if (message.isUser == true) {
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
            <StyledForm id='userInputForm'>
              <StyledTextareaAutosize
                placeholder='Digite sua dúvida aqui...'
                maxLength={300}
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
              />
              <StyledInputButton type='button' onClick={() => enviarDados()}>
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
