import { Canvas } from '@react-three/fiber'
import Box from './Box';
import Circle from './Circle';

const Scene = (props) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[2.9, 1, 0]} />
      <Circle position={[5, 0, 0]} size={[2, 16, 16]} />
    </Canvas>
  )
}
export default Scene;
