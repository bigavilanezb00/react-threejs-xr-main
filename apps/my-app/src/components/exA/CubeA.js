import React from "react";

const CubeA = (props) => {
    return (
        <mesh
        {...props}>
            <boxGeometry args={[1,2,1]}/>
            <meshStandardMaterial color={'blue'}/>
        </mesh>
    );
}

export default CubeA;