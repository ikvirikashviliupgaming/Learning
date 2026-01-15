import gsap from "gsap";

export enum ErrorCodesEnums {
  SUCCESS,
  PAGE_NOT_FOUND = 4,
  TEST_3,
}

interface Tornike {
  da: boolean;
  dzma?: boolean;
}

class Teo {
  constructor() {
    console.log("i am constructor from class Teo");
  }

  protected x(par: boolean): void {
    console.log("i am method from teo named x()", par);
  }
}

export default class TS extends Teo implements Tornike {
  public static ContinentCount: number = 7;
  public static randomNumber(): number {
    return 110;
  }

  public da: boolean = true;
  public dzma?: boolean;

  constructor() {
    super();
    console.log("i am constructor from class TS");

    this.x(this.da);

    const card = null;
    const duration: number = 2;
    gsap.to(card, {
      duration: duration,
      delay: 10,
      x: 10,
      y: 200,
      onStart: () => {
        card.rotate(duration);
      },
    });
  }

  public x(par: boolean): void {
    super.x(par);

    TS.randomNumber();
    console.log("i am method from TS named x()", par);
  }

  public static modifyRandom() {
    return this.randomNumber() * 10;
  }
}

export class TS_Child extends TS {
  constructor() {
    super();

    console.log("i am constructor from class TS_Child");
  }
}
