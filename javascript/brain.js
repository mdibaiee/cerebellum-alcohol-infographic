const scene = new THREE.Scene();
const width = 400;
const height = 300;
const camera = new THREE.PerspectiveCamera( 75, width / height, 0.01, 1000 );
camera.position.set(-0.8, 0.11, -0.9);
scene.background = new THREE.Color('white');

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
const canvas = document.getElementById('brain-container');
canvas.appendChild( renderer.domElement );

{
  const controls = new THREE.OrbitControls(camera, canvas);
  controls.target.set(0, 0.5, 0);
  controls.update();
}

// Lights
{ 
    const color = 0xFFFFFF;
    const intensity = 0.6;
    const light = new THREE.AmbientLight(color, intensity);
    scene.add(light);
}

// Upper light
{
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 5, 0);
    light.target.position.set(0, 0.5, 0);
    scene.add(light);
    scene.add(light.target);
}

// Lower light
{
    const color = 0xFFFFFF;
    const intensity = 2;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, -5, 0);
    light.target.position.set(0, 0.5, 0);
    scene.add(light);
    scene.add(light.target);
}

var brain = null;
const objLoader = new THREE.GLTFLoader();
objLoader.load('assets/brain.gltf', (root) => {
  console.log(root.scene.children[2]);
  brain = root.scene.children[2];
  brain.children[5].material.emissive = new THREE.Color('black');
  scene.add(brain);
});

const cerebellumHighlightColor = new THREE.Color(0x9D6720);
const originalColor = new THREE.Color('black');
var highlightColors = [cerebellumHighlightColor, originalColor];
var highlightProgress = 0;
var highlightIndex = 0;

function render() {
  renderer.render(scene, camera);

  if (brain) {
    highlightProgress += 0.025;
    brain.children[5].material.emissive.lerp(highlightColors[highlightIndex], highlightProgress);

    if (highlightProgress >= 1) {
      highlightProgress = 0;
      highlightIndex = (highlightIndex + 1) % 2;
    }
  }

  requestAnimationFrame(render);
}

requestAnimationFrame(render);
