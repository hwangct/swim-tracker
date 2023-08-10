export class User {
  id: string;
  name: string;
  team: string;
  freestyleBest: number;
  backstrokeBest: number;
  breaststrokeBest: number;
  butterflyBest: number;

  constructor(
    id: string,
    name: string,
    team: string,
    freestyleBest: number,
    backstrokeBest: number,
    breaststrokeBest: number,
    butterflyBest: number
  ) {
    this.id = id;
    this.name = name;
    this.team = team;
    this.freestyleBest = freestyleBest;
    this.backstrokeBest = backstrokeBest;
    this.breaststrokeBest = breaststrokeBest;
    this.butterflyBest = butterflyBest;
  }
}
