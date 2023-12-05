import { Canvas } from '@react-three/fiber'

import Circle from './Circle';
import Box from './Box';

const Scene = (props) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Circle position={[0, 0, 0]} />
      <Box position={[-3.2, 0, 0]} />
      <Box position={[4.9, 1, 0]} size={[2, 3, 3]} />
      
    </Canvas>
  )
}
export default Scene;
