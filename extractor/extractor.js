export default (document) => {
    // BEGIN (write your solution here)
    let title = document.querySelector('h1').innerHTML;
    let description = document.querySelector('.description').innerHTML;

    // console.log(description)
    // console.log(title);
    let links = Array.from(document.querySelectorAll('.links>div'));
    // console.log(links)
    let items = links.map(item => {
        let name = item.querySelector('h2 > a').innerHTML;
        let desc = item.querySelector('p').innerHTML;
        return {
            title: name,
            description: desc
        }
    })
    const category = {
        title: title,
        description: description,
        items: items
    }
    return category;
    // END
};
