import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function ThreeScene() {
	const ref = useRef();

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer();

		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		const cube = new THREE.Mesh(geometry, material);
		scene.add(cube);

		camera.position.z = 5;

		const animate = () => {
			requestAnimationFrame(animate);

			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;

			renderer.render(scene, camera);
		};

		const handleResize = () => {
			const width = ref.current.offsetWidth;
			const height = ref.current.offsetHeight;

			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		};

		window.addEventListener('resize', handleResize);
		
		setTimeout(handleResize, 100);

		animate();

		ref.current.appendChild(renderer.domElement);

		return () => {
			ref.current.removeChild(renderer.domElement);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return <div ref={ref} className="w-full h-full"></div>;
}

export default ThreeScene;