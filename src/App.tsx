import React, { useRef, useState } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Shape = (props: any) => {
  const ref: any = useRef();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      receiveShadow
      castShadow
    >
      <sphereGeometry args={[1, 100, 100]} />
      <meshPhysicalMaterial
        color={hovered ? "orange" : "hotpink"}
        roughness={0}
      />
    </mesh>
  );
};

export const App = () => {
  return (
    <Canvas>
      <fog attach="fog" args={["lightpink", 60, 100]} />

      <ambientLight intensity={0.5} />
      <spotLight position={[50, 50, -30]} castShadow />
      <pointLight position={[-10, -10, -10]} color="red" intensity={3} />
      <pointLight position={[0, -5, 5]} intensity={0.5} />
      <directionalLight position={[0, -5, 0]} color="red" intensity={2} />

      <pointLight position={[10, 10, 10]} />

      <Shape position={[0, 1, 0]} />

      <gridHelper args={[100, 1000, "#222", "#222"]} />

      <OrbitControls scale={1} />
    </Canvas>
  );
};
