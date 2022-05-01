export enum GENERATED_WORD_TYPES  {
    FETCH_GENERATED_WORD_START = 'generated/FETCH_GENERATED_WORD_START',
    FETCH_GENERATED_WORD_SUCCESS = 'generated/FETCH_GENERATED_WORD_SUCCESS',
    FETCH_GENERATED_WORD_FAILED = 'generated/FETCH_GENERATED_WORD_FAILED',
}


export type GenLetter = {
    letter: string;
}

export type GenWord = {
    generated: GenLetter[]
}