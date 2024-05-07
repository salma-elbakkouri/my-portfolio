// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Sphere geometry
const geometry = new THREE.SphereGeometry(5, 32, 32);

// Adjust UVs to display the texture only on one side of the sphere
geometry.faceVertexUvs[0].forEach((faceUvs, i) => {
    const face = geometry.faces[i];
    const isFrontFace = face.normal.z > 0; // Check if it's the front face of the sphere
    faceUvs.forEach((uv, j) => {
        if (isFrontFace) {
            uv.x = (uv.x + 1) / 2; // Scale and shift UVs to display texture on half of the sphere
        } else {
            uv.x = uv.x / 2; // Shift UVs to display color on the other half
        }
    });
});

// Load texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('./assets/react.png', () => {
    // Ensure the texture is loaded before creating the material
    const material = new THREE.MeshBasicMaterial({ map: texture });

    // Create mesh with geometry and material
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff); // white light
    scene.add(ambientLight);

    // Camera position
    camera.position.z = 15;

    // Add this after the camera setup
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Rotate the sphere
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    animate();
});
