import { theme } from "./styles/theme"
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from './components/Header';
import { Footer } from './components/Footer'
import { TasksList } from './components/TasksList';
import { TasksProvider } from "./hooks/useTasks";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TasksProvider >
        <Header />
        <TasksList />
        <Footer />
      </TasksProvider>
    </ChakraProvider>
  );
}

export default App;
