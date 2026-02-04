interface AppointmentInterface
{
  startTime: Date;
  endTime: Date;
  description: string;
}

abstract class AppointmentABC
{
  protected startTime: Date;
  protected endTime: Date;
  protected description: string;

    constructor (startTimeInput: Date, endTimeInput: Date, descriptionInput: string)
  {
    this.startTime = startTimeInput;
    this.endTime = endTimeInput;
    this.description = descriptionInput;
  }

  /**
   * Methoden implementieren
   * 
   * ?Var.1: 
   * Methode wird in der abstrakten Klasse inkl. 
   * Anweisungsblock implementiert => Dann darf diese Methode abgeleiteten Klasse
   * NICHT noch einmal implementiert werden.
   * 
   * Beispiel wäre dann, diese hier anzugeben, wie unten!
   * 
  printAppointment(): void
  {
    console.log(this.startTime,this.endTime, this.description);
  }
   */


  /**
   * ?Var.2: 
   * Methode wird in der abstrakte Klasse nur angegeben (ähnlich wie Interfaces).
   * Die Implementierung, also die Anweisung, müssen in der abgeleitete Klasse umgesetzt
   * werden.
   * 
   *  Hierbei benötigt die Mehtode in der abstrakten Klasse das Schlüsselwort 
   *! "abstract"
   * 
   */
abstract printAppointment(): void;

}


class Appointment extends AppointmentABC
{
 
  constructor (startTimeInput: Date, endTimeInput: Date, descriptionInput: string)
  {
    super(startTimeInput, endTimeInput, descriptionInput);

  }

    printAppointment(): void
  {
    console.log(this.startTime,this.endTime, this.description);
  }

}

const a = new Appointment
(
  new Date('2026-01-04T10:52:00'),
  new Date('2026-02-04T12:26:00'),
  'Eine Dauer'

);

a.printAppointment();