import { atom } from 'jotai';

export type GameMap = {
  gridDivision: number;
  items: [];
  gridPosition: [number, number];
  size: number;
};
export const mapAtom = atom<GameMap | null>(null);
