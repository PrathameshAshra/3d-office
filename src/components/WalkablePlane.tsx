import React, { Ref, useRef } from 'react';
import { Mesh } from 'three';
import { usePlane } from '../store/player';
import { ThreeEvent } from '@react-three/fiber';
type WalkablePlane = {
  onPlaneClick: (e: ThreeEvent<MouseEvent>) => void;
};
function WalkablePlane({ onPlaneClick }: WalkablePlane) {
  const planeRef = useRef<Mesh>(null);
  const position = usePlane((state) => state.position);

  return (
    <mesh
      ref={planeRef as Ref<Mesh>}
      position={position}
      scale={[10, 0.1, 10]} // Adjust scale as needed
      onClick={onPlaneClick}
    >
      <boxGeometry />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}

export default WalkablePlane;
