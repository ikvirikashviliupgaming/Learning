import { Container } from "pixi.js";
import { Slot, Spine } from "@esotericsoftware/spine-pixi-v8";
import gsap from "gsap";

export class SpineView extends Container {
  private _spine?: Spine;
  private _defaultAnimation?: string;

  constructor(alias: string) {
    super();
    (this as any)._alias = alias;
    this._defaultAnimation = alias;
  }

  attach(spineData: any) {
    if (spineData?.skeleton && spineData?.atlas) {
      this._spine = Spine.from({
        skeleton: spineData.skeleton,
        atlas: spineData.atlas,
      });
    } else {
      this._spine = new Spine(spineData.spineData ?? spineData);
    }
    this.addChild(this._spine);
    this._tryPlayDefault();
  }

  get spine() {
    return this._spine;
  }

  attachByAliases(skeletonAlias: string, atlasAlias: string, scale = 1) {
    this._spine = Spine.from({
      skeleton: skeletonAlias,
      atlas: atlasAlias,
      scale,
    });
    this.addChild(this._spine);
    this._tryPlayDefault();
    return this._spine;
  }

  private _tryPlayDefault() {
    const s = this._spine;
    const animName = this._defaultAnimation;
    if (!s || !animName) return;
    const list = s.state?.data?.skeletonData?.animations ?? [];
    const has = list.some((a: any) => a.name === animName);
    if (has) s.state.setAnimation(0, animName, true);
  }

  // Animation controls
  play(name: string, loop = true, track = 0, delay = 0) {
    if (!this._spine) return;

    gsap.delayedCall(delay, () => {
      this._spine.state.setAnimation(track, name, loop);
    });
  }

  queue(name: string, loop = false, track = 0, delay = 0) {
    if (!this._spine) return;
    return this._spine.state.addAnimation(track, name, loop, delay);
  }

  stop(track?: number) {
    if (!this._spine) return;
    if (track === undefined) this._spine.state.clearTracks();
    else this._spine.state.clearTrack(track);
  }

  pause() {
    if (!this._spine) return;
    this._spine.autoUpdate = false;
  }

  resume() {
    if (!this._spine) return;
    this._spine.autoUpdate = true;
  }

  setSpeed(speed: number) {
    if (!this._spine) return;
    this._spine.state.timeScale = speed;
  }

  getAnimations(): string[] {
    const s = this._spine;
    if (!s) return [];
    return (s.state?.data?.skeletonData?.animations ?? []).map(
      (a: any) => a.name
    );
  }

  public getSlotFromRef(slotRef: number | string | Slot): Slot {
    let slot: Slot | null;

    if (typeof slotRef === "number") slot = this._spine.skeleton.slots[slotRef];
    else if (typeof slotRef === "string")
      slot = this._spine.skeleton.findSlot(slotRef);
    else slot = slotRef;

    if (!slot)
      throw new Error(
        `No slot found with the given slot reference: ${slotRef}`
      );

    return slot;
  }
}
