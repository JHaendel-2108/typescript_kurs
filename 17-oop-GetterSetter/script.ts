class Point2D
{
  public _xPos: number;   //! ohne weitere Angaben sind die Property immer public!
  public _yPos: number;

  constructor(xPosInput: number, yPosInput: number)
  {
    this._xPos = xPosInput;
    this._yPos = yPosInput;
  }

  public set xPos(xPosNow: number)
  {
    this._xPos = xPosNow;
  }

    public get xPos() 
    {
      return this._xPos;
    }

  public set yPos(yPosNow: number)
    {
      this._yPos = yPosNow;
    }

      public get yPos() 
      {
        return this._yPos;
      }

  
}

class Point3D extends Point2D
{
public _zPos: number

  constructor(xPosInput: number, yPosInput: number,zPosInput: number)
  {
    super(xPosInput,yPosInput);
    this._zPos = zPosInput;
  }

  public set zPos(zPosNow: number)
  {
    this._zPos = zPosNow;
  }

  public get zPos() 
  {
  return this._zPos;
  }

  public set xPos(xPosNow: number)
  {
    this._xPos = xPosNow;
  }

  public get xPos() 
  {
  return this._xPos;
  }

  movePosY(pos:number): void
  {
    this._yPos += pos;
  }
  
}

const p1: Point2D = new Point2D(0,0);

const p2: Point3D = new Point3D(1,1,5);

console.log(p1,p2);

// Aufruf der xPos - Mehtode mit Wertzuweisung
p1.xPos = 4;

console.log(p1.xPos, p2);
