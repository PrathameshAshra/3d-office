import { useGLTF } from '@react-three/drei';
import { useAtom } from 'jotai';
import React, { useMemo } from 'react';
import { SkeletonUtils } from 'three/examples/jsm/Addons.js';
import { mapAtom } from '../atom';

const Tiles = (props: JSX.IntrinsicElements['group'] & Map) => {
  const { name, gridPosition, size, rotation } = props;
  const [map] = useAtom(mapAtom);
  const { scene } = useGLTF(`/models/items/${name}.glb`);
  // Skinned meshes cannot be re-used in threejs without cloning them
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const width = rotation === 1 || rotation === 3 ? size[1] : size[0];
  const height = rotation === 1 || rotation === 3 ? size[0] : size[1];
  return (
    <primitive
      object={clone}
      position={[
        width / map.gridDivision / 2 + gridPosition[0] / map.gridDivision,
        0,
        height / map.gridDivision / 2 + gridPosition[1] / map.gridDivision
      ]}
      rotation-y={((rotation || 0) * Math.PI) / 2}
    />
  );
};

export default Tiles;
