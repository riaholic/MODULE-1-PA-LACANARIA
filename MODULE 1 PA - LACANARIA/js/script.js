const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfd1e5);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(5, 5, 10);
camera.lookAt(0, 2, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 8, 5);
scene.add(pointLight);

const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xc2b280 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xe8e8e8, side: THREE.BackSide });
const room = new THREE.Mesh(new THREE.BoxGeometry(20, 10, 20), wallMaterial);
room.position.y = 5;
scene.add(room);

const bedFrame = new THREE.Mesh(
  new THREE.BoxGeometry(4, 0.5, 2),
  new THREE.MeshStandardMaterial({ color: 0x8b5a2b })
);
bedFrame.position.set(-5, 0.25, 0);
scene.add(bedFrame);

const mattress = new THREE.Mesh(
  new THREE.BoxGeometry(3.8, 0.4, 1.9),
  new THREE.MeshStandardMaterial({ color: 0xffffff })
);
mattress.position.set(-5, 0.75, 0);
scene.add(mattress);

const pillow = new THREE.Mesh(
  new THREE.BoxGeometry(1, 0.3, 0.6),
  new THREE.MeshStandardMaterial({ color: 0xf5f5f5 })
);
pillow.position.set(-5, 1.1, 0.6);
scene.add(pillow);

const table = new THREE.Mesh(
  new THREE.BoxGeometry(3, 0.3, 1.5),
  new THREE.MeshStandardMaterial({ color: 0x654321 })
);
table.position.set(4, 1.5, -3);
scene.add(table);

for (let x = -1; x <= 1; x += 2) {
  for (let z = -0.5; z <= 0.5; z += 1) {
    const leg = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 1.5, 0.1),
      new THREE.MeshStandardMaterial({ color: 0x4b2e05 })
    );
    leg.position.set(4 + x * 1.3, 0.75, -3 + z * 0.7);
    scene.add(leg);
  }
}

const monitor = new THREE.Mesh(
  new THREE.BoxGeometry(1.5, 1, 0.1),
  new THREE.MeshStandardMaterial({ color: 0x000000 })
);
monitor.position.set(4, 2.2, -2.5);
scene.add(monitor);

const screen = new THREE.Mesh(
  new THREE.PlaneGeometry(1.4, 0.9),
  new THREE.MeshStandardMaterial({ color: 0x1e90ff })
);
screen.position.set(4, 2.2, -2.45);
scene.add(screen);

const chairSeat = new THREE.Mesh(
  new THREE.BoxGeometry(1, 0.2, 1),
  new THREE.MeshStandardMaterial({ color: 0x8b0000 })
);
chairSeat.position.set(4, 0.5, -1.5);
scene.add(chairSeat);

const chairBack = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 0.1),
  new THREE.MeshStandardMaterial({ color: 0x8b0000 })
);
chairBack.position.set(4, 1, -2);
scene.add(chairBack);

const windowFrame = new THREE.Mesh(
  new THREE.BoxGeometry(3, 2, 0.2),
  new THREE.MeshStandardMaterial({ color: 0x000000 })
);
windowFrame.position.set(0, 5, -9.9);
scene.add(windowFrame);

const glass = new THREE.Mesh(
  new THREE.PlaneGeometry(2.8, 1.8),
  new THREE.MeshStandardMaterial({ color: 0x87ceeb, transparent: true, opacity: 0.7 })
);
glass.position.set(0, 5, -9.8);
scene.add(glass);

const lampBase = new THREE.Mesh(
  new THREE.CylinderGeometry(0.2, 0.2, 0.5, 16),
  new THREE.MeshStandardMaterial({ color: 0x222222 })
);
lampBase.position.set(3, 1.8, -2.8);
scene.add(lampBase);

const lampShade = new THREE.Mesh(
  new THREE.ConeGeometry(0.5, 1, 16),
  new THREE.MeshStandardMaterial({ color: 0xffd700 })
);
lampShade.position.set(3, 2.6, -2.8);
scene.add(lampShade);

function animate() {
  requestAnimationFrame(animate);
  lampShade.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
