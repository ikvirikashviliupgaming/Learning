export abstract class Dato {
  abstract nugazari: number;
  abstract Yvirili(): void;

  constructor() {
    // TODO
  }
}

/**
 * zura aris class
 */
class Zura extends Dato {
  public nugazari: number = 19;
  public Yvirili(): void {}

  constructor() {
    super();
  }

  /**
   * ahsbdaskj daslkbdalskjdlakjsbdalsdblaskj bdalkjsbd alksjb
   * @param show shows somthing
   * @returns somthing from something
   */
  public xxx(show: boolean): number {
    return 10;
  }
}
