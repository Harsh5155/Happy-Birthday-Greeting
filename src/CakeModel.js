// src/CakeModel.js

import React, { useRef } from 'react'; // <-- Add useRef
import { useGLTF } from '@react-three/drei';
import { useFrame } from "@react-three/fiber"; // <-- Add this import

export function Model(props) {
  const { nodes, materials } = useGLTF('/birthday_cake.glb');
  
  // --- Add this block for animation ---
  const modelRef = useRef();
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // You can adjust the speed here
    }
  });
  // ------------------------------------

  return (
    // Add ref={modelRef} to the top-level group
    <group ref={modelRef} {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 0.012, 0]} scale={0.981}>
          <mesh geometry={nodes.pCylinder5_1002_0.geometry} material={materials['1002']} />
          <mesh geometry={nodes.pCylinder5_1001_0.geometry} material={materials['1001']} />
        </group>
        <group position={[0, 0.015, 0]} scale={0.978}>
          <mesh geometry={nodes.pCylinder3_1003_0.geometry} material={materials['1003']} />
          <mesh geometry={nodes.pCylinder3_1001_0.geometry} material={materials['1001']} />
        </group>
        <mesh geometry={nodes.pSphere550_1001_0.geometry} material={materials['1001']} position={[-0.612, 1.221, -0.578]} rotation={[-Math.PI, 0.698, -Math.PI]} scale={0.088} />
        <mesh geometry={nodes.pSphere551_1001_0.geometry} material={materials['1001']} position={[-0.771, 1.221, -0.337]} rotation={[-Math.PI, Math.PI / 9, -Math.PI]} scale={0.088} />
        <mesh geometry={nodes.pSphere546_1001_0.geometry} material={materials['1001']} position={[0.446, 1.221, -0.701]} rotation={[0, Math.PI / 3, 0]} scale={0.088} />
        <mesh geometry={nodes.pSphere547_1001_0.geometry} material={materials['1001']} position={[0.182, 1.221, -0.815]} rotation={[0, 1.396, 0]} scale={0.088} />
        <mesh geometry={nodes.pSphere545_1001_0.geometry} material={materials['1001']} position={[0.656, 1.221, -0.504]} rotation={[0, 0.698, 0]} scale={0.088} />
        <mesh geometry={nodes.pSphere544_1001_0.geometry} material={materials['1001']} position={[0.785, 1.221, -0.246]} rotation={[0, Math.PI / 9, 0]} scale={0.088} />
        <mesh geometry={nodes.pCylinder29_1004_0.geometry} material={materials['1004']} position={[0, 3.804, 0]} scale={1.205} />
        <mesh geometry={nodes.pSphere561_1001_0.geometry} material={materials['1001']} position={[0.818, 1.221, 0.04]} scale={0.088} />
        <mesh geometry={nodes.pSphere560_1001_0.geometry} material={materials['1001']} position={[0.752, 1.221, 0.32]} rotation={[0, -Math.PI / 9, 0]} scale={0.088} />
        <mesh geometry={nodes.pSphere558_1001_0.geometry} material={materials['1001']} position={[0.363, 1.221, 0.732]} rotation={[0, -Math.PI / 3, 0]} scale={0.088} />
        <mesh geometry={nodes.pSphere559_1001_0.geometry} material={materials['1001']} position={[0.593, 1.221, 0.56]} rotation={[0, -0.698, 0]} scale={0.088} />
        <mesh geometry={nodes.pSphere557_1001_0.geometry} material={materials['1001']} position={[0.087, 1.221, 0.815]} rotation={[0, -1.396, 0]} scale={0.088} />
        <mesh geometry={nodes.pSphere556_1001_0.geometry} material={materials['1001']} position={[-0.201, 1.221, 0.798]} rotation={[-Math.PI, -1.396, -Math.PI]} scale={0.088} />
        <mesh geometry={nodes.pSphere555_1001_0.geometry} material={materials['1001']} position={[-0.465, 1.221, 0.684]} rotation={[-Math.PI, -Math.PI / 3, -Math.PI]} scale={0.088} />
        <mesh geometry={nodes.Candle_1005_0.geometry} material={materials['1005']} />
        <mesh geometry={nodes.Candle_1006_0.geometry} material={materials['1006']} />
        <mesh geometry={nodes.Candle_1007_0.geometry} material={materials['1007']} />
        <mesh geometry={nodes.pSphere548_1001_0.geometry} material={materials['1001']} position={[-0.106, 1.221, -0.832]} rotation={[-Math.PI, 1.396, -Math.PI]} scale={0.088} />
        <mesh geometry={nodes.pSphere549_1001_0.geometry} material={materials['1001']} position={[-0.381, 1.221, -0.75]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]} scale={0.088} />
        <mesh geometry={nodes.pSphere553_1001_0.geometry} material={materials['1001']} position={[-0.804, 1.221, 0.229]} rotation={[-Math.PI, -Math.PI / 9, -Math.PI]} scale={0.088} />
        <mesh geometry={nodes.pSphere554_1001_0.geometry} material={materials['1001']} position={[-0.675, 1.221, 0.486]} rotation={[-Math.PI, -0.698, -Math.PI]} scale={0.088} />
        <mesh geometry={nodes.pSphere552_1001_0.geometry} material={materials['1001']} position={[-0.837, 1.221, -0.057]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.088} />
      </group>
    </group>
  )
}

useGLTF.preload('/birthday_cake.glb')