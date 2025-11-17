export default class Hair {
  public color: string = "black";
  public type: string = "curly";

  constructor() {}

  public changeColor(color: string): void {
    this.color = color;
  }
}
