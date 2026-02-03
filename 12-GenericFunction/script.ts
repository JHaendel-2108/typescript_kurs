function getGenericArray<Type>(items: Type[]): Type[]
{
  return new Array<Type>().concat(items);
}

let numberArray1 = [10,20,30,40];
let numberArray2 = getGenericArray<number>(numberArray1);
numberArray2.push(50);

console.log(numberArray1,numberArray2);

function identify<T, U>(value: T, message: U): T
{
  console.log(message);
  return value;
}

let returnNumber = identify<number, string>(100, 'Hallo'); 