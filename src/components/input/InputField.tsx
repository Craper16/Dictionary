import React, { useState } from 'react';
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { fetchWord } from '../../helpers/apiHelpers';

export default function InputField() {
  const [word, setWord] = useState('');

  return (
    <div>
      <InputGroup>
        <Input
          placeholder="Search for word..."
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <InputRightElement
          children={
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              onClick={() => fetchWord(word)}
            />
          }
        />
      </InputGroup>
    </div>
  );
}
