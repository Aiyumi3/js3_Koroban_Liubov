function task3() {
    const arrWords = (prompt('enter some words : ', ' ')).split(' ');
    let shortestWord = 0;
    let shortestLength = arrWords[0].length;

    let getLength = arr => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length < shortestLength) {
                shortestLength = arr[i].length;
            }
        }
        alert('the length of the shortest word(s) = ' + shortestLength);
    }

    getLength(arrWords);
}