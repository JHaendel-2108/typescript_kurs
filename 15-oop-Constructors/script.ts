class Point2D
{
  xPos: number;   //! ohne weitere Angaben sind die Property immer public!
  yPos: number;

  constructor(xPosInput: number, yPosInput: number)
  {
    this.xPos = xPosInput;
    this.yPos = yPosInput;
  }
  
}

class Point3D extends Point2D
{
zPos: number

  constructor(xPosInput: number, yPosInput: number)
  {
    super(xPosInput,yPosInput);
    this.zPos = yPosInput;
  }
  
}

const p1: Point2D = 
{
  xPos: 0,
  yPos: 0
}

const p2: Point3D = 
{
  xPos: 1,
  yPos: 1,
  zPos: 5
}

console.log(p1,p2);
console.log(p2);
