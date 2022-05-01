import Square from "../../../../components/square/square.component";

export const returnGreenLetter = (currentLetter, delay) => {
    return <Square color={'greenSq'} letter={currentLetter} delay={delay} />
}

export const returnRedLetter = (currentLetter, delay) => {
    return <Square color={'redSq'} letter={currentLetter} delay={delay} />
}

export const returnGreyLetter = (currentLetter, delay) => {
    return <Square color={'greySq'} letter={currentLetter} delay={delay} />
}