function countWords(text) {
    const list = {};
    if (text === '') return list;
    const words = text.split(' ');
    for (let i = 0; i < words.length; i += 1) {
        let word = words[i].toLowerCase();
        if (Object.hasOwn(list, word)) {
            list[word] += 1;
        } else {
            list[word] = 1;
        }
    }
    return list;
}
console.log(countWords('another one sentence with strange Words words'))