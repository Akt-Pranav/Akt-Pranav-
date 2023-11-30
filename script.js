let studentDatabase = [];

function initializeDatabase() {
    const numStudents = parseInt(document.getElementById('numStudents').value);
    
    if (!isNaN(numStudents) && numStudents > 0) {
        studentDatabase = []; // Reset the database
        for (let i = 0; i < numStudents; i++) {
            addStudent(); // Prompt user to add individual students
        }
    } else {
        alert('Please enter a valid number of students.');
    }
}

function applyFilter() {
    const filterType = document.getElementById('filter').value;

    switch (filterType) {
        case 'name':
            insertionSort(studentDatabase, 'name');
            break;
        case 'sgpa':
            insertionSort(studentDatabase, 'sgpa');
            break;
        case 'rollNo':
            insertionSort(studentDatabase, 'rollNo');
            break;
        default:
            // No filter or unknown filter type, display unfiltered data
            break;
    }

    printStudents('output', studentDatabase);
}

function insertionSort(students, sortBy) {
    students.sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'sgpa') return b.sgpa - a.sgpa; // Sort SGPA in descending order
        if (sortBy === 'rollNo') return a.rollNo - b.rollNo;
        return 0;
    });
}

function addStudent() {
    const name = document.getElementById('name').value;
    const rollNo = parseInt(document.getElementById('rollNo').value);
    const sgpa = parseFloat(document.getElementById('sgpa').value);

    if (name && !isNaN(rollNo) && !isNaN(sgpa)) {
        const newStudent = { rollNo, name, sgpa };
        studentDatabase.push(newStudent);
        printStudents('output', studentDatabase);
    } else {
        alert('Please enter valid data.');
    }
}

function printStudents(containerId, students) {
    const container = document.getElementById(containerId);
    const output = students.map(student => `Roll No: ${student.rollNo}, Name: ${student.name}, SGPA: ${student.sgpa}`).join('\n');
    container.textContent = output;
                                                                                }
