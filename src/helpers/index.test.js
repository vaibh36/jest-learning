import GuessedWords from '../GuessedWords';
import {getLetterMatchCount} from './index';

describe('getLetterMatchCount', ()=>{
    const secretWord = 'party';
    test('returns correct count when there are no matching letters', ()=>{
        const letterMatchCount = getLetterMatchCount('bones', secretWord);
        expect(letterMatchCount).toBe(0)
    })

    test('returns correct count when there are 3 matching letters', ()=>{
        const letterMatchCount = getLetterMatchCount('trains', secretWord);
        expect(letterMatchCount).toBe(3)
    })

    test('test dublicate letters', ()=>{
        const letterMatchCount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchCount).toBe(3)
    })
})