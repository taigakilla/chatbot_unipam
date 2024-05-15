'use client'
import Image from 'next/image'
import {
  MainContainer,
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
} from './styles'
import { useState } from 'react'

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false)

  const handleChatOpen = (ifOpen: boolean) => {
    setIsOpen(ifOpen)
  }

  return (
    <>
      <ChatBubble onClick={handleChatOpen}>
        {isOpen ? 'Chat Aberto' : 'Chat Fechado'}
      </ChatBubble>
      {isOpen ? (
        <MainContainer>
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
            <CloseButton>
              <Image
                src={'/images/closebtn.svg'}
                alt={'x'}
                width={15}
                height={15}
              ></Image>
            </CloseButton>
          </ChatHeader>
          <ChatMessagesWrapper>
            <BotMessageWrap>
              <Image src={'/images/icon.svg'} alt={''} width={30} height={30}></Image>
              <BotMessage>this is a message a dsasd asd asd </BotMessage>
            </BotMessageWrap>
            <UserMessageWrap>
              <UserMessage>this is a user message very ver very very very bi</UserMessage>
            </UserMessageWrap>
            <UserMessageWrap>
              <UserMessage>this is a user message</UserMessage>
            </UserMessageWrap>
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
        </MainContainer>
      ) : (
        <p>OI</p>
      )}
    </>
  )
}
