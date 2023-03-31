import './style.css';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

function CarShow() {
  return null;
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
