import { Box, Image, Input } from "@chakra-ui/react";


export default function Navbar({ pokemonFilter }) {
  return (
    <Box flexGrow='1' mb='2em' >
      <Box>
        <Box display="flex" justifyContent={"space-between"} width="100%">
          Pokemon
          <Input onChange={(e) => pokemonFilter(e.target.value)} placeholder='find your pokemon'  size='sm'/>

        </Box>
      </Box>
    </Box>
  );
}