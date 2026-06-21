// 1 task

function Elements(a, b) {
    let result = [];

    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < b.length; j++) {

            if (a[i] === b[j]) {

                let exists = false;

                for (let k = 0; k < result.length; k++) {
                    if (result[k] === a[i]) {
                        exists = true;
                    }
                }

                if (!exists) {
                    result.push(a[i]);
                }
            }
        }
    }

    return result;
}


// 2 task

function Num(a, b) {
    let result = [];

    for (let i = 0; i < a.length; i++) {

        let found = false;

        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                found = true;
            }
        }

        if (!found) {
            result.push(a[i]);
        }
    }

    return result;
}


// 3 task 

function hasZero(arr) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 0) {
            return true;
        }
    }

    return false;
}


// 4 task 

function allLongerThan3(arr) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].length <= 3) {
            return false;
        }
    }

    return true;
}


// 5 task 

function sortByLength(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {

            if (arr[i].length < arr[j].length) {

                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}


// 6 task 

function getEven(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }

    return result;
}


// 7 task 

function cut(arr) {
    return arr.slice(1, 4);
}


// 8 task 

function insertABC(arr) {

    arr.splice(3, 0, 'a', 'b', 'c');
    return arr;
}


// 9 task 

function complex(arr) {

    arr.splice(1, 0, 'a', 'b');
    arr.splice(7, 0, 'c');
    arr.push('e');

    return arr;
}


// 10 task 

function reverseString(str) {

    return str.split('').reverse().join('');
}