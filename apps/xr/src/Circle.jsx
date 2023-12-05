import React, { useRef } from 'react'
const Circle = (props) => {
  // This reference will give us direct access to the mesh
  console.log(props)
  const meshRef = useRef()
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={1}>
      <sphereGeometry args={props.size?props.size:[1, 16, 16]} />
      <meshStandardMaterial color={'pink'} />
    </mesh>
  )
}
export default Circle;
