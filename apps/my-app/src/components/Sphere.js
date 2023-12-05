const Sphere = (props) => {
    return (
        <mesh
        {...props}>
            <sphereGeometry args={[1,16,16]}/>
            <meshStandardMaterial color={'red'}/>
        </mesh>
    );
}

export default Sphere;