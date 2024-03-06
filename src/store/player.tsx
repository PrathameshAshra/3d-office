import { create } from "zustand";

export type Player = {
  position: [number, number, number];
  setPosition: (x: number, y: number, z: number) => void;
  progress: number;
  setProgress: (x: number) => void;
};
const usePlayer = create<Player>((set) => ({
  position: [0, 0, 0],
  setPosition: (x: number, y: number, z: number) =>
    set(() => ({ position: [x, y, z] })),
  progress: 0,
  setProgress: (progress: number) => set(() => ({ progress })),
}));

export default usePlayer;
