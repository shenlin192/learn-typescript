
// const person : {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Maxi',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

enum Role {
    ADMIN,
    READ_ONLY,
}

const person = {
    name: 'Maxi',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role:  Role.ADMIN
}

// person.role.push('admin');

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

console.log(person.name); 