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
console.log(formatArray(['123456789', '123456789', '12345678'], 40));
// export default formatArray;