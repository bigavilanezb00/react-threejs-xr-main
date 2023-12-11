import { Canvas } from "@react-three/fiber";
import ConeB from "./ConeB";
import ConeA from "./ConeA";

const SceneC = (props) => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10,10,10]}/>
            <ConeA position={[2,2,0]}/>
            <ConeB position={[-1,2,0]}/>
        </Canvas>
    );
}

export default SceneC;