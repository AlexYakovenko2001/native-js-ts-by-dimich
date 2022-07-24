export const sum = (a: number, b: number) => (a + b);

export const mult = (a: number, b: number) => (a * b);



export const splitIntoWords = (sentence: string) => {
    const word = sentence.toLowerCase().split(' ')
    return word.filter(w => w !== '' && w !== '-').map(w => w
        .replace('!', '')
        .replace('.','')
        .replace(',', ''))
}