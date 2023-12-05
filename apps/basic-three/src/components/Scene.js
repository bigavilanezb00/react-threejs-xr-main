import { Canvas } from '@react-three/fiber'
import Sphere from './Sphere'

const Scene = (props) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10,10,10]} />
      <Sphere position={[0,0,0]} color={'blue'}/>
    </Canvas>
  );
}

export default Scene;
