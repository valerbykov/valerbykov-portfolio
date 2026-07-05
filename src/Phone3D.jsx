import { useEffect, useRef } from "react";
import * as THREE from "three";

/* Interactive 3D phone for the hero (Obsidian Kinetic design).
   VARIANT: wireframe "network globe" — a slowly spinning geodesic sphere
   behind the phone with glowing nodes at its vertices and an orbit ring.
   Lazy-loaded so three.js stays out of the main bundle. */

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

    /* ---- network globe ---- */
    /* R and the ring radius must fit the narrowest container: at z=-1.3 the
       visible half-width is ~2.7 (mobile 300x380), so the ring stays ≤2.55 */
    const R = 2.3;
    const RING = R * 1.1;
    const tilt = new THREE.Group();          // static tilt, like a real globe stand
    tilt.position.z = -1.3;
    tilt.rotation.z = 0.18;
    tilt.rotation.x = 0.22;
    scene.add(tilt);
    const globe = new THREE.Group();         // this one spins
    tilt.add(globe);

    const geoSphere = new THREE.IcosahedronGeometry(R, 1);
    const wireMat = new THREE.MeshBasicMaterial({ color: 0x8fa9a3, wireframe: true, transparent: true, opacity: 0.2 });
    globe.add(new THREE.Mesh(geoSphere, wireMat));

    /* glowing nodes on the lattice vertices */
    const nodesMat = new THREE.PointsMaterial({ color: 0xb1ccc6, size: 0.09, transparent: true, opacity: 0.85 });
    globe.add(new THREE.Points(geoSphere, nodesMat));

    /* amber accent nodes scattered on the surface */
    const accGeo = new THREE.SphereGeometry(0.055, 8, 8);
    const accMat = new THREE.MeshBasicMaterial({ color: 0xffc16c });
    for (let i = 0; i < 8; i++) {
      const dir = new THREE.Vector3().randomDirection();
      const acc = new THREE.Mesh(accGeo, accMat);
      acc.position.copy(dir.multiplyScalar(R));
      globe.add(acc);
    }

    /* orbit ring around the equator */
    const ringGeo = new THREE.TorusGeometry(RING, 0.008, 6, 96);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xe8a33d, transparent: true, opacity: 0.35 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    tilt.add(ring);

    /* satellite dot running along the ring */
    const satGeo = new THREE.SphereGeometry(0.05, 8, 8);
    const satMat = new THREE.MeshBasicMaterial({ color: 0xffc16c });
    const sat = new THREE.Mesh(satGeo, satMat);
    tilt.add(sat);

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

      globe.rotation.y += 0.0018;
      const a = time * 0.0004;
      sat.position.set(Math.cos(a) * RING, 0, Math.sin(a) * RING);

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
      geoSphere.dispose(); wireMat.dispose(); nodesMat.dispose();
      accGeo.dispose(); accMat.dispose();
      ringGeo.dispose(); ringMat.dispose();
      satGeo.dispose(); satMat.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
    };
  }, [onFail]);

  return <div ref={ref} className="phone3d" aria-hidden="true" />;
}
