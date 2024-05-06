"use client"

import {Canvas, useThree} from '@react-three/fiber'
import { Suspense } from 'react'
import { useProgress, Html, ScrollControls, OrbitControls } from '@react-three/drei'
import {Office} from './Office'
import { Overlay } from './Overlay'

function Loader() {
    const {progress, active} = useProgress()
    return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
  return (
    <Canvas gl={{antialias:true}} dpr={[1,1.5]} camera={{fov: 50, position: [2.9,1.9,4.3]}} className='w-screen h-screen'>
        <directionalLight position={[5,5,5]} intensity={4} />
        <Suspense fallback={<Loader/>}>
            <OrbitControls enableZoom={false}/>
            <ScrollControls damping={0.5} pages={3}>
               
                <Overlay/>
                <Office/>
            </ScrollControls>   
        </Suspense>
    </Canvas>
  )
}