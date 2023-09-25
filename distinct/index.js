function distinct(nums) {
    let set = new Set(nums);
    console.log(set)
    return Array.from(set);
}

console.log(distinct([4, 6, 1, 2, 6]));