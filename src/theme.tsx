import { extendTheme } from '@chakra-ui/react'
import "@fontsource/poppins"

const fonts = { primary: 'Poppins', 
                secondary: ''
              }
  
const theme = extendTheme({
  colors: {
    brand: {
      electric: "#FCC719",
      grass: "#49D0B0",
      normal: "#F5F5F5",
      fighting: "#E6E0D4",
      flying: "#F5F5F5",
      psychic: "#eaeda1",
      dragon: "#97b3e6",
      bug: "#1de24e",
      poison: "#98d7a5",
      fairy: "#fceaff",
      rock: "#d5d5d4",
      ground: "#f4e7da",
      water: "#379ef8",
      ice: "#76BEFE",
      fire: "#ED8A8B",
      steel: "#f4f4f4",
      ghost: "#BA68C8",
    }
  },
  fonts,
})

export default theme