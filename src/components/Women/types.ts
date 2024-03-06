import * as THREE from 'three';
import { Vector3 } from 'three';
import { GLTF } from 'three-stdlib';

export type Player = {} & Character;

export type Character = {
  hairColor: string;
  topColor: string;
  bottomColor: string;
  id: string;
  x: number;
  y: number;
  z: number;
};

export type Nodes = {
  Formad_Head_1: THREE.SkinnedMesh;
  Formad_Head_2: THREE.SkinnedMesh;
  Formad_Head_3: THREE.SkinnedMesh;
  Formal_Body_1: THREE.SkinnedMesh;
  Formal_Body_2: THREE.SkinnedMesh;
  Formal_Body_3: THREE.SkinnedMesh;
  Formal_Feet_1: THREE.SkinnedMesh;
  Formal_Feet_2: THREE.SkinnedMesh;
  Formal_Legs_1: THREE.SkinnedMesh;
  Formal_Legs_2: THREE.SkinnedMesh;
  Root: THREE.Bone;
};
export type GLTFResult = GLTF & {
  nodes: Nodes;
  materials: {
    Skin: THREE.MeshStandardMaterial;
    Red: THREE.MeshStandardMaterial;
    Brown: THREE.MeshStandardMaterial;
    LimeGreen: THREE.MeshStandardMaterial;
    Gold: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};
export type WomenActions =
  | 'CharacterArmature|Death'
  | 'CharacterArmature|Gun_Shoot'
  | 'CharacterArmature|HitRecieve'
  | 'CharacterArmature|HitRecieve_2'
  | 'CharacterArmature|Idle'
  | 'CharacterArmature|Idle_Gun'
  | 'CharacterArmature|Idle_Gun_Pointing'
  | 'CharacterArmature|Idle_Gun_Shoot'
  | 'CharacterArmature|Idle_Neutral'
  | 'CharacterArmature|Idle_Sword'
  | 'CharacterArmature|Interact'
  | 'CharacterArmature|Kick_Left'
  | 'CharacterArmature|Kick_Right'
  | 'CharacterArmature|Punch_Left'
  | 'CharacterArmature|Punch_Right'
  | 'CharacterArmature|Roll'
  | 'CharacterArmature|Run'
  | 'CharacterArmature|Run_Back'
  | 'CharacterArmature|Run_Left'
  | 'CharacterArmature|Run_Right'
  | 'CharacterArmature|Run_Shoot'
  | 'CharacterArmature|Sword_Slash'
  | 'CharacterArmature|Walk'
  | 'CharacterArmature|Wave';

interface GLTFAction extends THREE.AnimationClip {
  name: WomenActions;
}
