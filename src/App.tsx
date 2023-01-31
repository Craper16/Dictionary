import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import InputField from './components/input/InputField';

function App() {
  console.log(import.meta.env.VITE_API_KEY);

  return (
    <ChakraProvider>
      <InputField />
    </ChakraProvider>
  );
}

export default App;
