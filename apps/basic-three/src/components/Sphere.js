const Sphere = (props) => {
  return (
    <mesh
      {...props}
      scale={props.scale?props.scale:1}>
      <sphereGeometry args={props.attr?props.attr:[1,16,16]}/>
      <meshStandardMaterial color={props.color?props.color:'red'}/>
    </mesh>
  );
}

export default Sphere;
