// let scene = new THREE.Scene();

import { BoxBufferGeometry, PerspectiveCamera } from "three";
import { Mesh } from "three";
import { WebGLRenderer } from "three";
import { MeshBasicMaterial } from "three";
import { Color } from "three";
import { Scene } from "three";

// camera = null;
// // create a geometry
// const geometry = new THREE.BoxBufferGeometry(2, 2, 2);

// // create a default (white) Basic material
// const material = new THREE.MeshBasicMaterial();

// // create a Mesh containing the geometry and material
// const mesh = new THREE.Mesh(geometry, material);

// // add the mesh to the scene
// scene.add(mesh);

// // create the render
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(container.clientWidth, container.clientHeight);
// renderer.setPixelRatio(window.devicePixelRatio);

// // add the automatically created <canvas> element to the page
// container.appendChild(renderer.domElement);

// // render, or 'create a still image', of the scene
// renderer.render(scene, camera);

const container = document.getElementById('scene-container');

// create a scene
const scene = new Scene();
// scene.background = new Color('white');

const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 100;
// create a camera
const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 10);


// create geometry
const geometry = new BoxBufferGeometry(2, 2, 2);

// create material
const material = new MeshBasicMaterial();

// create a Mesh containing the geometry and material
const cube = new Mesh(geometry, material);

// add the mesh to scene
scene.add(cube);

// create a renderer
const renderer = new WebGLRenderer();

// next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);

// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// 
container.append(renderer.domElement);

renderer.render(scene, camera);
