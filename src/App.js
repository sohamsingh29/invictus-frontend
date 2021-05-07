import React from "react";
import { Box, Button, Container, Heading, Input } from "@chakra-ui/react";
function App() {
  return (
    <Container centerContent>
      <Box marginY="10" width="xl" rounded="md" shadow="xl" p="10">
        <Heading my="5">Encode / Decode your String</Heading>
        <Input my="5" placeholder="String to encode" />
        <Button my="5">Encode</Button>
        <Input my="5" placeholder="String to Decode" />
        <Button my="5">Decode</Button>
      </Box>
    </Container>
  );
}

export default App;
