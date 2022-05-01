import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setTypedWordRedux } from '../../redux/typed.w/typed.w.actions';
import { setColoredWordRedux } from '../../redux/colored.w/colored.w.actions';
import { selectGeneratedWord } from '../../redux/generated.w/generated.w.selectors';
import { selectTypedWord } from '../../redux/typed.w/typed.w.selectors';

import { returnTypedWord } from '../../utils/word-guess-page/typed-input-value';
import { checkSubmitedLetters } from '../../utils/word-guess-page/submit-color-check/root-check/root-color-check';
import { 
    returnColoredArr, compareArrays 
} from '../../utils/word-guess-page/submit-color-check/root-check/root-check-utils';

import WordContainer from '../../components/word-container/word-container.component';
import GuessInput from '../../components/input-field/guess-input.component';
import Button from '../../components/button/button.component';
import Attempt from '../../components/attempt/attempt.component';

import { FooterItems } from './word-guess.styles';


const WordGuessPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const generatedWord = useSelector(selectGeneratedWord);
    const typedWord = useSelector(selectTypedWord);
    const [attempt, setAttempt] = useState(0);

    const submitCheck = () => {
        const coloredSymbolArr = checkSubmitedLetters(generatedWord, typedWord);
        const coloredWord = returnColoredArr(coloredSymbolArr);
        const compared = compareArrays(coloredWord, generatedWord);

        if (compared) {
            setTimeout(() => { alert('CONGRATS! ALL CORRECT!')}, 3900);
            setTimeout(() => { redirectToLeaderBoard() }, 4500);
        }

        dispatch(setColoredWordRedux(coloredSymbolArr));
        setAttempt(attempt + 1);
    }

    const redirectToLeaderBoard = () => setTimeout(() => { 
        navigate('/leader-board');
        dispatch(setColoredWordRedux([]));
        dispatch(setTypedWordRedux([]));
    }, 3000);

    const inputEventFunctions = (event) => {
        if (event.keyCode === 13) {
            submitCheck();
        } else if (event.keyCode === 8 || event.keyCode === 46) {
            dispatch(setColoredWordRedux([]));
            dispatch(setTypedWordRedux([]));
        }
    }

    const inputChange = () => {
        const inputValue = document.getElementById('input').value;
        const typedWord = returnTypedWord(generatedWord, inputValue);
        if (typedWord.length <= generatedWord.length) {
            dispatch(setTypedWordRedux(typedWord));
        }
    }

    return (
        <div>
            <WordContainer />
            <FooterItems>
                <GuessInput
                    id="input" required type="text" name="guess"
                    placeholder="Type a Word: " autoComplete="off"
                    onChange={inputChange}
                    onKeyDown={inputEventFunctions}
                />
                <Button onClick={submitCheck}> Try </Button>
                <Attempt attempt={attempt} />
            </FooterItems>
        </div>
    );
}

export default WordGuessPage;