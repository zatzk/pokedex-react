import { Card, CardHeader, CardFooter, CardBody, Image, Box, Text } from '@chakra-ui/react'

export default function PokemonCard({ name, image, types, id }) {
 

  return (
    <Card sx={{ maxWidth: 345}}>
      <CardHeader >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text fontSize="1.5em" fontFamily="fonts.primary" fontWeight="700" ml="10px">
            {name}
          </Text>
          <Text fontSize="16px" fontFamily="fonts.primary" fontWeight="600" mr="10px">
            #{id}
          </Text>
        </Box>
      </CardHeader>
      <CardBody display="flex" alignContent="center" justifyContent="center">
        <Image position="relative"  height="200" src={image} alt={`${name}`}  />
      </CardBody>
      <CardFooter>
        <Text fontSize="12px"  >
          {types[0].type.name}
        </Text>
      </CardFooter>
    </Card>
  );
}