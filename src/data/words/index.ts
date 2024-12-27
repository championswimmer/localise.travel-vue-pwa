export interface Translation {
  translation: string /** translation of the word in selected language */
  phonetic: string /** simple phonetic transliteration of the word in english */
}

export interface TranslatedWords {
  [word: string]: Translation
} /** list of words in selected language */

import { wordList as frenchWordList } from './fr'
import { wordList as spanishWordList } from './esp'


export const wordLists: { [lang: string]: TranslatedWords } = {
  fr: frenchWordList,
  esp: spanishWordList
}
