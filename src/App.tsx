import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import Scene from "./components/Scene";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
        <Scene />
        <color attach="background" args={["#ececec"]} />
        <Environment preset="sunset" />
        <ambientLight intensity={0.3} />
        <ContactShadows blur={2} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
