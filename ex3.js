const student = {
    name: "Alex",
    grade: 4.2,
    id: 101,
};

const check = (stud) => {
    return stud.grade >= 5;
};

function normalCheck (stud) {
    return stud.grade >= 5;
}

console.log(check(student));
console.log(normalCheck(student));

export {
    normalCheck,
    check
}