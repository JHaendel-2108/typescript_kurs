/* 
* *extends heißt in diesem Kontext NICHT vererben - sondern einschränken!
*
* * Generics sorgen dafür, dass TS sich Typen merkt! any vergisst alles!
* 
* * Generics: "Ich weiß nicht, was reinkommt - aber ich garantiere: Das Gleiche kommt 
*   wieder razus"
* 
*/

function getId<T extends {id:string}>(obj: T): string
  {
    return obj.id;
  }

  getId({id: 'x'});
  getId({id: 'x', title: 'Test'});