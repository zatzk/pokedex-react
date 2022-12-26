import { Container, Skeleton } from '@chakra-ui/react'

export const Skeletons = () => {
  return (
    <Container>
      <Skeleton variant="rounded" width="100%" height={250} sx={{ marginBottom: "1em" }} />
      <Skeleton variant="rounded" width="100%" height={250} sx={{ marginBottom: "1em" }} />
      <Skeleton variant="rounded" width="100%" height={250} sx={{ marginBottom: "1em" }} />
      <Skeleton variant="rounded" width="100%" height={250} sx={{ marginBottom: "1em" }} />
      <Skeleton variant="rounded" width="100%" height={250} sx={{ marginBottom: "1em" }} />
    </Container>
  );
};