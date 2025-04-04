// [].reduce<number>(previousValue => {},0)

class User {
    name;
    age;
    status;

    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
}

type UserType = { name: string, age: number, status: boolean };

let users: UserType[] = [
    new User('vsya', 31, true),
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
