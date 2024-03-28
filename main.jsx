
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import 'windi.css'

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
			model.position.set(0, -2, -1);
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
			if (ref.current) {
				ref.current.removeChild(renderer.domElement);
			}
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, [rotation]);

	return <div ref={ref} className="w-full h-full"></div>;
}

function MarshallScene({ rotation }) {
	const ref = useRef();
	const mouse = new THREE.Vector2();

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({ alpha: true });

		const loader = new GLTFLoader();

		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath('/node_modules/three/examples/jsm/libs/draco/'); // Set the path to the Draco decoder files
		loader.setDRACOLoader(dracoLoader);

		let model;
		let mixer;

		loader.load('/assets/Marshall.glb', (gltf) => {
			model = gltf.scene;
			model.position.set(0, -2, -1);
			scene.add(model);
			
			// Create an AnimationMixer and connect it to the model
			mixer = new THREE.AnimationMixer(model);

			// Find the animations and play them
			const action1 = mixer.clipAction(gltf.animations.find(clip => clip.name === 'Cube.003Action'));
			const action2 = mixer.clipAction(gltf.animations.find(clip => clip.name === 'Cube.004Action'));
			action1.play();
			action2.play();	

		}, undefined, function (error) {
			console.error(error);
		});

		const ambientLight = new THREE.AmbientLight(0xffffff, 1);
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		directionalLight.position.set(1, 1, 10);
		scene.add(directionalLight);

		camera.position.z = 5;

		let direction = 1;
		const upperLimit = 0.5; // Set the upper limit
		const lowerLimit = -0.5; // Set the lower limit

		const animate = () => {
			requestAnimationFrame(animate);

			if (model) {
				model.rotation.y += 0.01;

				// Rotate the model along the x-axis and change direction when a limit is reached
				if (model.rotation.x > upperLimit) {
					direction = -1;
				} else if (model.rotation.x < lowerLimit) {
					direction = 1;
				}
				model.rotation.x += 0.001 * direction;
			}
			
			// Update the animation mixer on each frame
			if (mixer) {
				mixer.update(0.03); // The argument to .update() is the time in seconds since the last frame
			}

			renderer.render(scene, camera);
		};
		const handleResize = () => {
			if (!ref.current) {
				return; // Exit early if ref.current is null
			}

			const width = ref.current.offsetWidth;
			const height = ref.current.offsetHeight;

			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		};

		const timeoutId = setTimeout(handleResize, 100); // Store the timeout ID

		window.addEventListener('resize', handleResize);

		setTimeout(handleResize, 100);

		animate();

		ref.current.appendChild(renderer.domElement);

		return () => {
			clearTimeout(timeoutId); // Clear the timeout

			if (ref.current) {
				ref.current.removeChild(renderer.domElement);
			}
			window.removeEventListener('resize', handleResize);
		};
	}, [rotation]);

	return <div ref={ref} className="w-full h-full"></div>;
}

export { ThreeScene, MarshallScene };