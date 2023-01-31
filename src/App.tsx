import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  console.log(import.meta.env.VITE_API_KEY);

  return (
    <ChakraProvider>
      <div className="App"></div>
    </ChakraProvider>
  );
}

export default App;
