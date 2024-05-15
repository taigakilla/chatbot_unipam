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
} from './styles'
import { useState } from 'react'

const Messages = [
  {
    sender: 'Bot',
    content: 'Essa é uma mensagem do bot.',
  },

  {
    sender: 'User',
    content: 'Essa é uma mensagem do usuário. Hello!',
  },
]

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
              ></Image>
              <Image
                src={'/images/logo-unipam.svg'}
                alt={''}
                width={108}
                height={28}
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
                    <Image src={'/images/icon.svg'} alt={''} width={30} height={30} />
                    <BotMessage>{message.content}</BotMessage>
                  </BotMessageWrap>
                )
              } else if (message.sender == 'User') {
                return (
                  <UserMessageWrap key={index}>
                    <UserMessage>{message.content}</UserMessage>
                  </UserMessageWrap>
                )
              }
              return null
            })}
          </ChatMessagesWrapper>
          <UserInputWrapper>
            <StyledForm action='' id='userInputForm'>
              <StyledUserInput
                name='userMessage'
                id='userMessage'
                aria-placeholder='Digite aqui...'
              />
              <StyledInputButton type='submit'>
                <Image src='/images/arrow.svg' alt='' width={30} height={30} />
              </StyledInputButton>
            </StyledForm>
          </UserInputWrapper>
        </MainChatContainer>
        {!isOpen ? (
          <ChatBubble onClick={handleChatOpen}>
            <Image src={'/images/ChatAlt2.svg'} alt={''} width={35} height={35}></Image>
          </ChatBubble>
        ) : (
          <ChatBubble onClick={handleChatClose}>
            <Image src={'/images/ChatAlt2.svg'} alt={''} width={35} height={35}></Image>
          </ChatBubble>
        )}
      </Container>
    </>
  )
}
