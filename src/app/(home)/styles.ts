import styled from 'styled-components'
import { media } from '@unipam/theme'

export const Container = styled.div`
  background-color: #fff;
  display: block;
  width: 100%;
`

export const ChatContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 9999;
  width: 100%;

  ${media.md`
        width: 27rem;
        border-radius: .5rem;
    `}
`
