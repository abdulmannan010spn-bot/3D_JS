import * as THREE from "three";

//Create a Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#f0f0f0");

//Add Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

camera.position.z = 5;

//Create and add a cube object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({
  color: "#308cca",
});

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

//Add Lightning

const light = new THREE.DirectionalLight(0x9cdba6, 10);
light.position.set(1, 1, 1);
scene.add(light);

//Set the renderer

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

//Dont know what is it to be honest

document.body.appendChild(renderer.domElement);

//Animate the scene
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
