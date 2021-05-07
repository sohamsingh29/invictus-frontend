import React, { useState } from "react";
import { Box, Button, Container, Heading, Input } from "@chakra-ui/react";
function App() {
  const [eInput, setEInput] = useState("");
  const [dInput, setDInput] = useState("");

  const handleEncode = () => {
    fetch(`/encode/${eInput}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const handleDecode = () => {
    fetch("/decode/" + dInput)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <Container centerContent>
      <Box marginY="10" width="xl" rounded="md" shadow="xl" p="10">
        <Heading my="5">Encode / Decode your String</Heading>
        <form onSubmit={handleEncode}>
          <Input
            value={eInput}
            onChange={(e) => setEInput(e.target.value)}
            my="5"
            placeholder="String to encode"
          />
          <Button type="submit" my="5">
            Encode
          </Button>
        </form>
        <form onSubmit={handleDecode}>
          <Input
            value={dInput}
            onChange={(e) => setDInput(e.target.value)}
            my="5"
            placeholder="String to Decode"
          />
          <Button type="submit" my="5">
            Decode
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default App;
