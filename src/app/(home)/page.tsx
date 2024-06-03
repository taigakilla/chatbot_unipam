'use client'

import Chat from '@/components/Chat'
import Descontos from '../descontos/page'
import Inscricao from '../inscricao/page'
import { ChatContainer } from './styles'
import { SectionContainer } from '@unipam/sites'

export default function Home() {
  return (
    <>
      <SectionContainer>
        <ChatContainer>
          <Chat></Chat>
        </ChatContainer>
        <Descontos></Descontos>
        <Inscricao></Inscricao>
      </SectionContainer>
    </>
  )
}
