export class DateTime {
  private _nano: number;
  private _year: number;
  private _monthValue: number;
  private _dayOfMonth: number;
  private _hour: number;
  private _minute: number;
  private _second: number;
  private _month: string;
  private _dayofYear: number;

  constructor(nano: number, year: number, monthValue: number, dayOfMonth: number, hour: number, minute: number, second: number, month: string, dayofYear: number) {
    this._nano = nano;
    this._year = year;
    this._monthValue = monthValue;
    this._dayOfMonth = dayOfMonth;
    this._hour = hour;
    this._minute = minute;
    this._second = second;
    this._month = month;
    this._dayofYear = dayofYear;
  }

  get nano(): number {
    return this._nano;
  }

  set nano(value: number) {
    this._nano = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  get monthValue(): number {
    return this._monthValue;
  }

  set monthValue(value: number) {
    this._monthValue = value;
  }

  get dayOfMonth(): number {
    return this._dayOfMonth;
  }

  set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }

  get hour(): number {
    return this._hour;
  }

  set hour(value: number) {
    this._hour = value;
  }

  get minute(): number {
    return this._minute;
  }

  set minute(value: number) {
    this._minute = value;
  }

  get second(): number {
    return this._second;
  }

  set second(value: number) {
    this._second = value;
  }

  get month(): string {
    return this._month;
  }

  set month(value: string) {
    this._month = value;
  }

  get dayofYear(): number {
    return this._dayofYear;
  }

  set dayofYear(value: number) {
    this._dayofYear = value;
  }
}
