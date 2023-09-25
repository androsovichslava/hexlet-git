let lorem = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, sint assumenda. Aut provident architecto qui in. Quibusdam quis dolore delectus, doloremque rem voluptatum necessitatibus reprehenderit sed aut deserunt repellat quae.";
function alignRight(text, width) {
    let textArr = text.split(' ');
    let result = [];
    let resultIndex = 0;
    let currentLine = "";
    console.log(textArr);
    debugger;
    for (let i = 0; i < textArr.length; i++) {
        const word = textArr[i];
        if (currentLine.length + word.length < width) {
            console.log("length ", i, currentLine.length, word.length, word)
            currentLine = currentLine.length === 0 ? word : currentLine + ' ' + word;
            console.log(currentLine)
        } else {
            result.push(currentLine);
            currentLine = '';
            currentLine = currentLine.length === 0 ? word : currentLine + ' ' + word;
        }
        if (i === textArr.length - 1) result.push(currentLine);
    }
    console.log(result)
    return result.map(elem => {
        return " ".repeat(width - elem.length) + elem;
    }).join("\n");
}

console.log(alignRight("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, sint assumenda. Aut provident architecto qui in. Quibusdam quis dolore delectus, doloremque rem voluptatum necessitatibus reprehenderit sed aut deserunt repellat quae.", 14));