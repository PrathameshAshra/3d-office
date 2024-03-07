import { useState } from 'react';
import * as THREE from 'three';
import { Vector3 } from 'three';
import {
  Environment,
  ContactShadows,
  OrbitControls,
  useCursor
} from '@react-three/drei';
import { useAtom } from 'jotai/react';
import { charactersAtom } from './Women/atom';
import { AnimatedWoman } from './Women';
import Chair from './Chair';
import Floor from './Floor';
import Door from './Door';

function Scene() {
  const [characters] = useAtom(charactersAtom);
  const [pos, setPosition] = useState([0, 0, 0]);
  const [onFloor, setOnFloor] = useState(false);

  // const position = new Vector3(location.x, location.y, location.z);
  useCursor(onFloor);

  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <ContactShadows blur={2} />
      <OrbitControls />
      {/* <mesh
        rotation-x={-Math.PI / 2}
        position-y={-0.001}
        onClick={(e) => setPosition([e.point.x, 0, e.point.z])}
        onPointerEnter={() => setOnFloor(true)}
        onPointerLeave={() => setOnFloor(false)}
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh> */}
      <Floor
        onClick={(e) => setPosition([e.point.x, 0, e.point.z])}
        onPointerEnter={() => setOnFloor(true)}
        onPointerLeave={() => setOnFloor(false)}
      />

      <Chair />
      {characters.map((character) => (
        <AnimatedWoman
          key={character.id}
          position={new Vector3(pos[0], pos[1], pos[2])}
          hairColor={character.hairColor}
          topColor={character.topColor}
          bottomColor={character.bottomColor}
        />
      ))}
    </>
  );
}

export default Scene;
