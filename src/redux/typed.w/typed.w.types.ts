export enum TYPED_WORD_TYPES {
    SET_TYPED_WORD = 'typed/SET_TYPED_WORD'
}

export type TypedLetter = {
    typedLetter: string;
}

export type TypedWord = {
    typedWord: TypedLetter[];
}