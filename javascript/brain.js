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
    const intensity = 0.2;
    const light = new THREE.AmbientLight(color, intensity);
    //scene.add(light);
}

// Upper light
{
    const color = 0xFFFFFF;
    const intensity = 0.6;
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

const objLoader = new THREE.GLTFLoader();
objLoader.load('assets/brain.gltf', (root) => {
  scene.add(root.scene.children[2]);
});

function render() {
  renderer.render(scene, camera);

  requestAnimationFrame(render);
}

requestAnimationFrame(render);
