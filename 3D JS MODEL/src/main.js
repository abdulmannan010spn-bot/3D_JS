import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas =  document.getElementById('canvas')

//scene

const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0')

//camera

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000)
camera.position.z =5

//object

const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100)
const material = new THREE.MeshStandardMaterial({color:"#8d98f5"})

const donut = new THREE.Mesh(geometry,material)

//object2

const boxgeometry = new THREE.BoxGeometry(2,0.1,2)
const boxmaterial = new THREE.MeshStandardMaterial({color:"#8d98f5"})

const cuboid = new THREE.Mesh(boxgeometry,boxmaterial)

cuboid.position.y = -1.5

scene.add(donut)
scene.add(cuboid)

//light

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff, 100);
spotLight.position.set(3, 5, 3);
scene.add(spotLight);


//Renderer

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(innerWidth,innerHeight)
renderer.setPixelRatio(window.devicePixelRatio);


//Oribit controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05
controls.enableZoom = true
controls.enablePan = true

//animation
function animate(){
    requestAnimationFrame(animate);
    donut.rotation.x += 0.01
    donut.rotation.y += 0.01
    cuboid.rotation.y += 0.005

    controls.update();
    renderer.render(scene,camera)
}

animate()