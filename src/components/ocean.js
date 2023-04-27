import * as THREE from 'three'
import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import { Water } from 'three-stdlib'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


extend({ Water })

function Ocean() {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding
    }),
    [waterNormals]
  )
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

function Box() {
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.position.y = 10 + Math.sin(state.clock.elapsedTime) * 20
    ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += delta
  })
  return (
    <mesh ref={ref} scale={20}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}

function Sphere() {
  const ref = useRef();

  useFrame((state, delta) => {
    // Animate the shark's position and rotation
    ref.current.position.x = Math.sin(state.clock.elapsedTime) * 100;
    ref.current.position.y = Math.cos(state.clock.elapsedTime) * 100;
    ref.current.rotation.y += delta;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[20, 20, 20]} />
      <meshStandardMaterial color="grey" />
    </mesh>
  );
}

function Dolphin() {
  const ref = useRef();

  // Load the .glb file
  const gltf = useLoader(GLTFLoader, '/shark.glb');

  useFrame((state, delta) => {
    // Animate the shark's position and rotation
    ref.current.position.x = Math.sin(state.clock.elapsedTime) * 100;
    ref.current.position.y = Math.cos(state.clock.elapsedTime) * 100;
    ref.current.rotation.y += delta;
  });

  return (
    <mesh ref={ref} scale={8}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}


export default function App() {
  return (
    <div className="h-screen w-screen">
    <Canvas camera={{ position: [0, 5, 100], fov: 75, near: 1, far: 20000 }}>
      <pointLight position={[100, 100, 100]} />
      <pointLight position={[-100, -100, -100]} />
      <Suspense fallback={null}>
        <Ocean />
        <Box />
        <Dolphin />
      </Suspense>
      <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
      <OrbitControls />
    </Canvas>
    
    </div>
  )
}
