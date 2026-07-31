import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#468585" emissive="#468585" />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      className="w-full h-screen"
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <color attach="background" args={["#F0F0F0"]} />

      <ambientLight intensity={0.5} />

      <directionalLight position={[2, 2, 2]} intensity={2} color="#9CDBA6" />

      <OrbitControls enableZoom enableRotate enableDamping />

      <RotatingCube />
       
       <Sparkles count={200} scale={[10, 10, 10]} size={4} speed={0.2} noise={1} color="skyblue" />
      
    </Canvas>
  );
};

export default App;
