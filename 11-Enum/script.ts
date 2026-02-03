/**
 * 
 *  gibt es nur in TypeScript (TS)
 * 
 * Enum: Liste mit mehreren Vorgaben von konstanden Werten
 * 
 */

enum PermissionsLevel
{
  GUEST = 'guest',
  STUDENT = 'student',
  INSTRUCTOR = 'instructor',
  ADMIN = 'admin',
}


interface User
{
  name:string,
  age:number,
  courses: string[]
}

interface UserExtended extends User
{
  permissionLevel: PermissionsLevel;
};

const user1:UserExtended = 
{
  name: 'Jörg',
  age: 45,
  courses: ['Java','Typescript'],
  permissionLevel: PermissionsLevel.GUEST,
}

console.log(user1);


const user2:UserExtended = 
{
  name: 'Andreas',
  age: 25,
  courses: ['C', 'C++', 'Python', 'Typescript'],
  permissionLevel: PermissionsLevel.ADMIN,
};

console.log(user2);

const user3:UserExtended = 
{
  name: 'Sabine',
  age: 42,
  courses: ['Java, C#'],
  permissionLevel: PermissionsLevel.INSTRUCTOR,
};

console.log(user3);