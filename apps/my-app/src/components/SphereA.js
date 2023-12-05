const SphereA = (props) => {
    return (
        <mesh
        {...props}>
            <sphereGeometry args={[1,16,16]}/>
            <meshStandardMaterial color={'yellow'}/>
        </mesh>
    );
}

export default SphereA;