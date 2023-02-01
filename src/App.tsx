import { ChakraProvider } from '@chakra-ui/react';
import InputField from './components/input/InputField';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Word from './components/word/Word';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <InputField />
        <Word />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
