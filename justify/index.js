function justify(text, width) {
    function formatArray(arr, width) {
        debugger;
        let len = arr.length;
        let lenStr = arr.join('').length;
        const totalSpaces = width - lenStr;
        let spacesBetweenWords = Math.floor(totalSpaces / (len - 1));
        let extraSpaces = (width - lenStr) % (len - 1);

        let formattedText = arr[0];
        for (let i = 1; i < arr.length; i++) {
            formattedText += ' '.repeat(spacesBetweenWords);
            if (extraSpaces > 0) {
                formattedText += ' ';
                extraSpaces--;
            }
            formattedText += arr[i];
        }

        return formattedText;
    }


    let words = text.split(' ').filter(elem => elem !== '');

    let result = [];
    let currentLine = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        debugger;
        if (currentLine.length === 0 || currentLine.join(' ').length + word.length < width) {
            currentLine.push(word);
        } else {
            result.push(formatArray(currentLine.slice(), width));
            currentLine.length = 0;
            currentLine.push(word);
        }
        if (i === words.length - 1) result.push(currentLine.join(' '));
    }

    return result.join('\n');
}




console.log(justify('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.', 30));