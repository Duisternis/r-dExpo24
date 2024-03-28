import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Preload } from '@react-three/drei'

import logo from '../../assets/navbar_logo.png'

export default function Main() {
    return (
        <div className="relative h-[100vh]">
            <div className="absolute text-3xl font-Reenie m-10 z-10">
                <img src={logo} alt="ieeelogo" className="w-[110px] h-[40px]" />
            </div>
            <Canvas gl={{ antialias: false, stencil: false }} camera={{ position: [5, 0, 0], fov: 80 }}>
                <ambientLight intensity={0.2} />
                {/* <spotLight
        angle={0.12}
        penumbra={0.1}
        position={[10, 0, -10]}
        intensity={40}
        onUpdate={(self) => {
          self.target.position.set(-10, 0, 0)
          self.target.updateMatrixWorld()
        }}
      /> */}
                <Hall position={[-6, -1.5, 0]} />

                {/* <Rig from={-Math.PI / 2} to={Math.PI / 2.66} /> */}
                <Preload all />
            </Canvas>
        </div>
    )
}

// function Rig() {
//   useFrame((state) => {
//     state.camera.position.lerp({ x: 0, y: -state.pointer.y / 4, z: state.pointer.x / 2 }, 0.1)
//     state.camera.lookAt(-1, 0, 0)
//   })
// }

function Hall({ ...props }) {
    const { scene } = useGLTF('/scene.glb')
    useFrame((state) => (scene.rotation.y = state.pointer.x / 6 * Math.PI))

    // Load the equirectangular background texture
    const textureLoader = new THREE.TextureLoader();
    const backgroundTexture = textureLoader.load('/daysky.jpeg');
    const backgroundGeometry = new THREE.SphereGeometry(500, 60, 40);
    backgroundGeometry.scale(-1, 1, 1);
    const backgroundMaterial = new THREE.MeshBasicMaterial({ map: backgroundTexture });
    const backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
    scene.add(backgroundMesh);

    return <primitive object={scene} {...props} />
}
