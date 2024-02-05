import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ThreeScene({ rotation }) {
	const ref = useRef();
	const mouse = new THREE.Vector2();

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({ alpha: true });

		const loader = new GLTFLoader();
		let model;

		loader.load('/robo.glb', (gltf) => {
			model = gltf.scene;
			model.position.set(0, -2, -2);
			model.traverse((object) => {
				if (object.isMesh) {
					object.geometry.rotateZ(rotation); 
				}
			});
			scene.add(model);
		}, undefined, function (error) {
			console.error(error);
		});

		const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
		directionalLight.position.set(1, 1, 1);
		scene.add(directionalLight);

		camera.position.z = 5;

		const animate = () => {
			requestAnimationFrame(animate);

			if (model) {
				const vector = new THREE.Vector3(mouse.x * 0.5, mouse.y * 0.5, 0.5); // Reduce the rotation strength
				vector.unproject(camera);
				const dir = vector.sub(camera.position).normalize();
				const distance = -camera.position.z / dir.z;
				const pos = camera.position.clone().add(dir.multiplyScalar(distance));
				model.lookAt(pos);
			}

			renderer.render(scene, camera);
		};

		const handleResize = () => {
			const width = ref.current.offsetWidth;
			const height = ref.current.offsetHeight;

			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		};

		const handleMouseMove = (event) => {
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
		};

		window.addEventListener('resize', handleResize);
		window.addEventListener('mousemove', handleMouseMove);
		
		setTimeout(handleResize, 100);

		animate();

		ref.current.appendChild(renderer.domElement);

		return () => {
			ref.current.removeChild(renderer.domElement);
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, [rotation]);

	return <div ref={ref} className="w-full h-full"></div>;
}

export default ThreeScene;