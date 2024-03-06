import React, { Ref, useRef } from "react";
import { Group, Mesh } from "three";
import { Women } from "./Women";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import usePlayer from "../store/player";

function Scene() {
  const planeRef = useRef<Mesh>(null);
  const position = usePlayer((state) => state.position);
  const setPosition = usePlayer((state) => state.setPosition);
  //   const womenRef = useRef<Group>(null);
  //   useFrame((state, delta) => {
  //     if (womenRef.current) {
  //       // Move the model along the x-axis to simulate walking
  //       // You would replace this with actual walking animation logic
  //       console.log(womenRef.current);
  //       womenRef.current.position.x += delta * 0.5; // Adjust speed as needed
  //     }
  //   });
  const onPlaneClick = ({ x, y }: ThreeEvent<MouseEvent>) => {
    console.log(x, y);
    setPosition(x, y, 0);
    // setPosition(x, y, 0);
  };
  return (
    <>
      <Women />
      <mesh
        ref={planeRef as Ref<Mesh>}
        position={position}
        scale={[10, 0.1, 10]} // Adjust scale as needed
        onClick={onPlaneClick}
      >
        <boxGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
}

export default Scene;
