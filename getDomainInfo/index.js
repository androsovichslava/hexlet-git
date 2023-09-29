function getDomainInfo(url) {
    const splitURL = url.split('//');
    const info = {};
    console.log(splitURL)
    if (splitURL[0] === 'http:') {
        info.scheme = 'http';
        info.name = splitURL[1];
    } else if (splitURL[0] === 'https:') {
        info.scheme = 'https';
        info.name = splitURL[1];
    } else {
        info.scheme = 'http';
        info.name = splitURL[0];
    }

    return info;

}

console.log(getDomainInfo('http://google.com'))
console.log(getDomainInfo('slava.ru'))
console.log(getDomainInfo('https://yandex.ru'))