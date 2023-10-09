export default function prettify(document) {
    const divElements = document.querySelectorAll('div');
    // console.log(divElements)
    divElements.forEach(element => {
        element.childNodes.forEach(elem => {
            if (elem instanceof Text) {
                const trimmedText = elem.textContent.trim();
                if (trimmedText !== '') {
                    const newParagraph = document.createElement('p');
                    newParagraph.textContent = trimmedText;
                    elem.replaceWith(newParagraph);
                }
            }
        })
    });
    return divElements;

}