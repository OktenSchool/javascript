// let user = getUserfromDB(1) // {id: 1, name: 'vasya'};
let user = {id: 1, name: 'vasya', skills: ['html', 'js']};

// let copy = user;
// user.id = 2;
// copy.id = 33;


// let copy = structuredClone(user);

// const user_json = JSON.stringify(user);
// console.log(user_json);
// const parse_user = JSON.parse(user_json);
// console.log(parse_user);
//
//
// user.name = 'kokos';
// user.skills = ['html', 'js', 'java'];
//
// console.log(user);
// console.log(parse_user);


// {id: 1, name: 'kokos'}

let userCopy = {...user};
console.log(user);
console.log(userCopy);
userCopy.skills.pop();
console.log(user);
console.log(userCopy);
console.log(userCopy.skills === user.skills);





