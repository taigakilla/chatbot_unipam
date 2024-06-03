import styled from 'styled-components'
import { media } from '@unipam/theme'
import TextareaAutosize from 'react-textarea-autosize'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  border-radius: 0.75rem;
  overflow: hidden;
  padding: 1rem;
  z-index: 99;

  ${media.sm`
        padding: 1rem;
    `}
`

export const ChatBubble = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary_100};
  border: none;
  border-radius: 50% 0 50% 50%;
  width: 4rem;
  height: 4rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  outline: none;
  margin: 0.5rem;
  position: absolute;
  transition: all 0.2s ease;

  &:hover,
  &:active {
    transform: scale(1.1);
  }
`

type MainChatContainerProps = {
  isOpen: boolean
}

export const MainChatContainer = styled.div<MainChatContainerProps>`
  border-radius: 0.75rem;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.nunitoRegular};
  position: relative;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);

  ${media.xl`
        height: 100%;
        width: 24rem;
        border-radius: .5rem;
        margin: .5rem;
    `}
`

export const ChatHeader = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #073b59;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.75rem 0.75rem 0 0;
`

export const CloseButton = styled.button`
  margin: 1rem;
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: #fafafa;
  font-family: ${({ theme }) => theme.fonts.nunitoRegular};
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`

export const LogosWrapper = styled.div`
  display: flex;
  padding-left: 1rem;
  flex-direction: row;
  gap: 0.5rem;
  user-select: none;
`

export const ChatMessagesWrapper = styled.div`
  width: 100%;
  justify-content: flex-end;
  height: 70vh;
  background-color: #fafafa;
  font-family: ${({ theme }) => theme.fonts.nunitoRegular};
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 1rem 1rem 0 1rem;

  &::-webkit-scrollbar {
    width: 0%;
  }

  ${media.sm`
        height: 20rem;
    `}

  ${media.xl`
        height: 24rem;
    `}
`

export const BotMessageWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.25rem;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`

export const BotMessage = styled.div`
  width: auto;
  height: 100%;
  background-color: #dedede;
  margin: 0.25rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0.75rem 0.75rem 0.75rem 0;
`

export const UserMessageWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.25rem;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`

export const UserMessage = styled.div`
  color: white;
  width: auto;
  height: 100%;
  background-color: #073b59;
  margin: 0.25rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0.75rem 0.75rem 0 0.75rem;
`

export const UserInputWrapper = styled.div`
  background-color: #fafafa;
  display: flex;
  height: auto;
  padding: 1rem;
  border-radius: 0 0 0.75rem 0.75rem;

  ${media.xs`
        height: auto; 
    `}

  ${media.lg`
        height: auto;
    `}

    ${media.xl`
        height: auto;
    `}
`

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 0.1rem solid ${({ theme }) => theme.colors.primary_100};
  border-radius: 0.75rem;
`

export const StyledUserInput = styled.textarea`
  height: auto;
  width: 100%;
  border: none;
  resize: none;
  padding: 0.75rem;
  font-family: ${({ theme }) => theme.fonts.nunitoRegular};
  font-size: ${({ theme }) => theme.fontSizes.p3};
  border-radius: 0.75rem;
  outline: none;
  &::-webkit-scrollbar {
    width: 0%;
  }
`

export const StyledInputButton = styled.button`
  width: 3rem;
  height: 100%;
  border: none;
  background: transparent;
  border-radius: 0.75rem;
  cursor: pointer;
`

export const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  resize: both;
  min-height: 40px;
  line-height: 20px;

  &:empty::before {
    content: 'Placeholder still possible';
    color: gray;
  }
`
export const StyledTextareaAutosize = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  padding: 0.75rem;
  resize: none;
  font-family: ${({ theme }) => theme.fonts.nunitoRegular};
  font-size: ${({ theme }) => theme.fontSizes.p3};
  border-radius: 0.75rem;
  outline: none;
  max-height: 6.5rem;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary_60};
    border-radius: 0.75rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary_100};
  }
`
