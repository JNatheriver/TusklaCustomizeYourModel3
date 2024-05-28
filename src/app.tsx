import { OrbitControls, useFBX } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { FC } from 'react'

const App: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const fbx = useFBX('tesla_car1.fbx')

  return (
    <div {...props}>
      <Canvas
        camera={{ position: [0, 10, -550] }}
      >
        <ambientLight intensity={Math.PI / 3} />
        <spotLight position={[0, 200, 0]} angle={0.5} penumbra={3} decay={0} intensity={Math.PI} />
        <primitive object={fbx} />
        <OrbitControls />
      </Canvas>
    </div>

  )
}

export default App
