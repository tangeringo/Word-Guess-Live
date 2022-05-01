import { GuessInputStyles } from './guess-input.styles';

const GuessInput = ({ ...guessInputProps }) => {
    return (
        <GuessInputStyles {...guessInputProps} />
    );
}

export default GuessInput;