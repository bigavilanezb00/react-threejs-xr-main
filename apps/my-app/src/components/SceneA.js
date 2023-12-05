import { Canvas } from "@react-three/fiber";
import CubeA from "./CubeA";
import SphereA from "./SphereA";

const Scene2 = (props) => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10,10,10]}/>
            <CubeA position={[1,1,0]}/>
            <SphereA position={[-1,0,0]}/>
        </Canvas>
    );
}

export default Scene2;