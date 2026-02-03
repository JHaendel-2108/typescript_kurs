/* 
* * Type-Umwandlung zu boolenas
* * "", 0, undefined = false
*/

function printAll(arg:string | string[])
{

  // Wenn das Argument ein Array ist:
  if(typeof arg === 'object')
  {
    for( const s of arg)
    {
      console.log(s);
      
    }

    return;
  }

  // Wenn es ein String ist:

  if(typeof arg === 'string')
  {
    console.log(arg);
    return;
  }

}

const s = 'Jan';
printAll(s);

const a = ['Jan', 'Daniel'];
printAll(a);

const n = 1;

if(!n)
{
  console.log('False');
}
else
{
  console.log('True');
}