import styled from "styled-components";
import { media } from "@unipam/theme";
import { easeIn } from "framer-motion";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    border-radius: .5rem;
    overflow: hidden;
    padding: 1rem;
    z-index: 99;

    ${media.sm`
        padding: 1rem;
    `}
`

export const ChatBubble = styled.button`
    background-color: ${({theme})=>theme.colors.secondary_100};
    border: none;
    border-radius: 50% 0 50% 50%;
    width: 4rem;
    height: 4rem;
    box-shadow: 0px 0px 8px rgba(0,0,0,0.2);
    cursor: pointer;
    outline: none;
    margin: .5rem;
    position: absolute;
    transition: all .2s ease;

    &:hover,
    &:active{
        transform: scale(1.1);
    }

`

export const ChatBubbleX = styled.button`
    height: 0;
    width: 0;
    display: hidden;
`

type MainChatContainerProps = {
    isOpen: boolean;
}


export const MainChatContainer = styled.div<MainChatContainerProps>`
    display: flex;
    border-radius: .5rem;
    width: 100%;
    font-family: ${({theme})=>theme.fonts.nunitoRegular};
    position: relative;
    display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
    box-shadow: 0px 0px 8px rgba(0,0,0,.3);

    ${media.sm`
        height: 30rem;
        width: 23rem;
        border-radius: .5rem;
        margin: .5rem;
    `}

`

export const ChatHeader = styled.div`
    width: 100%;
    height: 5rem;
    background-color: #073B59;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: .5rem .5rem 0 0;
`

export const CloseButton = styled.button`
    margin: 1rem;
    padding: .5rem;
    background: transparent;
    border: none;
    color: #fafafa;
    font-family: ${({theme})=>theme.fonts.nunitoRegular};
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
`

export const LogosWrapper = styled.div`
    display: flex;
    padding-left: 1rem;
    flex-direction: row;
    gap: .5rem;
    user-select: none;
`

export const ChatMessagesWrapper = styled.div`
    width: 100%;
    height: 21rem;
    background-color: #fafafa;
    font-family: ${({theme})=>theme.fonts.nunitoRegular};
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 1rem;
    word-break: break-all;

    &::-webkit-scrollbar{
        width: 0%;
    }

    ${media.sm`
        height: 20rem;
    `}

    ${media.xl`
        height: 19rem;
    `}

`

export const BotMessageWrap = styled.div`
    display: flex;
    flex-direction: row;
    margin: .25rem;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`

export const BotMessage = styled.div`
    width: auto;
    height: 100%;
    background-color: #dedede;
    margin: .25rem;
    padding: .5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: .5rem .5rem .5rem 0;
`

export const UserMessageWrap = styled.div`
    display: flex;
    flex-direction: row;
    margin: .25rem;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`

export const UserMessage = styled.div`
    color:white;
    width: auto;
    height: 100%;
    background-color: #073B59;
    margin: .25rem;
    padding: .5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: .5rem .5rem 0 .5rem;

`

export const UserInputWrapper = styled.div`
    background-color: #fafafa;
    height: 5rem;
    padding: 1rem;
    border-radius: 0 0 .5rem .5rem;

    ${media.xs`
        height: 5.1rem; 
    `}

    ${media.lg`
        height: 5.1rem;
    `}

    ${media.xl`
        height: 6.1rem;
    `}

`

export const StyledForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    border: .1rem solid ${({theme}) => theme.colors.primary_100};
    border-radius: .5rem;

`

export const StyledUserInput = styled.textarea`
    width: 100%;
    border: none;
    resize: none;
    padding: .5rem;
    font-family: ${({theme})=>theme.fonts.nunitoRegular};
    font-size: ${({theme}) => theme.fontSizes.p3};
    border-radius: .5rem;
    outline: none;
   &::-webkit-scrollbar{
        width: 0%;
    }
`

export const StyledInputButton = styled.button`
    width: 3rem;
    height: 100%;
    border: none;
    background: transparent;
    border-radius: .5rem;
    cursor: pointer;
`