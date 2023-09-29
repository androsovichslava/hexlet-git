
function takeOldest(users, num) {
    const result = users.sort((a, b) => {
        const d1 = Date.parse(a.birthday);
        const d2 = Date.parse(b.birthday);
        if (d1 === d2) {
            return 0;
        }
        return d1 > d2 ? 1 : -1;
    });
    return result.slice(0, num);
};

const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];

console.log(takeOldest(users, 2));
console.log(takeOldest(users, 3));