import { Application, Assets } from 'pixi.js';
import { SpineView } from '../spine/spine.view';
import '@esotericsoftware/spine-pixi-v8';

const app = new Application();

async function main() {
  await app.init({ background: '#141821', resizeTo: window, antialias: true });
  document.getElementById('app')!.appendChild(app.canvas);

  Assets.add({ alias: 'spineData', src: '/common/test/celestial-circus-pro.json' });
  Assets.add({ alias: 'spineAtlas', src: '/common/test/celestial-circus-pro.atlas' });
  await Assets.load(['spineData', 'spineAtlas']);

  const view = new SpineView('wing-flap');
  view.attachByAliases('spineData', 'spineAtlas', 1);
  view.x = app.renderer.width * 0.5;
  view.y = app.renderer.height * 0.7;
  view.scale.set(0.3);
  app.stage.addChild(view);
}

main().catch(console.error);


