import { atom } from 'jotai';
import { Vector3 } from 'three';
import { Player } from './types';

const defaultPlayer: Player = {
  hairColor: '#ec8888',
  topColor: '#fffff',
  bottomColor: '#efefef',
  id: '1',
  x: 0,
  y: 0,
  z: 0
};
export const charactersAtom = atom<Player[]>([defaultPlayer]);
