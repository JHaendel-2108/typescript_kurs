import { Point2D} from './Point2D.js';

export class Point3D extends Point2D
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
  
}