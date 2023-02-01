export interface word {
  liscence: { name: string; url: string };
  meanings: {
    antonyms: string[];
    definitions: {
      synonyms: string[];
      antonyms: string[];
      definition: string;
      example: string;
    }[];
    partOfSpeech: string;
    synonyms: string[];
  }[];
  phonetic: string;
  phonetics: { audio: string; sourceUrl: string; text: string }[];
  sourceUrls: string[];
  word: string;
}

export interface ErrorResponse {
  response: { data: { message: string } };
}
