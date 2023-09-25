function makeCensored(sentence, words) {
    const arrWords = sentence.split(' ');
    return arrWords.map(elem => {
        if (words.includes(elem)) {
            return "$#%!";
        } else {
            return elem;
        }
    }).join(' ');
}

const sentence = 'When you play the game of thrones, you win or you die';
const result = makeCensored(sentence, ['die', 'play']);
console.log(result);