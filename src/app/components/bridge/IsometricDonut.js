'use client'
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Torus = ({ geometry, edges }) => {
    const torusRef = useRef();
    const wireframeRef = useRef();
    const gridLinesRef = useRef();

    useFrame(() => {
        if (torusRef.current && wireframeRef.current && gridLinesRef.current) {
            torusRef.current.rotation.z += 0.00125;
            wireframeRef.current.rotation.z += 0.00125;
            gridLinesRef.current.rotation.z += 0.00125;
        }
    });

    return (
        <>
            <mesh ref={torusRef} geometry={geometry} position={[0, 0, 0]} rotation={[Math.PI / -1.5, Math.PI / 15, Math.PI / 4]}>
                <meshBasicMaterial color={0x000000} polygonOffset polygonOffsetFactor={3} polygonOffsetUnits={3} />
            </mesh>
            <lineSegments ref={wireframeRef} geometry={edges} position={[0, 0, 0.01]} rotation={[Math.PI / -1.5, Math.PI / 15, Math.PI / 4]}>
                <lineBasicMaterial color={0xffffff} />
            </lineSegments>
            <group ref={gridLinesRef} rotation={[Math.PI / -1.5, Math.PI / 15, Math.PI / 4]}>
                {Array.from({ length: 20 }).map((_, j) => {
                    const theta = j * 2 * Math.PI / 20;
                    const cosTheta = Math.cos(theta);
                    const sinTheta = Math.sin(theta);
                    return Array.from({ length: 41 }).map((_, i) => {
                        const phi = i * 2 * Math.PI / 40;
                        const cosPhi = Math.cos(phi);
                        const sinPhi = Math.sin(phi);
                        const x = (10 + 2.5 * cosTheta) * cosPhi;
                        const y = (10 + 2.5 * cosTheta) * sinPhi;
                        const z = 2.5 * sinTheta;
                        if (i < 40) {
                            const nextPhi = (i + 1) * 2 * Math.PI / 40;
                            const nextX = (10 + 2.5 * cosTheta) * Math.cos(nextPhi);
                            const nextY = (10 + 2.5 * cosTheta) * Math.sin(nextPhi);
                            const lineGeometry = new THREE.BufferGeometry().setFromPoints([
                                new THREE.Vector3(x, y, z),
                                new THREE.Vector3(nextX, nextY, z),
                            ]);
                            return (
                                <line key={`line-x-${j}-${i}`} geometry={lineGeometry}>
                                    <lineBasicMaterial color={0xffffff} />
                                </line>
                            );
                        }
                        if (j < 20) {
                            const nextTheta = (j + 1) * 2 * Math.PI / 20;
                            const nextX = (10 + 2.5 * Math.cos(nextTheta)) * cosPhi;
                            const nextY = (10 + 2.5 * Math.cos(nextTheta)) * sinPhi;
                            const nextZ = 2.5 * Math.sin(nextTheta);
                            const lineGeometry = new THREE.BufferGeometry().setFromPoints([
                                new THREE.Vector3(x, y, z),
                                new THREE.Vector3(nextX, nextY, nextZ),
                            ]);
                            return (
                                <line key={`line-y-${j}-${i}`} geometry={lineGeometry}>
                                    <lineBasicMaterial color={0xffffff} />
                                </line>
                            );
                        }
                        return null;
                    });
                })}
            </group>
        </>
    );
};

const IsometricDonut = () => {
    const geometry = new THREE.TorusGeometry(10, 2.5, 20, 40); // Adjust parameters as needed
    const edges = new THREE.EdgesGeometry(geometry);

    return (
        <Canvas
            className='flex justify-center items-center !overflow-visible bridge'
            camera={{ position: [20, 20, 20], fov: 75 }}
        >
            <ambientLight />
            <directionalLight intensity={1} position={[20, 20, 20]} />
            <Torus geometry={geometry} edges={edges} />
        </Canvas>
    );
};

export default IsometricDonut;
