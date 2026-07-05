import { useEffect, useRef } from "react";
import * as THREE from "three";

/* Interactive 3D phone for the hero (Obsidian Kinetic design).
   Behind the phone floats a "plexus" network — drifting nodes that link up
   with thin lines when they come close, like a living network diagram.
   Lazy-loaded so three.js stays out of the main bundle. */

const COUNT = 46;          // network nodes
const LINK_DIST = 0.95;    // max distance for a node-to-node link
const BX = 2.2, BY = 2.6;  // half-extents of the drift box
const ZC = -1.4, BZ = 1.0; // z-center and half-depth (kept behind the phone)

export default function Phone3D({ onFail }) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      onFail?.();
      return;
    }
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const keyLight = new THREE.PointLight(0xffc16c, 60);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    /* phone */
    const bodyGeometry = new THREE.BoxGeometry(2.2, 4.4, 0.2);
    const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0x072421, shininess: 100 });
    const phoneBody = new THREE.Mesh(bodyGeometry, bodyMaterial);
    scene.add(phoneBody);
    const screenGeometry = new THREE.PlaneGeometry(2, 4.2);
    const screenMaterial = new THREE.MeshBasicMaterial({ color: 0x00110f });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.z = 0.11;
    phoneBody.add(screen);

    /* ---- plexus network ---- */
    const net = new THREE.Group();
    scene.add(net);

    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const velocities = [];
    const teal = new THREE.Color(0xb1ccc6);
    const amber = new THREE.Color(0xffc16c);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() * 2 - 1) * BX;
      positions[i * 3 + 1] = (Math.random() * 2 - 1) * BY;
      positions[i * 3 + 2] = ZC + (Math.random() * 2 - 1) * BZ;
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.004,
        (Math.random() - 0.5) * 0.004,
        (Math.random() - 0.5) * 0.002
      ));
      const c = i % 6 === 0 ? amber : teal; // a few amber accent nodes
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
    }

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pointsGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const pointsMat = new THREE.PointsMaterial({ size: 0.07, vertexColors: true, transparent: true, opacity: 0.9 });
    net.add(new THREE.Points(pointsGeo, pointsMat));

    const maxSegs = (COUNT * (COUNT - 1)) / 2;
    const linePositions = new Float32Array(maxSegs * 6);
    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const linesMat = new THREE.LineBasicMaterial({ color: 0x8fa9a3, transparent: true, opacity: 0.22 });
    net.add(new THREE.LineSegments(linesGeo, linesMat));

    let mouseX = 0, mouseY = 0;
    const onMouse = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouse);

    const onResize = () => {
      const w = container.clientWidth, h = container.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    let raf;
    const animate = (time) => {
      raf = requestAnimationFrame(animate);
      phoneBody.rotation.y = THREE.MathUtils.lerp(phoneBody.rotation.y, mouseX * 0.4, 0.05);
      phoneBody.rotation.x = THREE.MathUtils.lerp(phoneBody.rotation.x, -mouseY * 0.2, 0.05);

      /* drift nodes inside the box, bounce off the walls */
      for (let i = 0; i < COUNT; i++) {
        const v = velocities[i];
        let x = positions[i * 3] + v.x;
        let y = positions[i * 3 + 1] + v.y;
        let z = positions[i * 3 + 2] + v.z;
        if (x > BX || x < -BX) v.x *= -1;
        if (y > BY || y < -BY) v.y *= -1;
        if (z > ZC + BZ || z < ZC - BZ) v.z *= -1;
        positions[i * 3] = x; positions[i * 3 + 1] = y; positions[i * 3 + 2] = z;
      }
      pointsGeo.attributes.position.needsUpdate = true;

      /* re-link nearby nodes */
      let seg = 0;
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          if (dx * dx + dy * dy + dz * dz < LINK_DIST * LINK_DIST) {
            linePositions.set([
              positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
              positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2],
            ], seg * 6);
            seg++;
          }
        }
      }
      linesGeo.setDrawRange(0, seg * 2);
      linesGeo.attributes.position.needsUpdate = true;

      /* gentle sway of the whole network */
      net.rotation.y = Math.sin(time * 0.0001) * 0.12;

      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      container.removeChild(renderer.domElement);
      bodyGeometry.dispose(); bodyMaterial.dispose();
      screenGeometry.dispose(); screenMaterial.dispose();
      pointsGeo.dispose(); pointsMat.dispose();
      linesGeo.dispose(); linesMat.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
    };
  }, [onFail]);

  return <div ref={ref} className="phone3d" aria-hidden="true" />;
}
