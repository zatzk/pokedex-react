import { extendTheme } from '@chakra-ui/react'


const fonts = { primary: 'Karla', 
                secondary: 'JetBrains Mono'
              }


const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: '#16161D',
        _dark: '#ade3b8',
      },
    },

  },
  fonts,
})

export default theme