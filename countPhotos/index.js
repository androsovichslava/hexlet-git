// return the total number of photos.
// it should return an integer
function countPhotos(road) {
    let photos = 0
    let right = 0;
    let cameras = 0;

    for (let i = 0; i < road.length; i++) {
        if (road[i] == '.') {
            cameras++;
            photos += right;
        }
        if (road[i] == '<') photos += cameras;
        if (road[i] == '>') right++;

    }
    return photos;

}

console.log(countPhotos('.><.>>.<<'))