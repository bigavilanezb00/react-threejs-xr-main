const ConeB = (props) => {
    return (
        <mesh
        {...props}>
            <coneGeometry args={[2,3,32]}/>
            <meshStandardMaterial color={'blue'}/>
        </mesh>
    );
}

export default ConeB;