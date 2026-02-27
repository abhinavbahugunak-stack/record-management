// BACKEND LOGIC (Data Processing Layer)

let database = [];

function addStudent(name, roll, marks) {
    let total = marks.reduce((a, b) => a + b, 0);
    let avg = total / marks.length;
    let result = avg >= 40 ? "Pass" : "Fail";

    database.push({
        roll: roll,
        name: name,
        total: total,
        avg: avg,
        result: result
    });
}

function getAllStudents() {
    return database;
}

function getTopper() {
    return database.reduce((a, b) => a.total > b.total ? a : b);
}
