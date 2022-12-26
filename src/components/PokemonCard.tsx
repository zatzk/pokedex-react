import { Card, CardHeader, CardBody, CardFooter, Image, Box, Text } from '@chakra-ui/react'

export default function PokemonCard({ name, image, types }) {
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text  >
            {name}
          </Text>
          <Text>
            {typeHandler()}
          </Text>
        </Box>
      </CardHeader>
      <CardBody>
        <Image height="200" src={image} alt='green iguana'  />
      </CardBody>
      
    </Card>
  );
}