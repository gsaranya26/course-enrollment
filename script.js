let courses = [];


function addCourse(name, code) {
    const course = {
        name: name,
        code: code,
        students: []
    };
    courses.push(course);
    updateCourseList();
}


function enrollStudent(studentName, courseCode) {
    const course = courses.find(c => c.code === courseCode);
    if (course) {
        course.students.push(studentName);
        updateCourseList();
    } else {
        alert("Course not found.");
    }
}

function updateCourseList() {
    const courseList = document.getElementById("courseList");
    courseList.innerHTML = ''; 
    courses.forEach(course => {
        const li = document.createElement("li");
        li.textContent = `${course.name} (${course.code}) - Students: ${course.students.join(", ")}`;
        courseList.appendChild(li);
    });
}


document.getElementById("addCourseButton").addEventListener("click", function() {
    const courseName = document.getElementById("courseName").value;
    const courseCode = document.getElementById("courseCode").value;

    addCourse(courseName, courseCode);
    
    document.getElementById("courseName").value = '';
    document.getElementById("courseCode").value = '';
});

document.getElementById("enrollButton").addEventListener("click", function() {
    const studentName = document.getElementById("studentName").value;
    const courseToEnroll = document.getElementById("courseToEnroll").value;

    enrollStudent(studentName, courseToEnroll);

    document.getElementById("studentName").value = '';
    document.getElementById("courseToEnroll").value = '';
});
