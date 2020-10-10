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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
})(Role || (Role = {}));
var person = {
    name: 'Maxi',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// person.role.push('admin');
var favoriteActivities;
favoriteActivities = ['Sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person.name);
