import { Grid, GridItem, Icon, Skeleton, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { MdAudiotrack } from 'react-icons/all';

export default function Word() {
  const { isLoading, isSuccess, word } = useAppSelector((state) => state.word);

  const [play, setPlay] = useState(false);
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

  console.log(audios);

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        word.map(({ word, meanings, phonetic, phonetics, sourceUrls }, i) => (
          <div
            style={{ margin: 20 }}
            key={i}
          >
            <Grid
              h="200px"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={4}
            >
              <GridItem
                rowSpan={2}
                colSpan={1}
              >
                <Text
                  textAlign="center"
                  justifyContent="center"
                  marginTop="9%"
                  fontWeight="bold"
                  color="white"
                  fontSize={90}
                >
                  {word}
                </Text>
                {audios.length !== 0 &&
                  audios.map((audio, i) => (
                    <Icon
                      key={i}
                      as={MdAudiotrack}
                      onClick={() => audio.play()}
                    />
                  ))}
              </GridItem>
              <GridItem colSpan={2}>
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  fontSize={24}
                  color="white"
                >
                  Parts of speech:
                </Text>
                {meanings.map((meaning, i) => (
                  <Text
                    key={i}
                    textAlign="center"
                    color="white"
                    fontSize={20}
                  >
                    {meaning.partOfSpeech}
                  </Text>
                ))}
              </GridItem>
              <GridItem
                colSpan={2}
                bg="papayawhip"
              ></GridItem>
              <GridItem
                colSpan={4}
                bg="tomato"
              ></GridItem>
            </Grid>
          </div>
        ))
      )}
    </>
  );
}
