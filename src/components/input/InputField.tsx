import React, { useState } from 'react';
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { FetchWord } from '../../redux/word/wordActions';
import { defaultWord } from '../../redux/word/wordSlice';

export default function InputField() {
  const dispatch = useAppDispatch();

  const { isError, message } = useAppSelector((state) => state.word);

  const [search, setSearch] = useState('');

  return (
    <div style={{ marginTop: 14 }}>
      <InputGroup justifyContent='center' margin='auto' width='50%'>
        <Input
          placeholder='Search for word...'
          textColor='white'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoCorrect='all'
          autoComplete='all'
        />
        <InputRightElement
          children={
            <IconButton
              aria-label='Search'
              disabled={!search}
              icon={<SearchIcon />}
              onClick={() => {
                if (search) {
                  return (
                    dispatch(FetchWord(search)),
                    dispatch(defaultWord()),
                    setSearch('')
                  );
                }
                return;
              }}
            />
          }
        />
      </InputGroup>
      {isError && (
        <Text textAlign='center' color='tomato' fontWeight='bold' marginTop={3}>
          {message}
        </Text>
      )}
    </div>
  );
}
