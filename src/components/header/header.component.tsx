import { Box, Button, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <header>
      <Box>
        <Heading as="h1" color={"teal.100"}>
          Hola mundo
        </Heading>
        <Button variant={'primary'}>Hola</Button>
      </Box>
    </header>
  );
}
