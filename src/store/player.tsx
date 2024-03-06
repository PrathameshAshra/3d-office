import { ThreeEvent } from "@react-three/fiber";
import { create } from "zustand";
import { WomenActions } from "../components/Women";

export type Player = {
  position: [number, number, number];
  setPosition: (x: number, y: number, z: number) => void;
  progress: number;
  setProgress: (x: number) => void;
  animationState: WomenActions;
  setAnimation: (x: WomenActions) => void;
};
export const usePlayer = create<Player>((set) => ({
  position: [0, 0, 0],
  setPosition: (x: number, y: number, z: number) =>
    set(() => ({ position: [x, y, z] })),
  progress: 0,
  setProgress: (progress: number) => set(() => ({ progress })),
  animationState: "CharacterArmature|Idle",
  setAnimation: (animationState: WomenActions) =>
    set(() => ({ animationState })),
}));

export type Plane = {
  position: [number, number, number];
  setPosition: (x: number, y: number, z: number) => void;
  progress: number;
  setProgress: (x: number) => void;
  onPlaneClick: (x: ThreeEvent<MouseEvent>) => void;
};
export const usePlane = create<Plane>((set) => ({
  position: [0, 0, 0],
  setPosition: (x: number, y: number, z: number) =>
    set(() => ({ position: [x, y, z] })),
  progress: 0,
  setProgress: (progress: number) => set(() => ({ progress })),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onPlaneClick(_x) {
    //doNothing
  },
}));
