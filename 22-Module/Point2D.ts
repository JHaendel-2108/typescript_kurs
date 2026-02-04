export class Point2D
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