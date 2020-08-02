import { createContext } from 'react'

export interface ArtosTheme {
  icons: {
    [name: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>
  }
}

export const theme: ArtosTheme = {
  icons: {},
}

export const ThemeContext = createContext<ArtosTheme>(theme)
