
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import 'windi.css'

function ThreeScene({ rotation }) {
	const ref = useRef();
	const mouse = new THREE.Vector2();
	let firstRender = true; // Add a flag for the first render
	const clock = new THREE.Clock(); // Create a clock for the AnimationMixer

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, 1, 1, 1000);
		const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

		// Create a video element
		const video = document.createElement('video');
		video.src = '/videos/eyes.mp4';
		video.loop = true;
		video.muted = true;
		video.play();

		// Log to the console to verify that the video has been found
		console.log('Video found:', video);

		// Create a texture from the video
		const videoTexture = new THREE.VideoTexture(video);

		const loader = new GLTFLoader();

		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath('/node_modules/three/examples/jsm/libs/draco/'); // Set the path to the Draco decoder files
		loader.setDRACOLoader(dracoLoader);

		let model;
		let mixer; // Declare the mixer variable outside the loader.load function

		loader.load('/robo3.glb', (gltf) => {
			model = gltf.scene;
			model.position.set(0, -2.5, 0); // Move the model slightly down on the y-axis
			scene.add(model);

			// Create an AnimationMixer and connect it to the model
			mixer = new THREE.AnimationMixer(model);

			// Find the 'Cube.026Action' and 'screenAction.001' animations
			const cubeActions = [];
			for (let i = 26; i <= 54; i++) {
			const action = THREE.AnimationClip.findByName(gltf.animations, `Cube.${i < 100 ? '0' : ''}${i}Action`);
			cubeActions.push(action);
			}
			const screenAction = THREE.AnimationClip.findByName(gltf.animations, 'screenAction.001');

						// Create an AnimationAction for each animation and play them
			cubeActions.forEach((action) => {
			if (action) {
				const animationAction = mixer.clipAction(action);
				animationAction.play();
			}
			});
			if (screenAction) {
				const action = mixer.clipAction(screenAction);
				action.play();
			}

			const screenMesh = model.getObjectByName('screen');
			if (screenMesh) {
				// Create a rotation matrix
				const rotationMatrix = new THREE.Matrix3().set(
					Math.cos(Math.PI / 2), Math.sin(Math.PI / 2), 0,
					-Math.sin(Math.PI / 2), Math.cos(Math.PI / 2), 0,
					0, 0, 1
				);

				// Apply the rotation matrix to the texture
				videoTexture.center.set(0.5, 0.5);
				videoTexture.rotation = Math.PI / 2;

				screenMesh.material.map = videoTexture;
				screenMesh.material.needsUpdate = true;

				// Move the screen mesh slightly forward on the z-axis
				screenMesh.position.x += 0.1;

				// Log to the console to verify that the screen mesh has been found
				console.log('Screen mesh found:', screenMesh);
			} else {
				console.log('Screen mesh not found');
			}
		}, undefined, function (error) {
			console.error(error);
		});

		const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		directionalLight.position.set(0, 0, 10);
		scene.add(directionalLight);

		camera.position.z = 4;
		camera.position.y = 0;
		camera.position.x = 0;

		const animate = () => {
			requestAnimationFrame(animate);

			if (model) {
				if (firstRender) {
					firstRender = false; // Set the flag to false after the first render
				} else {
					// Clamp the mouse position to limit the rotation
					const clampedMouseX = THREE.MathUtils.clamp(mouse.x, 0, 1);
					const clampedMouseY = THREE.MathUtils.clamp(mouse.y, 0, 1);

					const vector = new THREE.Vector3(clampedMouseX * -0.5, clampedMouseY * -0.5, 0.5); // Reduce the rotation strength
					vector.unproject(camera);
					const dir = vector.sub(camera.position).normalize();
					const distance = -camera.position.z / dir.z;
					const pos = camera.position.clone().add(dir.multiplyScalar(distance));

					// Add the initial rotations to the position that the model is looking at
					pos.x += THREE.MathUtils.degToRad(-180);
					pos.y += THREE.MathUtils.degToRad(-145);
					pos.z += THREE.MathUtils.degToRad(-20);

					model.lookAt(pos);
				}
			}
			// Update the animation mixer on each frame
			if (mixer) {
				const delta = clock.getDelta();
				mixer.update(delta);
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
		const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

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