import { Application, Assets } from "pixi.js";
import { SpineView } from "../spine/spine.view";
import "@esotericsoftware/spine-pixi-v8";
import { Container } from "pixi.js";
import { Sprite } from "pixi.js";
import { Graphics } from "pixi.js";
import { Text } from "pixi.js";
import Person from "./models/person";
import Head from "./models/head";

const p = new Person();
p.name = "asdasdas";
p.personalNumber = 90;
p.logMyHairColor();

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
  await Assets.load(["spineData", "spineAtlas"]);

  //

  const myContainer = new Container(); // div
  app.stage.addChild(myContainer);
  myContainer.label = "my first container";

  const mySprite = new Sprite(); // img
  app.stage.addChild(mySprite);

  const myGraphics = new Graphics(); // svg
  myGraphics.circle(0, 0, 100);
  myGraphics.fill(0xff0000);
  myGraphics.stroke({ color: 0x0000ff, width: 2 });
  app.stage.addChild(myGraphics);
  myGraphics.position.set(150, 150);

  const myText = new Text({
    // text
    text: "I am First text in PIXIJS",
    style: {
      fill: 0xffff00,
    },
  });
  app.stage.addChild(myText);
  myText.position.set(200, 50);

  // const g = new Graphics();
  // g.rect(0, 0, 200, 100);
  // g.fill(0x00ff00);
  // g.stroke({ color: 0x0000ff, width: 2 });
  // container.addChild(g);
  // g.position.set(100, 100);
}

main().catch(console.error);
