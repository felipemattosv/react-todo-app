import React from 'react';
import { theme } from "./styles/theme"
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      
    </ChakraProvider>
  );
}

export default App;
