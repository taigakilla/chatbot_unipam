'use client'
import Image from 'next/image'
import {
  ChatHeader,
  ChatMessagesWrapper,
  BotMessage,
  UserMessage,
  LogosWrapper,
  BotMessageWrap,
  UserMessageWrap,
  UserInputWrapper,
  StyledForm,
  StyledInputButton,
  MainChatContainer,
  Container,
  StyledTextareaAutosize,
} from './styles'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { v4 as uuid } from 'uuid'

type Message = {
  text: string
  isUser: boolean
}

export default function ChatFSPage() {
  const [userInput, setUserInput] = useState('')
  const [currentMessages, setCurrentMessages] = useState<Message[]>([])
  const [firstSessionIDFS, setfirstSessionIDFS] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleFirstSend = () => {
    if (!firstSessionIDFS) {
      const newSessionID = uuid()
      setfirstSessionIDFS(newSessionID)
      localStorage.setItem('firstSessionIDFS', newSessionID)
    }
    return firstSessionIDFS
  }

  const isMessageEmpty = () => userInput === '' || userInput.trim() === ''

  const enviarDados = async () => {
    handleFirstSend()
    if (isMessageEmpty()) {
      return
    }

    const response = await axios.post('/api/mensagensService', {
      message: userInput,
      sessionId: firstSessionIDFS,
    })

    const botResponse = response.data.text
    setCurrentMessages(prevMessages => [
      ...prevMessages,
      { text: userInput, isUser: true },
    ])

    setTimeout(() => {
      setCurrentMessages(prevMessages => [
        ...prevMessages,
        { text: botResponse, isUser: false },
      ])
    }, 1000)
    setUserInput('')
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    handleFirstSend()
    if (event.key === 'Enter') {
      event.preventDefault()
      enviarDados()
    }
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [currentMessages])

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('firstSessionIDFS')
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    const storedSessionID = localStorage.getItem('firstSessionIDFS')
    if (storedSessionID) {
      setfirstSessionIDFS(storedSessionID)
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  return (
    <>
      <Container>
        <MainChatContainer isOpen={true}>
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
          </ChatHeader>
          <ChatMessagesWrapper>
            <BotMessageWrap>
              <Image
                src={'/images/icon.svg'}
                alt={''}
                width={40}
                height={40}
                draggable={false}
              />
              <BotMessage>Digite olá para começar!</BotMessage>
            </BotMessageWrap>
            {currentMessages.map((message, index) => {
              if (message.isUser == false) {
                return (
                  <BotMessageWrap key={index}>
                    <Image
                      src={'/images/icon.svg'}
                      alt={''}
                      width={40}
                      height={40}
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
            <span ref={messagesEndRef} />
          </ChatMessagesWrapper>
          <UserInputWrapper>
            <StyledForm id='userInputForm'>
              <StyledTextareaAutosize
                placeholder='Digite sua dúvida aqui...'
                maxLength={300}
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <StyledInputButton type='button' onClick={() => enviarDados()}>
                <Image src='/images/arrow.svg' alt='' width={25} height={25} />
              </StyledInputButton>
            </StyledForm>
          </UserInputWrapper>
        </MainChatContainer>
      </Container>
    </>
  )
}
