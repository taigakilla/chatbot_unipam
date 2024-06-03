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
import { useRouter } from 'next/router'

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false)

  const handleChatOpen = () => {
    setIsOpen(true)
  }

  const handleChatClose = () => {
    setIsOpen(false)
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
              />
              <StyledInputButton>
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
