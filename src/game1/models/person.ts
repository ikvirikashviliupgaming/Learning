import Head from "./head";
import Leg from "./leg";

export default class Person {
  public name: string;

  get personalNumber(): number {
    return this._personalNumber;
  }
  set personalNumber(value: number) {
    this._personalNumber = value;
  }
  private _personalNumber: number;

  protected skinColor: string = "white";

  public head: Head = new Head();
  public leg: Leg = new Leg();

  constructor() {}

  public logMyHairColor(): void {
    console.log(this.head.hairColor);
  }
}
