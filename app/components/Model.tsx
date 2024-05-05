import { useAnimations, useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react'
import { Group } from 'three'

useGLTF.preload('/WawaOffice.glb')

export default function Model() {
    const group = useRef<Group>(null);
    const scroll = useScroll();
    const { nodes, materials, animations, scene } = useGLTF('/WawaOffice.glb')

    const {actions, clips} = useAnimations(animations, scene)
    
    useFrame((state, delta) => {
        if (group.current) {
           
            group.current.position.y = (scroll.range(1, 1, 1) - 0.5) * 10;
        }
    });

    return (
        <group ref={group}>
            <primitive object={scene} scale={1} />
        </group>
    )
}
