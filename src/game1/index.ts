import { AnimatedSprite, Application, Assets, Texture } from "pixi.js";
import { SpineView } from "../spine/spine.view";
import "@esotericsoftware/spine-pixi-v8";
import { Container } from "pixi.js";
import { Sprite } from "pixi.js";
import { Graphics } from "pixi.js";
import { Text } from "pixi.js";
import Person from "./models/person";
import Head from "./models/head";
import TS, { ErrorCodesEnums, TS_Child } from "./enums/error-codes.enum";
import gsap from "gsap";

const p = new Person();
p.name = "asdasdas";
p.personalNumber = 90;
p.logMyHairColor();

const ts = new TS();
const tsChild = new TS_Child();

const head = new Head();

const app = new Application();

async function main() {
  await app.init({
    background: "#cecece",
    resizeTo: window,
    antialias: false,
  });
  document.getElementById("app")!.appendChild(app.canvas);
  globalThis.__PIXI_APP__ = app;
  app.stage.label = "Application Main Stage";

  Assets.add({
    alias: "spineData",
    src: "/common/test/celestial-circus-pro.json",
  });
  Assets.add({
    alias: "spineAtlas",
    src: "/common/test/celestial-circus-pro.atlas",
  });
  Assets.add({
    alias: "card",
    src: "/game1/card/card.json",
  });
  const resources = await Assets.load(["spineData", "spineAtlas", "card"]);
  console.warn(resources);

  const cardTextures: Texture[] = Object.values(resources.card.textures);
  console.error(cardTextures);

  const animatedSprite = new AnimatedSprite(cardTextures);
  app.stage.addChild(animatedSprite);
  // animatedSprite.play();
  // animatedSprite.loop = false;
  // animatedSprite.animationSpeed = 0.1;
  // animatedSprite.gotoAndPlay(12);
  // setTimeout(() => {
  //   animatedSprite.stop();
  // }, 2000);

  animatedSprite.gotoAndStop(52);

  animatedSprite.x = 200;
  animatedSprite.y = 190;
  animatedSprite.position.set(200, 190);
  animatedSprite.position.x = 200;
  animatedSprite.position.y = 200;

  // animatedSprite.alpha = 0.5; // 0 - 1;
  // animatedSprite.visible = true; // false
  // animatedSprite.rotation = 0; //Math.PI;

  // animatedSprite.pivot.set(100, 100); // pixel
  // animatedSprite.pivot.x = 100;
  // animatedSprite.pivot.y = 100;

  // animatedSprite.anchor.set(0.5, 0.5); // %
  // animatedSprite.anchor.x = 0.5;
  // animatedSprite.anchor.y = 0.5;

  animatedSprite.scale.set(0.5);

  // animatedSprite.pivot.set()

  //

  const myContainer = new Container(); // div
  app.stage.addChild(myContainer);
  myContainer.label = "my first container";

  // const mySprite = new Sprite(); // img
  // app.stage.addChild(mySprite);

  // const myGraphics = new Graphics(); // svg
  // myGraphics.circle(0, 0, 100);
  // myGraphics.fill(0xff0000);
  // myGraphics.stroke({ color: 0x0000ff, width: 2 });
  // app.stage.addChild(myGraphics);
  // myGraphics.position.set(150, 150);

  // const myText = new Text({
  //   // text
  //   text: "I am First text in PIXIJS",
  //   style: {
  //     fill: 0xffff00,
  //   },
  // });
  // app.stage.addChild(myText);
  // myText.position.set(200, 50);

  // const g = new Graphics();
  // g.rect(0, 0, 200, 100);
  // g.fill(0x00ff00);
  // g.stroke({ color: 0x0000ff, width: 2 });
  // container.addChild(g);
  // g.position.set(100, 100);

  const array: Product[] = [
    { name: "bread", expire: 12, x: new X(13) },
    { name: "cheese", expire: 3, x: new X(9) },
  ];

  console.error(
    "enum: ",
    ErrorCodesEnums.SUCCESS,
    ErrorCodesEnums.PAGE_NOT_FOUND,
    ErrorCodesEnums.TEST_3
  );

  console.log(array[0].x.temperature + 10);
  console.warn(getRand(getRand(1, 10)[0], getRand(100, 200)[0]));

  let userRecord: [string, number[], boolean] = ["Chris", [30], true];

  // if (resp.code == ErrorCodes.SUCCESS) {
  //   ajkdads
  // }

  const x: number = 0;

  switch (x) {
    case ErrorCodesEnums.SUCCESS:
      console.error("success");
      break;
    case ErrorCodesEnums.PAGE_NOT_FOUND:
      console.log("some response found");
      break;

    default:
      console.error("default");
      break;
  }

  // console.log(
  //   sum(5, 10, 2, (sum: number) => {
  //     console.error("sum from arrow function: ", sum);
  //   })
  // );
  let i = 0;

  for (let i = 0; i < 5; i++) {
    console.log(i);

    for (let i = 0; i < 2; i++) {
      console.log(i);
    }
  }

  gsap.to(myContainer, 2, {
    x: 19,
    onComplete: () => {},
  });

  sendReq((response: any) => {
    // document.getElementById("name").textContent = response.name;
  });
}
function sendReq(callback: any): void {
  setTimeout(() => {
    if (callback) callback();
  }, 3000);
}

function callback(sum: number): void {
  console.error("from callback method sum = ", sum);
}
function sum(x: number, y: number, delay: number, callback: any): number {
  const sum: number = x + y;

  setTimeout(() => {
    if (callback) {
      callback(sum);
    }
  }, delay * 1000);

  return sum;
}

type ID = number | string;
function printID(id: ID) {
  console.log(`ID is: ${id}`);
}

// ra ar unda gavaketot
function getRand(
  min: number,
  max: number
): [number, { from: number; to: number }] {
  return [Math.random() * (max - min) + min, { from: min, to: max }];

  0.45 * (10 - 1) + 1;

  // return [5, { name: 'bread', expire: 12, x: new X(13) }]
}

interface Product {
  name: string;
  expire: number;
  x: X;
}
class X {
  public temperature: string;
  constructor(public price: number) {}
}

main().catch(console.error);

// Intersection Type: A type that has ALL properties of both interfaces
interface HasName {
  name: string;
}
interface HasAge {
  age: number;
}
// CombinedProfile must have both 'name' (string) and 'age' (number)
type CombinedProfile = HasName & HasAge;
const person: CombinedProfile = {
  name: "Jane Doe",
  age: 45,
  // If we miss 'age' or 'name', it will be a compiler error
};
