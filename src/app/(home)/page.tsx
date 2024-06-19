'use client'

import Chat from '@/components/Chat'
import { ChatContainer, Container } from './styles'
import BackPage from '@/components/layout/backPage/page'
import ChatFS from '@/components/ChatFullScreen'

export default function Home() {
  return (
    <>
      <Container>
        <ChatContainer>
          <Chat></Chat>
        </ChatContainer>
        <BackPage />
        <ChatFS />
      </Container>
    </>
  )
}
