
interface Teacher{
    firstName: string;
    lastName : string;
    fullTimeEmployee : boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher{
    numberOfReports: number;
};

const teacher3: Teacher = {
    firstName: 'Viviane',
    fullTimeEmployee: false,
    lastName: 'Scotte',
    location: 'London',
    contract: false,
};


const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};


function printTeacher(firstName: string ,lastName: string) {
    let p = document.createElement("p");
    const fistLetter = firstName[0]
    p.innerHTML=`${fistLetter}. ${lastName}`
    document.body.append(p);
}


interface StudentClass {
    new (firstName: string, lastName: string): StudentClass;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClass{

    private firstName: string;
    private lastName: string;

    constructor(firstName: string,lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework():string{
        return "Currently working";
    }

    displayName(): string{
        return this.firstName;
    }
}


console.log(teacher3);
console.log(director1);

printTeacher(teacher3.firstName,teacher3.lastName);
printTeacher(director1.firstName,director1.lastName);

