import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

function NetworkGraph() {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const { positions, lineGeometry } = useMemo(() => {
    const count = 44;
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      const r = 2.1 + Math.random() * 1.1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pts.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta) * 0.7,
          r * Math.cos(phi),
        ),
      );
    }
    const segs: number[] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < 1.5) {
          segs.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(segs, 3));
    return { positions: pts, lineGeometry: geo };
  }, []);

  useEffect(() => () => lineGeometry.dispose(), [lineGeometry]);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    const mx = (state.pointer.x * viewport.width) / 60;
    const my = (state.pointer.y * viewport.height) / 60;
    group.current.rotation.x += (my * 0.25 - group.current.rotation.x) * 0.04;
    group.current.position.x += (mx * 0.6 - group.current.position.x) * 0.04;
  });

  return (
    <group ref={group} scale={0.9}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#7C5CFF" transparent opacity={0.35} />
      </lineSegments>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <icosahedronGeometry args={[i % 6 === 0 ? 0.075 : 0.042, 0]} />
          <meshBasicMaterial color={i % 6 === 0 ? "#22D3EE" : "#A78BFA"} />
        </mesh>
      ))}
      <mesh>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshBasicMaterial color="#7C5CFF" wireframe transparent opacity={0.22} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const smallScreen = window.matchMedia("(max-width: 767px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowCore = (navigator.hardwareConcurrency ?? 8) <= 4;
    setOk(!smallScreen && !reduced && !lowCore);
  }, []);

  if (!ok) return null;

  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.6]}
      gl={{ antialias: false, powerPreference: "low-power" }}
      camera={{ position: [-2.4, 0, 8], fov: 50 }}
    >
      <NetworkGraph />
    </Canvas>
  );
}
