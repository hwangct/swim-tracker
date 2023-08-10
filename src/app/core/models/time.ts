export class Time {
  id: string;
  event: string;
  date: string;
  age: number;
  time: number;
  competition: string;

  constructor(
    id: string,
    event: string,
    date: string,
    age: number,
    time: number,
    competition: string
  ) {
    this.id = id;
    this.event = event;
    this.date = date;
    this.age = age;
    this.time = time;
    this.competition = competition;
  }
}
