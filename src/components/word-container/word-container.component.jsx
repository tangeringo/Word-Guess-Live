import { useSelector } from 'react-redux';

import { selectGeneratedWord, selectIsLoading } from '../../redux/generated.w/generated.w.selectors';
import { selectTypedWord } from '../../redux/typed.w/typed.w.selectors';
import { selectColoredWord } from '../../redux/colored.w/colored.w.selectors';

import Square from '../square/square.component';
import LoadingSpinner from '../loading-spinner/loading-spinner.component';

import { LetterBoxContainer, NotFinishedString, NotFinishedContainer } from './word-container.styles';

const WordContainer = () => {
    const generatedWord = useSelector(selectGeneratedWord);
    const typedWord = useSelector(selectTypedWord);
    const coloredWord = useSelector(selectColoredWord);
    const isLoading = useSelector(selectIsLoading);
    const coloredWordLetters = coloredWord.filter(item => item !== undefined)


    return (
        <div>
            <LetterBoxContainer>
                {
                    typedWord.length > 0?
                        coloredWord.length > 0?
                            coloredWordLetters.length === generatedWord.length?
                                coloredWord.map((letter, index) => (
                                    <Square 
                                        modification={'animated'}
                                        key={index}
                                        letter={letter.props.letter} 
                                        delay={letter.props.delay} 
                                        color={letter.props.color}
                                        />
                                    ))
                                :<NotFinishedContainer>
                                    {typedWord.map((letter, index) => (
                                        <Square letter={letter} key={index}/> 
                                    ))}
                                    <NotFinishedString> Please Fill Out Every Square </NotFinishedString>
                                </NotFinishedContainer>       
                            : typedWord.map((letter, index) => (
                                <Square letter={letter} key={index}/> 
                            ))                       
                        : isLoading ? (
                            <LoadingSpinner />
                        ) : (
                            generatedWord.map((_, index) => (
                                <Square key={index}/> 
                            ))
                        )
                    }
            </LetterBoxContainer>
        </div>
    );
}

export default WordContainer;