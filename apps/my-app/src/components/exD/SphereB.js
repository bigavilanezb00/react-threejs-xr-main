const SphereB = (props) => {
    return (
        <mesh
        {...props}>
            <sphereGeometry args={[1,32,16]}/>
            <meshStandardMaterial color={'red'}/>
        </mesh>
    );
}

export default SphereB;