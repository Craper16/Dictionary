import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Icon,
  Progress,
  Spinner,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { MdAudiotrack } from 'react-icons/all';

export default function Word() {
  const { isLoading, isSuccess, word } = useAppSelector((state) => state.word);
  const [audios, setAudios] = useState<HTMLAudioElement[]>([]);

  useEffect(() => {
    if (isLoading) {
      setAudios([]);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess) {
      word.map((word) =>
        word.phonetics.map((phoenetic) => {
          if (phoenetic.audio) {
            setAudios((prevAudios) => [
              ...prevAudios,
              new Audio(phoenetic.audio),
            ]);
          }
        })
      );
    }
  }, [isSuccess]);

  if (!isLoading && word.length === 0) {
    return null;
  }

  return isLoading ? (
    <Progress
      isIndeterminate
      margin='auto'
      marginTop={4}
      colorScheme='blackAlpha'
    />
  ) : (
    <Card backgroundColor='#242424' variant='unstyled' marginTop={10}>
      <CardHeader>
        <Heading color='white' size='4xl' textAlign='center'>
          {word[0].word}
        </Heading>
        <Box
          as='span'
          display='flex'
          justifyContent='center'
          alignItems='center'
          margin='auto'
        >
          <Text color='white' fontSize={30} textAlign='center' margin={3}>
            {word[0].phonetic + ' '}
          </Text>
          {audios.map((audio, i) => (
            <Icon
              key={i}
              as={MdAudiotrack}
              color='white'
              alignItems='center'
              textAlign='center'
              onClick={() => audio.play()}
            />
          ))}
        </Box>
        <Box
          as='span'
          display='flex'
          justifyContent='center'
          alignItems='center'
          margin='auto'
        >
          {word[0].meanings.map(({ partOfSpeech }, i) => (
            <Text key={i} color='white' margin={3}>
              {partOfSpeech.toUpperCase()}
            </Text>
          ))}
        </Box>
      </CardHeader>
      <CardBody>
        <Text textAlign='center' color='white' fontSize={30} fontWeight='bold'>
          Definitions
        </Text>
        {word[0].meanings.map((meaning) =>
          meaning.definitions.map(({ definition }, i) => (
            <Text key={i} textAlign='center' color='white'>
              {definition}
            </Text>
          ))
        )}
        <Text textAlign='right' color='white' margin={6} marginTop={10}>
          Source: {word[0].sourceUrls[0]}
        </Text>
      </CardBody>
    </Card>
  );
}
