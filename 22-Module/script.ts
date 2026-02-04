//Classe importieren
import{Point2D} from './Point2D.js';
import{Point3D} from './Point3D.js';

/*
* Geschachtelte Importierung der Class
* Beispiel siehe unten!
*/
// import {(CLASS) as (ShortName), (CLASS) as (SHORTNAME)} from './(file.js)

const p1: Point2D = new Point2D(0,0);

const p2: Point3D = new Point3D(1,1,5);

console.log(p1,p2);