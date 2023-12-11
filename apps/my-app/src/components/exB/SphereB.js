const SphereB = (props) => {
    return (
        <mesh
        {...props}>
            <sphereGeometry args={[3,16,16]}/>
            <meshStandardMaterial color={'orange'}/>
        </mesh>
    );
}

export default SphereB;