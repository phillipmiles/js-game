export type SpaceType = 'floor' | 'wall' | 'empty';
export type SpaceContent = 'player' | null;

export class Space {
  type;
  constructor(type: SpaceType) {
    this.type = type;
  }
}
