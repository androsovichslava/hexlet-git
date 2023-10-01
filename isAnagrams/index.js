const isAnagram = function (test, original) {
    if (!test || !original) {
        return false;
    }
    const sortedTest = test.toLowerCase().split('').sort();
    const sortedOriginal = original.toLowerCase().split('').sort();
    if (sortedOriginal.length !== sortedTest.length) {
        return false;
    }
    //return sortedOriginal === sortedTest;
    return sortedTest.every((elem, i) => elem === sortedOriginal[i]);
};

function filterAnagrams(word, words) {
    return words.filter(elem => isAnagram(elem, word));
}

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']

console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// ['carer', 'racer']

console.log(filterAnagrams('laser', ['lazing', 'lazy', 'lacer']));
// []