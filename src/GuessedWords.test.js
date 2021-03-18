import { EnzymeAdapter } from 'enzyme';
import React from 'react';
import {shallow} from 'enzyme';
import {checkProps, findByTestAttr} from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}]
}

const setup = (props = {})=>{
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps} />)
}

test('test does not throw warning with expected prop', ()=>{
    checkProps(GuessedWords, defaultProps);
})

describe('If there are no words guessed', ()=>{

    let wrapper;
    beforeEach(()=>{
         wrapper = setup({guessedWords: []});
    })


    test('renders without error', ()=>{
        const components = findByTestAttr(wrapper, 'component-guessed-words');
        expect(components.length).toBe(1);
    })

    test('renders instructions to guess a word', ()=>{
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        console.log(instructions.text())
        expect(instructions.text().length).not.toBe(0);
    })
})

describe('if there are guessed words present', ()=>{


    let guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'party', letterMatchCount: 5}
    ]
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({guessedWords})
    })

    test('renders without error', ()=>{
        const components = findByTestAttr(wrapper, 'component-guessed-words');
        expect(components.length).toBe(1);
    })

    test('renders guessed words section', ()=>{
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    })

    test('displays correct number of guessed words', ()=>{
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsNode.length).toBe(guessedWords.length);

    })

})