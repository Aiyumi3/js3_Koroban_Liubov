function task_2() {
    const arrStrNum = (prompt('enter numbers : ', ' ')).split(' ');
    let numbArr = arrStrNum.map(item => parseInt(item));
                                                                    //alert(numbArr);  alert(JSON.stringify(numbArr));
    getarrMax(numbArr);
                                                                    //let max = Math.max(...arr);  alert(max);
    function getarrMax(arr) {

        let result = arr.reduce((a, b) => Math.max(a, b));         //alert('max : ' + result);
        let newArrN = [result];                                     //alert(JSON.stringify(newArrN));

        let index = arr.indexOf(result);
        arr.splice(index, 1);                                       //alert(numbArr);

        let result2 = arr.reduce((a, b) => Math.max(a, b));          //alert('max2 : ' + result2);
        let newArr = (newArrN.concat(result2)).reverse();
        alert(JSON.stringify(newArr));
    }
}