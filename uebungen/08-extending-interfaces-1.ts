// 08-extending-interfaces-1.ts
/**
 * Aufgaben:
 * 1) `Person` mit: firstName, lastName
 * 2) `Employee` extends Person mit: employeeId, department
 * 3) Implementiere `fullName(p)`
 * 4) Implementiere `employeeLabel(e)` -> "Full Name (#employeeId) - department"
 */

export interface Person {
  firstName: string;
  lastName: string;
}

export interface Employee extends Person {
  employeeId: string;
  department: string;
}

export function fullName(p: Person): string {
  return `${p.firstName} ${p.lastName}`;
}

export function employeeLabel(e: Employee): string {
  return `${fullName(e)} (#${e.employeeId}) - ${e.department}`;
}

console.log(employeeLabel({ firstName: "Max", lastName: "Muster", employeeId: "E-7", department: "IT" }) === "Max Muster (#E-7) - IT");
