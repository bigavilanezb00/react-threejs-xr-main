import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
const Box = (props) => {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale='1'>
      <boxGeometry args={props.size?props.size:[1, 1, 1]} />
      <meshStandardMaterial color='orange' />
    </mesh>
  )
}



export default Box;
