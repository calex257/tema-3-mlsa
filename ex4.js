const arr = [4, 7, 9.8, 101, 1975];

const res1 = double1(arr);

function double1(arr) {
    return arr.map((e) => 1 * e * 2);
}
const res2 = double2(arr);

function double2(arr) {
    const res = [];
    for (let e of arr) {
        res.push(e * 2);
    }
    return res;
}

console.log(arr);
console.log(res1);
console.log(res2);
