const rectangle_square1: (x: number, y: number) => number =
    (x: number, y: number): number => x * y

const rectangle_square2 =
    (x: number, y: number) => x * y;


// class User {
//
//     id;
//     name;
//     surname;
//     email;
//     phone;
//
//
//     constructor(id: number, name: string, surname: string, email: string, phone: string) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
//
//     foobar() {
//         console.log('this is foobar funcotin oin class')
//     }
// }

interface User {

    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    // foobar(): void
    foobar: () => void
}

let users: User[] = [

    {
        id: 7, name: 'asdasd', surname: 'adsas', email: 'asd@asd', phone: 'asdad', foobar() {
            console.log('askdjgahgdhgds 1')
        }
    },
    {
        id: 7, name: 'asdasd', surname: 'adsas', email: 'asd@asd', phone: 'asdad', foobar() {
            console.log('askdjgahgdhgds 2')
        }
    },
    {
        id: 7, name: 'asdasd', surname: 'adsas', email: 'asd@asd', phone: 'asdad', foobar() {
            console.log('askdjgahgdhgds 3')
        }
    },
    {
        id: 7, name: 'asdasd', surname: 'adsas', email: 'asd@asd', phone: 'asdad', foobar() {
            console.log('askdjgahgdhgds 4')
        }
    },

    {
        id: 0,
        name: "",
        surname: "",
        email: "",
        phone: "",
        foobar: () => {
            throw new Error("Function not implemented.");
        }
    }

];

console.log(users);


// type TType = {id:number, name:string};
type TType = { id: number, name: string };

class SomeUser implements TType {
    id: number;
    name: string;
}


type TId = number | string;


interface SomeID {
    id: number;
}

interface SomeIdChild extends SomeID {
    hash: string
}

interface SomeIdChildChild extends SomeIdChild {
    claims: string
}

class UserClass<ID extends SomeIdChild> {
    id: ID;
    name: string
}

// let someUser1 = new UserClass<SomeIdChildChild>();
// let someUser2 = new UserClass<SomeID>();
// let someUser3 = new UserClass();
