function task1() {
    const n = prompt('enter number of rows: ', ' ');

    let arr = [];
    let numbArr;
    for (let i = 0; i < n; i++) {
        let arrStrNum = (prompt('enter numbers : ', ' ')).split(' ');
         numbArr = arrStrNum.map(item => parseInt(item));
         arr.push(numbArr);
    }
    alert(JSON.stringify(arr));

    let getSum = (array) => {
        let sumM = 0;
        let res = 0;

        for (let i = 0; i < array.length; i++) {
            res = Math.min(...array[i]);

            sumM += res;
        }
        alert('sum of minimums = ' + sumM);
    }
    getSum(arr);
}