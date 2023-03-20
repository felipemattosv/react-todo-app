import React from 'react';
import { theme } from "./styles/theme"
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from './components/Header';
import { Footer } from './components/Footer'
import { TasksList } from './components/TasksList';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <TasksList />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
