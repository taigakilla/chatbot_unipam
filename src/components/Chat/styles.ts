import styled from "styled-components";
import Image from "next/image";
import { Nunito } from 'next/font/google'

export const ChatBubble = styled.button`
    background-color: ${({theme})=>theme.colors.secondary_100};
    border: none;
    border-radius: 50% 0 50% 50%;
    padding: 50px;
    box-shadow: 0px 0px 8px rgba(0,0,0,0.2);
    cursor: pointer;
    outline: none;
`

export const MainContainer = styled.div`
    margin: 0;
    padding: 0;
    height: 80vh;
    font-family: ${({theme})=>theme.fonts.nunitoRegular};
`

export const ChatHeader = styled.div`
    width: 100%;
    height: 5rem;
    background-color: #073B59;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

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
`

export const LogosWrapper = styled.div`
    display: flex;
    padding-left: 1rem;
    flex-direction: row;
    gap: .5rem;
`

export const ChatMessagesWrapper = styled.div`
    width: 100%;
    height: 95%;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-family: ${({theme})=>theme.fonts.nunitoRegular};
`

export const BotMessageWrap = styled.div`
    margin: .5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export const BotMessage = styled.div`
    width: 60%;
    height: 100%;
    background-color: #dedede;
    margin: .5rem;
    padding: .5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: .5rem .5rem .5rem 0;
`

export const UserMessageWrap = styled.div`
    margin: .5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

export const UserMessage = styled.div`
    color:white;
    width: 60%;
    height: 100%;
    background-color: #073B59;
    margin: .5rem;
    padding: .5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: .5rem .5rem 0 .5rem;
`

export const UserInputWrapper = styled.div`
    height: 5rem;
    padding: 1rem;
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
    height: auto; /* Alterado para 'auto' */
    max-height: 4rem; /* Altura máxima equivalente a 4 linhas */
    border: none;
    overflow-y: auto; /* Adicionado overflow-y */
    padding: .3rem;
    font-family: ${({theme})=>theme.fonts.nunitoRegular};
    font-size: ${({theme}) => theme.fontSizes.p3};
    border-radius: .5rem;
`

export const StyledInputButton = styled.button`
    width: 3rem;
    height: 100%;
    border: none;
    background: transparent;
    border-radius: .5rem;
`