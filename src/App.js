import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
function App() {
  const [eInput, setEInput] = useState("");
  const [before, setBefore] = useState("");
  const [dInput, setDInput] = useState("");
  const [result, setResult] = useState("");
  const handleEncode = (e) => {
    e.preventDefault();
    setBefore(eInput);
    fetch(`https://invictus-backend.vercel.app/api/encode/${eInput}`)
      .then((res) => res.json())
      .then((data) => setResult(data.encoded), setEInput(""));
  };
  const handleDecode = (e) => {
    e.preventDefault();
    setBefore(dInput);

    fetch("https://invictus-backend.vercel.app/api/decode/" + dInput)
      .then((res) => res.json())
      .then((data) => setResult(data.decoded), setDInput(""));
  };

  const clearState = () => {
    setBefore("");
    setDInput("");
    setResult("");
    setEInput("");
  };
  return (
    <Container centerContent>
      <Box marginY="10" width="xl" rounded="md" shadow="xl" p="10">
        {result.length > 0 && (
          <Flex justify="space-between">
            <Text>given string : </Text>
            <Text decoration="underline">{before}</Text>
            <Button onClick={clearState}>Clear</Button>
          </Flex>
        )}

        <Heading my="5">
          {result.length ? "Answer : " + result : "Encode / Decode your String"}
        </Heading>
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
