import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ReactNode } from 'react';

interface SceneProps {
  children: ReactNode;
}

export default function Scene({ children }: SceneProps) {
  // * canvas docs: https://docs.pmnd.rs/react-three-fiber/api/canvas

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {children}
      <OrbitControls />
    </Canvas>
  );
}
