const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
    'yahoo.com',
  ];
  const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];
  
  // BEGIN (write your solution here)
function getFreeDomainsCount(emails) {
    const result = {};
    for (let i =0; i < emails.length; i += 1) {
      const domain = emails[i].split('@')[1];
    //   console.log('domain   ', domain)
    if (freeEmailDomains.includes(domain)) {
      if (!result.hasOwnProperty( domain)) {
        result[domain] = 1;
      } else {
        result[domain] += 1;
      }
    }
}
    return result;
}
console.log('ddd')
console.log(getFreeDomainsCount(emails))