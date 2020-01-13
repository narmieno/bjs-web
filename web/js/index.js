import {getClasses} from "./api.js";
import {getStudents} from "./api.js";

function constructTableRow(schoolClass) {
    let row = document.createElement("tr");

    let grade = document.createElement("td");
    grade.innerText = schoolClass.grade;
    row.appendChild(grade);

    let className = document.createElement("td");
    className.innerText = schoolClass.className;
    row.appendChild(className);

    let classTeacher = document.createElement("td");
    classTeacher.innerText = schoolClass.classTeacherName === undefined ? "" : schoolClass.classTeacherName;
    row.appendChild(classTeacher);

    return row;
}

$(window).on("load", function () {
    const classesElement = document.querySelector("#classes");
    const errorElement = document.querySelector("#error");

    getClasses()
        .then(classes => {
            classes.forEach((schoolClass) => {
                let row = constructTableRow(schoolClass);
                classesElement.appendChild(row);
            });
        })
        .catch(err => {
            console.error(err);
            $(errorElement).slideDown("slow").delay(1500).slideUp("slow");
        })
});

function constructTableRow(student) {
    let row = document.createElement("tr");

    let firstName = document.createElement("td");
    firstName.innerText = student.firstName;
    row.appendChild(firstName);

    let lastName = document.createElement("td");
    lastName.innerText = student.lastName;
    row.appendChild(lastName);

    let birthday = document.createElement("td");
    birthday.innerText = student.birthDay;
    row.appendChild(birthday);

    return row;
}

$(window).on("load", function () {
    const classesElement = document.querySelector("#students");
    const errorElement = document.querySelector("#error");

    getStudents("http://raspberry-balena.gtdbqv7ic1ie9w3s.myfritz.net:8080/api/v1/classes/23")
        .then(students => {
            students.forEach((student) => {
                let row = constructTableRow(student);
                classesElement.appendChild(row);
            });
        })
        .catch(err => {
            console.error(err);
            $(errorElement).slideDown("slow").delay(1500).slideUp("slow");
        })
});