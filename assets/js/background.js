import * as THREE from 'three';

import {
  PerspectiveCamera,
  Scene,
  FogExp2,
  BufferGeometry,
  TextureLoader,
  Float32BufferAttribute,
  PointsMaterial,
  AdditiveBlending,
  Points,
  WebGLRenderer,
} from 'three';

let camera;
let scene;
let parameters;
let renderer;
const materials = [];

const mousePos = {
  mouseX: 0,
  mouseY: 0,
};

const windowSize = {
  x: window.innerWidth,
  y: window.innerHeight,
  halfX: window.innerWidth / 2,
  halfY: window.innerHeight / 2,
};

const randomPos = () => Math.random() * 2000 - 1000;
const randomParticleRot = () => Math.random() * 6;

const resize = () => {
  windowSize.x = window.innerWidth;
  windowSize.y = window.innerHeight;
  windowSize.halfX = window.innerWidth / 2;
  windowSize.halfY = window.innerHeight / 2;

  camera.aspect = windowSize.x / windowSize.y;
  camera.updateProjectionMatrix();

  renderer.setSize(windowSize.x, windowSize.y);
};

const mouseMove = ({ clientX, clientY }) => {
  mousePos.mouseX = clientX - windowSize.halfX;
  mousePos.mouseY = clientY - windowSize.halfY;
};

const touchStart = (event) => {
  if (event.touches.length !== 1) return;
  mousePos.mouseX = event.touches[0].pageX - windowSize.halfX;
  mousePos.mouseY = event.touches[0].pageY - windowSize.halfY;
};

const touchMove = (event) => {
  if (event.touches.length !== 1) return;
  mousePos.mouseX = event.touches[0].pageX - windowSize.halfX;
  mousePos.mouseY = event.touches[0].pageY - windowSize.halfY;
};

const init = () => {
  camera = new THREE.PerspectiveCamera(75, windowSize.x / windowSize.y, 1, 2000);
  camera.position.z = 1000;
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000000, 0.0008);

  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const textureLoader = new THREE.TextureLoader();

  const ok = textureLoader.load('../images/ok.png');
  const cry = textureLoader.load('../images/cry.png');
  const hundred = textureLoader.load('../images/100.png');
  const fire = textureLoader.load('../images/fire.png');

  for (let i = 0; i < 800; i += 1) {
    vertices.push(randomPos(), randomPos(), randomPos());
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  parameters = [
    { sprite: ok, size: 20 },
    { sprite: cry, size: 15 },
    { sprite: hundred, size: 25 },
    { sprite: fire, size: 10 },
  ];

  parameters.forEach(({ sprite, size }, index) => {
    materials[index] = new THREE.PointsMaterial({
      size,
      map: sprite,
      blending: new THREE.AdditiveBlending(),
      depthTest: false,
      transparent: true,
    });

    const particles = new THREE.Points(geometry, materials[index]);

    particles.rotation.x = randomParticleRot();
    particles.rotation.y = randomParticleRot();
    particles.rotation.z = randomParticleRot();

    scene.add(particles);
  });

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(windowSize.x, windowSize.y);
  document.getElementById('canvas').appendChild(renderer.domElement);

  document.addEventListener('mousemove', mouseMove, false);
  document.addEventListener('touchstart', touchStart, false);
  document.addEventListener('touchmove', touchMove, false);

  window.addEventListener('resize', resize, false);
};

const animate = () => {
  requestAnimationFrame(animate);

  const time = Date.now() * 0.00005;

  camera.position.x += (mousePos.mouseX - camera.position.x) * 0.05;
  camera.position.y += (-mousePos.mouseY - camera.position.y) * 0.05;
  camera.lookAt(scene.position);

  for (let i = 0; i < scene.children.length; i += 1) {
    const object = scene.children[i];

    if (object instanceof Points) {
      object.rotation.z = time * (i < 5 ? i + 1 : -(i + 1));
    }
  }

  renderer.render(scene, camera);
};

init();
animate();
