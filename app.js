const output = document.getElementById("output");

function addStudentUI() {
    let studentName = document.getElementById("name").value;
    let studentRoll = document.getElementById("roll").value;

    let marks = [
        Number(document.getElementById("m1").value),
        Number(document.getElementById("m2").value),
        Number(document.getElementById("m3").value),
        Number(document.getElementById("m4").value),
        Number(document.getElementById("m5").value)
    ];

    addStudent(studentName, studentRoll, marks);

    output.innerHTML = "✅ Student added successfully";

    // 🔥 AUTO CLEAR FORM
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("m1").value = "";
    document.getElementById("m2").value = "";
    document.getElementById("m3").value = "";
    document.getElementById("m4").value = "";
    document.getElementById("m5").value = "";
}

function showAllUI() {
    let students = getAllStudents();

    if (students.length === 0) {
        output.innerHTML = "❌ No student records found";
        return;
    }

    let html = "<h3>All Student Records</h3><table>";
    html += "<tr><th>Roll</th><th>Name</th><th>Total</th><th>Average</th><th>Result</th></tr>";

    students.forEach(s => {
        html += `
        <tr>
            <td>${s.roll}</td>
            <td>${s.name}</td>
            <td>${s.total}</td>
            <td>${s.avg.toFixed(2)}</td>
            <td>${s.result}</td>
        </tr>`;
    });

    html += "</table>";
    output.innerHTML = html;
}

function topperUI() {
    let students = getAllStudents();

    if (students.length === 0) {
        output.innerHTML = "❌ No students added yet";
        return;
    }

    let topper = getTopper();

    output.innerHTML = `
        <h3>🏆 Topper Details</h3>
        Name: ${topper.name}<br>
        Roll: ${topper.roll}<br>
        Total Marks: ${topper.total}<br>
        Average: ${topper.avg.toFixed(2)}
    `;
}

