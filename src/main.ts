// import { Application, Assets } from "pixi.js";
// import { SpineView } from "./spine/spine.view";
// import "@esotericsoftware/spine-pixi-v8";
// import gsap from "gsap";

// const app = new Application();

// async function main() {
//   await app.init({ background: "#0d1117", resizeTo: window, antialias: true });
//   document.getElementById("app")!.appendChild(app.canvas);

//   globalThis.__PIXI_APP__ = app;

//   console.error("asdasdsa");

//   try {
//     // Register Spine JSON and atlas explicitly so both are requested
//     Assets.add({
//       alias: "spineData",
//       src: "/common/test/celestial-circus-pro.json",
//     });
//     Assets.add({
//       alias: "spineAtlas",
//       src: "/common/test/celestial-circus-pro.atlas",
//     });

//     Assets.add({ alias: "ballsData", src: "/common/balls/balls.json" });
//     Assets.add({ alias: "ballsAtlas", src: "/common/balls/balls.atlas" });

//     const loaded = (await Assets.load(["spineData", "spineAtlas"])) as any;
//     // const loaded = await Assets.load(['ballsData', 'ballsAtlas']) as any;

//     let animIndex = 6;
//     const animNames = [
//       "eyeblink",
//       "eyeblink-long",
//       "stars",
//       "swing",
//       "wind-idle",
//       "wing-flap",
//       "wings-and-feet",
//     ];

//     const testSpine = new SpineView(animNames[animIndex]);
//     testSpine.attachByAliases("spineData", "spineAtlas", 1);
//     testSpine.x = app.renderer.width * 0.2;
//     testSpine.y = app.renderer.height * 0.2;
//     testSpine.spine.pivot.set(900, -2000);
//     testSpine.scale.set(0.3);
//     app.stage.addChild(testSpine);

//     gsap.to(
//       [
//         testSpine.getSlotFromRef("cloud-front").bone,
//         testSpine.getSlotFromRef("cloud-back").bone,
//       ],
//       1,
//       { x: 600, y: 1800, repeat: -1, yoyo: true }
//     );

//     console.error("spine slots: ", testSpine.getSlotFromRef("cloud-front"));

//     app.ticker.add(() => {
//       console.log("FPS:", app.ticker.FPS.toFixed(2));
//     });

//     // console.error('spine slots: ', testSpine.spine.skeleton.slots)

//     // testSpine.spine.rotation = -Math.PI * 0.35;

//     // gsap.to(testSpine.spine, 2, { rotation: Math.PI * 0.35, repeat: -1, yoyo: true })
//     // gsap.to([testSpine.getSlotFromRef('cloud-front').bone, testSpine.getSlotFromRef('cloud-back').bone], 1, { x: 600, y: 1800, repeat: -1, yoyo: true })
//     // gsap.to(testSpine.getSlotFromRef('Group 1').bone, 1, { x: 600, y: 1800, repeat: -1, yoyo: true })

//     // Play first animation track if available
//     // const s = testSpine.spine;
//     // if (s?.state?.data?.skeletonData?.animations?.length) {
//     //   const names = (s.state.data.skeletonData.animations as any[]).map(a => a.name);
//     //   const first = names[0];
//     //   testSpine.play(first, true);
//     //   if (names[1]) testSpine.queue(names[1], false, 0, 0.2);
//     //   testSpine.setSpeed(1.0);

//     //   // Demo pause/resume/stop
//     //   // setTimeout(() => testSpine.pause(), 4000);
//     //   // setTimeout(() => testSpine.resume(), 6000);
//     //   // setTimeout(() => testSpine.stop(), 9000);
//     // }

//     // setInterval(() => {

//     //   if (animIndex >= animNames.length) return;

//     //   testSpine.play(animNames[animIndex])

//     //   animIndex++;

//     // }, 5000);
//   } catch (error) {
//     console.error("error: ", error);
//   }
// }

// main().catch(console.error);
