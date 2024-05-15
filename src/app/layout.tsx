'use client'
import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyles, ThemeProvider, UnipamDefaultTheme } from '@unipam/theme'
import { Inter } from 'next/font/google'
import styled, { createGlobalStyle } from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={UnipamDefaultTheme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
