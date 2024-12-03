
interface Student{
    firstName: string;
    lastName : string;
    age: number;
    location: string; 
}

const student1: Student =  {firstName:"Hello",lastName:"Word",age:23,location:"France"};
const student2: Student =  {firstName:"Casper",lastName:"Bouh",age:26,location:"Espagne"};

const studentsList: Array<Student> = [student1,student2];

function renderTable(students: Array<Student>) {
    const table = document.createElement("table");
    const headerRow = table.insertRow();
    const headerCell1 = headerRow.insertCell(0);
    const headerCell2 = headerRow.insertCell(1);
    
    headerCell1.innerText = "First Name";
    headerCell2.innerText = "Location";

    students.forEach(student => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        
        cell1.innerText = student.firstName;
        cell2.innerText = student.location;
    });
    document.body.appendChild(table);
}

renderTable(studentsList);

