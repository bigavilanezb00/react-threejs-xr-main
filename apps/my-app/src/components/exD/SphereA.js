const SphereA = (props) => {
    return (
        <mesh
        {...props}>
            <sphereGeometry args={[1,32,16]}/>
            <meshStandardMaterial color={'black'}/>
        </mesh>
    );
}

export default SphereA;