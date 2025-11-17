import Hair from "./hair";

export default class Head {
  get hairColor(): string {
    return this._hair.color;
  }
  private _hair: Hair;

  protected x: boolean;
  public y: number;

  constructor() {
    this._hair = new Hair();

    this._hair.color = "black";
  }

  public changeHairColor(color: string): void {
    this._hair.changeColor(color);
  }
}
