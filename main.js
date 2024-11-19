import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

const texture = new THREE.TextureLoader().load("images/bricksCube.jpg");
texture.repeat.set(0.6, 0.6);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({
  // color: 0x00ff21,
  wireframe: false,
  map: texture,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;
function animation() {
  requestAnimationFrame(animation);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

   renderer.render(scene, camera);
}

animation();
