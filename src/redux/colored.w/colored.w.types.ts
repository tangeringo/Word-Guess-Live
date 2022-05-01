export enum COLORED_WORD_TYPES {
    SET_COLORED_WORD = 'colored/SET_COLORED_WORD'
}

export type ColoredLetter = {
    coloredletter: string
}

export type ColoredWord = {
    coloredWord: ColoredLetter[]
}