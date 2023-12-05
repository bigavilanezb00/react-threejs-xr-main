const Circle = (props) => {
  return (
    <mesh
      {...props}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color={'pink'} />
    </mesh>
  )
}
export default Circle;
