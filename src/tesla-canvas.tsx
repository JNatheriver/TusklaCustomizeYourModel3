import * as THREE from 'three'
import React, { JSX, Suspense, useEffect, useState } from 'react'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Canvas } from '@react-three/fiber'
import type { CarItem } from './items'

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh
    Cube001_1: THREE.Mesh
    Cube001_2: THREE.Mesh
    Cube001_3: THREE.Mesh
    Cube001_4: THREE.Mesh
    Cube001_5: THREE.Mesh
    Cube001_6: THREE.Mesh
    Cube001_7: THREE.Mesh
    Cube001_8: THREE.Mesh
    Cube001_9: THREE.Mesh
    Cube001_10: THREE.Mesh
    Cube001_11: THREE.Mesh
    Cube001_12: THREE.Mesh
    Cube001_13: THREE.Mesh
    Cube001_14: THREE.Mesh
    Cube001_15: THREE.Mesh
    Cube001_16: THREE.Mesh
    Cube001_17: THREE.Mesh
    Cube001_18: THREE.Mesh
    Cube001_19: THREE.Mesh
    Cube001_20: THREE.Mesh
    Cube001_21: THREE.Mesh
    Cube001_22: THREE.Mesh
  }
  materials: {
    carpaint: THREE.MeshPhysicalMaterial
    BlackWash: THREE.MeshStandardMaterial
    glass: THREE.MeshPhysicalMaterial
    glassDark: THREE.MeshPhysicalMaterial
    OrangeLights: THREE.MeshStandardMaterial
    Mirror: THREE.MeshStandardMaterial
    Silver: THREE.MeshStandardMaterial
    innerLights: THREE.MeshStandardMaterial
    innerLightMetals: THREE.MeshStandardMaterial
    RedLight: THREE.MeshStandardMaterial
    TireRubber: THREE.MeshPhysicalMaterial
    ['Tire Rims']: THREE.MeshStandardMaterial
    Breaks: THREE.MeshStandardMaterial
    carBrand: THREE.MeshStandardMaterial
    GlossyInterior: THREE.MeshPhysicalMaterial
    LightGrayInterior: THREE.MeshStandardMaterial
    interiorGray: THREE.MeshStandardMaterial
    BlackSuade: THREE.MeshPhysicalMaterial
    Wood: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    LicensePlateText: THREE.MeshStandardMaterial
    LicensePlateRed: THREE.MeshStandardMaterial
    LicensePlateYellow: THREE.MeshStandardMaterial
  }
}

export function Model ({ bodyColor, interiorColor, props } : {bodyColor : CarItem, interiorColor : CarItem, props: JSX.IntrinsicElements['group']}) {
  const { nodes, materials } = useGLTF('/model3full.glb') as GLTFResult

  const [bodyMaterial, setBodyMaterial] = useState(materials.carpaint)
  const [interiorMaterial, setInteriorMaterial] = useState(materials.GlossyInterior)

  useEffect(() => {
    const newBodyMaterial = bodyMaterial.clone()
    newBodyMaterial.color.set(bodyColor.color)
    newBodyMaterial.metalness = 0.3
    setBodyMaterial(newBodyMaterial)
  }, [bodyColor])

  useEffect(() => {
    const newInteriorMaterial = interiorMaterial.clone()
    newInteriorMaterial.color.set(interiorColor.color)
    setInteriorMaterial(newInteriorMaterial)
  }, [interiorColor])

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={bodyMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_1.geometry}
        material={materials.BlackWash}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_2.geometry}
        material={materials.glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_3.geometry}
        material={materials.glassDark}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_4.geometry}
        material={materials.OrangeLights}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_5.geometry}
        material={materials.Mirror}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_6.geometry}
        material={materials.Silver}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_7.geometry}
        material={materials.innerLights}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_8.geometry}
        material={materials.innerLightMetals}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_9.geometry}
        material={materials.RedLight}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_10.geometry}
        material={materials.TireRubber}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_11.geometry}
        material={materials['Tire Rims']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_12.geometry}
        material={materials.Breaks}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_13.geometry}
        material={materials.carBrand}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_14.geometry}
        material={interiorMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_15.geometry}
        material={materials.LightGrayInterior}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_16.geometry}
        material={materials.interiorGray}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_17.geometry}
        material={materials.BlackSuade}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_18.geometry}
        material={materials.Wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_19.geometry}
        material={materials.White}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_20.geometry}
        material={materials.LicensePlateText}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_21.geometry}
        material={materials.LicensePlateRed}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_22.geometry}
        material={materials.LicensePlateYellow}
      />
    </group>
  )
}

function TeslaCanvas ({ bodyColor, interiorColor, props } : {bodyColor : CarItem, interiorColor : CarItem, props : React.HTMLAttributes<HTMLDivElement>}) {
  return (
    <div {...props}>
      <Suspense fallback={<iframe src='https://gifer.com/embed/ZKZg' width={480} height={485.053} allowFullScreen />}>
        <Canvas camera={{ position: [15, 4, 15] }}>
          <Stage>
            <Model bodyColor={bodyColor} interiorColor={interiorColor} props={{}} />
          </Stage>
          <OrbitControls
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            maxDistance={20}
            minDistance={1}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default TeslaCanvas

useGLTF.preload('/model3full.glb')
