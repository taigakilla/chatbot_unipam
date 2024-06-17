'use client'

import Chat from '@/components/Chat'
import { ChatContainer, Container } from './styles'

export default function Home() {
  return (
    <>
      <Container>
        <ChatContainer>
          <Chat></Chat>
        </ChatContainer>
      </Container>
    </>
  )
}
