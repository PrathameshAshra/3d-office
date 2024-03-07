import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

export type GLTFResult = GLTF & {
  nodes: {
    OfficeChair_1: THREE.Mesh;
    OfficeChair_2: THREE.Mesh;
    OfficeChair_3: THREE.Mesh;
  };
  materials: {
    Grey: THREE.MeshStandardMaterial;
    Black: THREE.MeshStandardMaterial;
    Chair: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};
interface GLTFAction extends THREE.AnimationClip {
  name: '';
}

export type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>
>;
