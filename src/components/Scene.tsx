import React, { Ref, useRef } from 'react';
import { Mesh } from 'three';
import { Women } from './Women';
import { ThreeEvent, useFrame } from '@react-three/fiber';
import WalkablePlane from './WalkablePlane';
import { usePlayer } from '../store/player';

function Scene() {
  //   const planeRef = useRef<Mesh>(null);
  //   const position = usePlayer((state) => state.position);
  const setAnimation = usePlayer((state) => state.setAnimation);
  const setPosition = usePlayer((state) => state.setPosition);
  //   const womenRef = useRef<Group>(null);
  useFrame(() => {});
  const onPlaneClick = (e: ThreeEvent<MouseEvent>) => {
    const [x, y, z] = [e.point.x, e.point.y, e.point.z];

    setAnimation('CharacterArmature|Walk');
    setPosition(x, 0, z);
  };
  return (
    <>
      <Women />
      <WalkablePlane onPlaneClick={onPlaneClick} />
    </>
  );
}

export default Scene;
