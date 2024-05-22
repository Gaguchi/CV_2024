import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import 'windi.css'

function ThreeScene({ rotation }) {
  const ref = useRef();
  const clock = new THREE.Clock();
  const lastTime = useRef(Date.now());
  const [modelRotation, setModelRotation] =  useState(4.7);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [onPointerDownPointerX, setOnPointerDownPointerX] = useState(0);
  const [onPointerDownModelRotation, setOnPointerDownModelRotation] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Add this line

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, 1, 1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false; // Disable zoom

// Limit vertical rotation (up and down)
controls.minPolarAngle = Math.PI / 2; // radians
controls.maxPolarAngle = Math.PI / 2; // radians

// Limit horizontal rotation (left and right)
controls.minAzimuthAngle = -Math.PI / 4; // radians
controls.maxAzimuthAngle = Math.PI / 4; // radians

    // const video = document.createElement('Screen');
    // video.src = '/videos/eyes2.mp4';
    // video.loop = true;
    // video.muted = true;
    // video.setAttribute('playsinline', ''); // Add this line
    // video.play();

    // const videoTexture = new THREE.VideoTexture(video);

    const video = document.createElement('video');
    video.src = '/videos/eyes2.mp4';
    video.loop = true;
    video.muted = true;
    video.setAttribute('playsinline', '');
    video.play();
  
    const videoTexture = new THREE.VideoTexture(video);
  
    const video1 = document.createElement('video');
    video1.src = '/videos/Screen-Vid-1.mp4';
    video1.loop = true;
    video1.muted = true;
    video1.setAttribute('playsinline', '');
    video1.play();

    const videoTexture1 = new THREE.VideoTexture(video1);

    const video2 = document.createElement('video');
    video2.src = '/videos/Screen-Vid-2.mp4';
    video2.loop = true;
    video2.muted = true;
    video2.setAttribute('playsinline', '');
    video2.play();

    const videoTexture2 = new THREE.VideoTexture(video2);

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        texture: { value: null },
        brightness: { value: 0.5 }, // Adjust to your liking
        contrast: { value: 2.0 }, // Adjust to your liking
      },
      vertexShader: `
        varying vec2 vUv;
    
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D texture;
        uniform float brightness;
        uniform float contrast;
    
        varying vec2 vUv;
    
        void main() {
          vec4 color = texture2D(texture, vUv);
          color.rgb += brightness;
          color.rgb = ((color.rgb - 0.5) * max(contrast, 0.0)) + 0.5;
          gl_FragColor = color;
        }
      `,
    });

    const manager = new THREE.LoadingManager();
    manager.onStart = function (url, itemsLoaded, itemsTotal) {
      setIsLoading(true);
    };
    manager.onLoad = function () {
      setIsLoading(false);
    };

    const loader = new GLTFLoader(manager); // Pass the manager to the loader
    const dracoLoader = new DRACOLoader(manager); // Pass the manager to the dracoLoader
    dracoLoader.setDecoderPath('/node_modules/three/examples/jsm/libs/draco/');
    loader.setDRACOLoader(dracoLoader);

    let model;
    let mixer;

    loader.load('/room.glb', (gltf) => {
      model = gltf.scene;
      model.position.set(0, -5, 0);
      scene.add(model);

      mixer = new THREE.AnimationMixer(model);

      const cubeActions = [];
      for (let i = 26; i <= 56 ; i++) {
        const action = THREE.AnimationClip.findByName(gltf.animations, `Cube.${i < 100 ? '0' : ''}${i}Action`);
        cubeActions.push(action);
      }
      const chessActions = [];
      for (let i = 0; i <= 7; i++) {
        const action = THREE.AnimationClip.findByName(gltf.animations, `chesspiece.${i < 100 ? '0' : ''}${i}Action`);
        chessActions.push(action);
      }
      const screenAction = THREE.AnimationClip.findByName(gltf.animations, 'screenAction.001');
      const roboAction = THREE.AnimationClip.findByName(gltf.animations, 'RoombaAnimation');

      cubeActions.forEach((action) => {
        if (action) {
          const animationAction = mixer.clipAction(action);
          animationAction.play();
        }
      });
      chessActions.forEach((action) => {
        if (action) {
          const animationAction = mixer.clipAction(action);
          animationAction.play();
        }
      });
      if (roboAction) {
        const action = mixer.clipAction(roboAction);
        action.play();
      }

      const screenMesh = model.getObjectByName('Screen');
      const screenMesh2 = model.getObjectByName('Screen2');
      if (screenMesh) {
        screenMesh.material.map = videoTexture2;
        screenMesh.material.needsUpdate = true;
      }
      if (screenMesh2) {
        screenMesh2.material.map = videoTexture1;
        screenMesh2.material.needsUpdate = true;
      }
    // const screenMesh = model.getObjectByName('screen');
    // if (screenMesh) {
    //   videoTexture.center.set(0.5, 0.5);
    //   videoTexture.rotation = Math.PI / 2;

    //   const delta = new THREE.Vector3(0, 0, 0.1); // Define the delta
    //   screenMesh.position.add(delta); // Add the delta to the current position

    //   screenMesh.material.map = videoTexture;
    //   screenMesh.material.needsUpdate = true;

    //   // Create a spot light
    //   const spotLight = new THREE.SpotLight(0xffffff, 10);
      
    //   // Position the spot light directly in front of the 'screen' object
    //   spotLight.position.set(screenMesh.position.x + 1, screenMesh.position.y - 1, screenMesh.position.z+3);
      
    //   // Point the spot light at the 'screen' object
    //   spotLight.target = screenMesh;

    //   // Add the spot light to the scene
    //   scene.add(spotLight);
    // }
    //     if (screenAction) {
    //     const action = mixer.clipAction(screenAction);

    //     // Adjust the x values of the keyframes and log them
    //     const newTracks = action._clip.tracks.map((track) => {
    //       if (track.name.includes('.position')) { // Only adjust position tracks
    //       const newValues = track.values.map((value, index) => {
    //         if (index % 3 === 0) { // Only adjust x values
    //         return value - 0.02; // Adjust the x value
    //         }
    //         return value;
    //       });

    //       console.log(newValues); // Log the new keyframes

    //       // Create a new track with the adjusted keyframes
    //       return new THREE.VectorKeyframeTrack(track.name, track.times, newValues);
    //       }
    //       return track;
    //     });

    //     // Create a new clip with the adjusted tracks
    //     const newClip = new THREE.AnimationClip(action._clip.name, action._clip.duration, newTracks);

    //     // Replace the old action with the new one
    //     mixer.uncacheClip(screenAction);
    //     const newAction = mixer.clipAction(newClip);
    //     newAction.play();
    //     }
        });

    const time = Date.now();
    const delta = (time - lastTime.current) / 1000;
    lastTime.current = time;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 0, 10);
    scene.add(directionalLight);

    camera.position.z = 4;

    const animate = () => {
      requestAnimationFrame(animate);

      if (model) {
        if (!isUserInteracting) {
          setModelRotation(modelRotation + delta * 0.1);
        }
        model.rotation.y = modelRotation;
      }

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

    const handleMouseDown = (event) => {
      setIsUserInteracting(true);
      setOnPointerDownPointerX(event.clientX);
      setOnPointerDownModelRotation(modelRotation);
    };

    const handleMouseMove = (event) => {
      if (isUserInteracting) {
        setModelRotation(onPointerDownModelRotation + (event.clientX - onPointerDownPointerX) * 0.01);
      }
    };

    const handleMouseUp = () => {
      setIsUserInteracting(false);
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

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

  return (
    <div ref={ref} className="w-full h-full">
      {isLoading && <div className="preloader">Loading...</div>} {/* Add this line */}
    </div>
  );
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