// --- THREE.JS SETUP (The 3D Background) ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg-canvas'),
    alpha: true, // Transparent background
    antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Create 3D Object (Wireframe Sphere/Icosahedron)
const geometry = new THREE.IcosahedronGeometry(12, 1); // Shape, Detail
const material = new THREE.MeshBasicMaterial({ 
    color: 0x00f2ea, // Cyan color
    wireframe: true 
});
const shape = new THREE.Mesh(geometry, material);

// Add to scene
scene.add(shape);

// Add Particles (Stars)
function addStar() {
    const geometry = new THREE.SphereGeometry(0.15, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
}
Array(200).fill().forEach(addStar);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the shape slowly
    shape.rotation.x += 0.001;
    shape.rotation.y += 0.002;
    shape.rotation.z += 0.002;

    renderer.render(scene, camera);
}
animate();

// Handle Window Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Move 3D object on Scroll
document.body.onscroll = () => {
    const t = document.body.getBoundingClientRect().top;
    shape.rotation.y += 0.05;
    camera.position.z = t * -0.01 + 30; // Move camera closer/further
};


// --- GSAP ANIMATIONS (Scroll Effects) ---
gsap.registerPlugin(ScrollTrigger);

// Hero Animation
gsap.from(".hero-content", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 0.2
});

// Section Headers
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1
    });
});

// Cards Animation
gsap.utils.toArray('.glass-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1 // Stagger effect
    });
});