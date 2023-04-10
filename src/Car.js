import React, { useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';


export function Car() {
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + 'models/car/scene.gltf'
    );

    useEffect(() => {
        gltf.scene.scale.set(0.005, 0.005, 0.005);
        gltf.scene.position.set(0, -0.035, 0);
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        });
    }, [gltf]);

    // This use to set up spinning wheels
    useFrame((state, delta)=> {
        let t = -state.clock.getElapsedTime();

        let ground = gltf.scene.children[0].children[0].children[0];
        ground.children[0].rotation.x = t * 2;
        ground.children[2].rotation.x = t * 2;
        ground.children[3].rotation.x = t * 2;
        ground.children[6].rotation.x = t * 2;
    })

    return <primitive object={gltf.scene} />
}