import *as THREE from 'three';
const scene = new THREE.scene()
const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000 
)

const render = new THREE.WebGL3DRenderTarget();
