import { Skeleton, Text } from '@chakra-ui/react';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';

export default function Word() {
  const { isLoading, isSuccess, word } = useAppSelector((state) => state.word);

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        word.map(
          (
            { word, liscence, meanings, phonetic, phonetics, sourceUrls },
            i
          ) => (
            <div style={{ margin: 20 }} key={i}>
              <Text color='white' autoCapitalize={word}>
                {word}
              </Text>
            </div>
          )
        )
      )}
    </>
  );
}
