const SphereA = (props) => {
    return (
        <mesh
        {...props}>
            <sphereGeometry args={[1,16,16]}/>
            <meshStandardMaterial color={'black'}/>
        </mesh>
    );
}

export default SphereA;