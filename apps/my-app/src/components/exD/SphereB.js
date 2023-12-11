const SphereB = (props) => {
    return (
        <mesh
        {...props}>
            <sphereGeometry args={[1,32,16]}/>
            <meshStandardMaterial color={'orange'}/>
        </mesh>
    );
}

export default SphereB;