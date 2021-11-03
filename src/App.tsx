import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Box = (props: any) => {
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
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export const App = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
};
