/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

import { UnipamDefaultTheme } from '@unipam/theme'

type ThemeTemplate = typeof UnipamDefaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTemplate {}
}