const SphereA = (props) => {
    return (
        <mesh
        {...props}>
            <sphereGeometry args={[1,32,16]}/>
            <meshStandardMaterial color={'yellow'}/>
        </mesh>
    );
}

export default SphereA;