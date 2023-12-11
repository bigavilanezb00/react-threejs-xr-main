import { Canvas } from "@react-three/fiber";
import SphereA from "./SphereA";
import SphereB from "./SphereB";

const SceneB = (props) => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10,10,10]}/>
            <SphereB position={[0,2,0]}/>
            <SphereA position={[-2,0,0]}/>
        </Canvas>
    );
}

export default SceneB;