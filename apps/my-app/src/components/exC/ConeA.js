const ConeA = (props) => {
    return (
        <mesh
        {...props}>
            <coneGeometry args={[1,3,32]}/>
            <meshStandardMaterial color={'red'}/>
        </mesh>
    );
}

export default ConeA;