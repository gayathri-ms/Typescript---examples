/**
 * Using | we can declare more than one type
 * Can be used when value is not under your control.
 */
let multiType: boolean | number;
multiType = true;
multiType = 23;

interface Person {
    firstName: string;
    lastName: string;
}

function fullName(person: Person): string {
    console.log(`${person.firstName} ${person.lastName}`);
    return `${person.firstName} ${person.lastName}`;
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne',
}
fullName(p);