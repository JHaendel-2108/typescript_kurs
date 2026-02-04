interface Sized
{
  length: number;
}

class DataBox<Type extends Sized>
{
  content: Type;

  constructor(input: Type)
  {
      this.content = input;
  }

  print()
  {
    console.log(typeof this.content, this.content);
    
  }

}

// Konstante 1
const d1 = new DataBox('Hello');
d1.print();


// Konstante 2
const d2 = new DataBox([1,2,3]);
d2.print();