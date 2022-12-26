import {
  ChakraProvider,
  Box,
  theme,
  Container,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react"
import axios from 'axios'
import { ColorModeSwitcher } from "../components/ColorModeSwitcher"
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Skeletons } from "../components/Skeleton";
import PokemonCard from "../components/PokemonCard";

export const App = () => {
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 200; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    setPokemons(filteredPokemons);
  };
  return (
    <ChakraProvider theme={theme}>
    <Box>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container>
        <Grid gap={3}>
          {pokemons.length === 0 ? (
            <Skeletons />
          ) : (
            pokemons.map((pokemon, key) => (
              <SimpleGrid column={[1, 2, 3]}  key={key}>
                <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
              </SimpleGrid>
            ))
          )}
        </Grid>
      </Container>
    </Box>
  </ChakraProvider>
  )
}
